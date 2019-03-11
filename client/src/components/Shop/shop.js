import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../Modals/index";
import ProductsList from "./productList";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import { Input, TextArea, FormBtn } from "../Form";
import { Redirect } from "react-router-dom";

/* Product */
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      modalShow: false,
      name: "",
      info: "",
      qty: 0,
      price: 0
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  componentDidMount() {
    // if (this.props.loggedIn) {
    this.loadProducts();
    // }
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
    console.log("Prod submit btn clicked")
    if (this.state.name && this.state.price && this.state.info) {
      API.createProduct({
        name: this.state.name,
        info: this.state.info,
        price: this.state.price,
        qty: this.state.qty
      })
        .then(res => this.loadProducts())
        .catch(err => console.log(err));
    }
  };

  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  }

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
          <h1>{this.props.email}</h1>
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>Create Product</h1>
                </Jumbotron>
                <form>
                  <Input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Product name (required)"
                  />
                  <TextArea
                    value={this.state.info}
                    onChange={this.handleInputChange}
                    name="info"
                    placeholder="Info (required)"
                  />
                  <Input
                    type="number"
                    value={this.state.price}
                    onChange={this.handleInputChange}
                    name="price"
                    placeholder="Price (optional)"
                  />
                  <Input
                    type="number"
                    value={this.state.qty}
                    onChange={this.handleInputChange}
                    name="qty"
                    placeholder="Qty (optional)"
                  />
                  <FormBtn
                    disabled={!(this.state.name && this.state.info)}
                    onClick={this.handleFormSubmit}
                  >
                    Add Product
                  </FormBtn>
                </form>
              </Col>
              <Col size="md-6 sm-12">
                <Jumbotron>
                  <h1>Products List</h1>
                </Jumbotron>
                {this.state.products.length ? (
                  <ProductsList products={this.state.products} />
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Container>
          {/* <MyVerticallyCenteredModal
          show={this.state.modalShow}
          text="example text goes here"
          onHide={modalClose}
        /> */}
        </div>
      );
    }
  }
}

export default Shop;
