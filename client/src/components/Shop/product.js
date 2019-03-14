import React, { Component } from "react";
import API from "../../utils/API";
import { Button, Col, Card } from 'react-materialize'

class Product extends Component {
  constructor(props) {
    super(props);
    const { product } =  props;
    this.state={
      id: product.id,
      name: product.name,
      info: product.info,
      price: product.price,
      qty: product.qty,
      childId: "",
      childName: "",
      counter: 0
    };
  };

  toggleChildren = () =>{
    const { counter } = this.state;
    const { children } = this.props; 
    if ( children.length >= 0 ){
      const key = counter % children.length;
      this.setState({childName:children[key].name,
        childId: children[key].id, 
        counter: counter + 1});
    }
  };

  buy = event => {
      API.buyProduct({
        productId: this.state.id,
        childId: this.state.childId
      })
        .then(res => this.props.loadProducts())
        .catch(err => console.log(err));
  }


  render() { 
    const { product } = this.props;
    return (
      <Col s={12} m={6}>
        {<Card className='small' title={product.name}
          actions={[
            <Button waves='light' key={product.id} id={product.id} onClick={this.buy}>Buy</Button>
          ]}>
          <p>{product.info}</p>
          <p className="card-text">Qty: {product.qty}</p>
          <p className="card-text">Price: ${product.price}</p>
          <p onClick={this.toggleChildren}>For: {this.state.childName}</p>
        </Card> }
      </Col>
    )
  }
}

export default Product;
