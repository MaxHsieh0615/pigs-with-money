import React, { Component } from "react";
import API from "../../utils/API";
import { Button, Col, Card } from "react-materialize"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Product extends Component {
  constructor(props) {
    super(props);
    const { product } = props;
    this.state = {
      id: product.id,
      name: product.name,
      info: product.info,
      price: product.price,
      qty: product.qty,
      childId: "",
      childName: "",
      childBalance: 0,
      counter: 0
    };
  };
  notify = (msg) => toast(msg);

  toggleChildren = () => {
    const { counter } = this.state;
    const { children } = this.props;
    if (children.length >= 0) {
      const key = counter % children.length;
      this.setState({
        childName: children[key].name,
        childId: children[key].id,
        childBalance: children[key].balance,
        counter: counter + 1
      });
    }
  };

  buy = event => {
    const childMatch = this.props.children.filter(child => child.name === this.state.childName);
    if (childMatch ===0){
      this.notify("Please click 'For' to assign child." );
      return
    }

    if (this.state.childBalance - this.state.price <0) {
      this.notify("Not enough money.");
      return
    }

    API.buyProduct({
      productId: this.state.id,
      childId: this.state.childId
    })
      .then(res => {
        this.notify(`Bought a : ${this.state.name}`)
        this.props.loadProducts();
      })
      .catch(err => console.log(err));
  }


  render() {
    const { product } = this.props;
    return (
      <Col s={12} m={6}>
        <ToastContainer />

        {<Card className="small" title={product.name}
          actions={[
            <Button waves="light" key={product.id} id={product.id} onClick={this.buy}>Buy</Button>
          ]}>
          <p>{product.info}</p>
          <p className="card-text">Qty: {product.qty}</p>
          <p className="card-text">Price: ${product.price}</p>
          <p onClick={this.toggleChildren} className="btn">For: {this.state.childName}</p>
        </Card>}
      </Col>
    )
  }
}

export default Product;
