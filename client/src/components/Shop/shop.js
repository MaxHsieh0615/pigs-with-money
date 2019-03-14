import React, { Component } from "react";
import API from "../../utils/API";
import Product from "./product";
import { Redirect } from "react-router-dom";
import { Row } from "react-materialize";
import AddProductForm from "./AddProductForm";
import { List } from "../List";

class Shop extends Component {
  state = {
    products: [],
    children: [],
    modalShow: false,
    name: "",
    info: "",
    qty: 0,
    price: 0
  };

  componentDidMount() {
   if (this.props.loggedIn) {
    this.loadProducts();
   }
  }

  loadProducts = () => {
    API.getAllProducts()
      .then(products => this.loadChildren(products))
      .catch(err => console.log(err));
  };

  loadChildren = (products) => {
    API.findAllByChild()
      .then(children =>
        this.setState({
          children: children.data,
          products: products.data
        }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.price && this.state.info) {
      API.createProduct({
        name: this.state.name,
        info: this.state.info,
        price: this.state.price,
        qty: this.state.qty
      })
        .then(res =>{})
        .catch(err => console.log(err));
    }
  };

  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  };

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.props.price);
  }

  showInfo() {
    this.props.handleShow(this.props.info);
  }

  render() {
    const { products,children } = this.state;
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      
      return (
        <div>
          <AddProductForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
          <Row> 
              {products !== null ? (
                <List>
                {products.map(product => (
                  <Product product={product} children={children} loadProducts={this.loadProducts} key={product.id}/>
                ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
          </Row>
        </div>
      );
    }
  }
}

export default Shop;
