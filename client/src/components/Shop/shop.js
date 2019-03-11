import React, { Component } from "react";
import API from "../../utils/API";
import productsList from "./productList";
// import { Col, Row, Container } from "../Grid";
// import Jumbotron from "../Jumbotron";
// import { Input, TextArea, FormBtn } from "../Form";
import { Redirect } from "react-router-dom";
import { Row } from "react-materialize";
import AddProductForm from "./AddProductForm";

class Shop extends Component {
  state = {
    products: [],
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
      .then(res =>
        this.setState({
          products: res.data,
          name: "",
          info: "",
          qty: 0,
          price: 0
        })
      )
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

  addCart() {

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
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      
      return (
        <div>
          <AddProductForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
          <Row> 
              {this.state.products.length ? (
                <productList products={this.state.products} />
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
