import React, { Component } from "react";
import API from "../../utils/API";
import { Button, Col, Card } from 'react-materialize'

class Product extends Component {
  constructor(props) {
    super(props);
    const { product } =  props;
    this.state={
      //childId: product.assigneeId,
      //childName: product.assignee !== null ? product.assignee.name : null,
      //status: product.status,
      counter: 0,
    };
  };

  buy = event => {
    const { id } = event.target;
    if (this.state.title && this.state.description) {
      API.getCreateJob({
        title: this.state.title,
        description: this.state.description,
        budget: this.state.budget
      })
        .then(res => this.loadJobs())
        .catch(err => console.log(err));
    }
  }


  render() { 
    const { product } = this.props;
    return (
      <Col s={12} m={6}>
        {/* <Card className='small' title={product.name}
          actions={[
            <Button waves='light' key={product.id} id={product.id} onClick={this.buy}>Buy</Button>
          ]}>
          <p>{product.info}</p>
          <p className="card-text">Qty: {product.qty}</p>
          <p className="card-text">Price: ${product.price}</p>
          <p onClick={this.toggleChildren}>Assign to : {this.state.childName}</p>
        </Card> */}
      </Col>
    )
  }
}

export default Product;
