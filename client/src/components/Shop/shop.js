import React, { Component } from "react";
import API from "../../utils/API";
import Product from "./product";
import { Redirect } from "react-router-dom";
import Jumbotron from "../Jumbotron";
import { Button, Row, Modal, FormBtn } from "react-materialize";
import AddProductForm from "./AddProductForm";
import { List } from "../List";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";


class Shop extends Component {
  state = {
    products: [],
    children: [],
    modalShow: false,
    name: "",
    info: "",
    qty: 0,
    price: 0,
    isModalOpen: false
  };

  notify = (msg) => toast(msg);

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
        .then(res => {

          this.setState({ isModalOpen: false, name: "", info: "", price: 0, qty: 0 });
          this.loadProducts();
          this.notify("Added product.");
        })
        .catch(err => console.log(err));
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { products, children } = this.state;
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {

      return (
        <div>
          <ToastContainer />
          <Jumbotron>
            <Button onClick={this.openModal} id="addProductBtn">Add Product</Button>
            <Modal
              open={this.state.isModalOpen}
              header="Create Product"
              actions={
                [<Button onClick={this.closeModal}>Close</Button>,
                  <Button onClick={this.handleFormSubmit} id="createProductBtn">Create</Button>]
              }
            >
              <AddProductForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} closeModal={this.closeModal}/>
            </Modal>
            <h1>Product List</h1>
          </Jumbotron>
          <Row>
            {products !== null ? (
              <List>
                {products.map(product => (
                  <Product product={product} children={children} loadProducts={this.loadProducts} key={product.id} />
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