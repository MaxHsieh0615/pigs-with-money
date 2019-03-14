import React, { Component } from "react";
import API from "../../utils/API";
import Product from "./product";
import { Redirect } from "react-router-dom";
import { Button,Row,Modal } from "react-materialize";
import AddProductForm from "./AddProductForm";
import { List } from "../List";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        .then(res =>{
          this.setState({isModalOpen:false})
          this.loadProducts();
          this.notify("Added product.");
        })
        .catch(err => console.log(err));
    }
  };

  openModal = () => {
    this.setState({isModalOpen: true});
  };

  render() {
    const { products,children } = this.state;
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      
      return (
        <div>
          <ToastContainer />
          <Button onClick={this.openModal}>Add Product</Button>
          <Modal
          open={this.state.isModalOpen}
          header='Create Product'
          >
            <AddProductForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
          </Modal>
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
