import React, { Component } from "react";
// TODO: Create products db to hold prod data
// FIXME: import API from "../../utils/API";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../Modals/index";

let productList = [
  { name: "Ice Cream", price: 1, info: "Let's get some ice cream!" },
  {
    name: "Popcorn & Movie",
    price: 10,
    info: "Ready to watch a movie? Popcorn included!"
  }
];

/* Product */
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      qty: 0
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

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
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          text="example text goes here"
          onHide={modalClose}
        />
        <div className="row form-group">
          <div className="col-sm-10">
            <h4>
              {this.props.name}: ${this.props.price}
            </h4>
          </div>
          <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
        </div>
        <div className="row btn-toolbar">
          <div className="col-6">
            <button
              className="waves-effect waves-light btn btn-outline-primary"
              onClick={this.showInfo}
            >
              show info
            </button>
          </div>
          <div className="col-6 text-right">
            <button
              className="waves-effect waves-light btn btn-outline-primary"
              onClick={this.add}
            >
              +1
            </button>
            <button
              className="waves-effect waves-light btn btn-outline-primary"
              onClick={this.subtract}
              disabled={this.state.qty < 1}
            >
              -1
            </button>
          </div>
        </div>
        <hr />
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch modal
        </Button>
      </div>
    );
  }
}

/* Total */
class Total extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let total = this.props.total.toFixed(2);

    return (
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "#F6F6F6",
          padding: "10px"
        }}
      >
        <h3 className="row" style={{ fontWeight: 400 }}>
          <span className="col-6">total price:</span>
          <span className="col-6 text-right">${total}</span>
        </h3>
      </div>
    );
  }
}
// TODO: Create CHECKOUT btn to debit from piggy bank

/* ProductForm */
class ProductForm extends Component {
  submit(e) {
    e.preventDefault();
    var product = {
      name: this.refs.name.value,
      price: Number(this.refs.price.value),
      info: this.refs.info.value
    };
    console.log(this.refs.name.value, this.refs.price.value);
    this.props.handleProduct(product);
    this.refs.name.value = "";
    this.refs.price.value = 0;
    this.refs.info.value = "";
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <h3>add item</h3>
        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">item name:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              ref="name"
              placeholder="Museum Visit"
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">price:</label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              ref="price"
              placeholder="10"
              required
            />
          </div>
        </div>

        <div className="row form-group">
          <label className="col-sm-2  col-sm-form-label">info:</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              ref="info"
              placeholder="Let's go to the museum!"
            />
          </div>
        </div>

        <div className="row form-group">
          <div className="offset-2 col-10">
            <button className="btn btn-outline-primary">create item</button>
          </div>
        </div>

        <hr />
      </form>
    );
  }
}

/* ProductList */
class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };

    this.createProduct = this.createProduct.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.showProduct = this.showProduct.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }

  createProduct(product) {
    this.setState({
      products: this.state.productList.push(product)
    });
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }

  showProduct(info) {
    console.log(info);
    alert(info);
  }

  render() {
    if (!this.state.productList) return <p>loading...!!!!</p>;

    var component = this;
    var products = this.state.productList.map(function(product) {
      return (
        <Product
          name={product.name}
          price={product.price}
          info={product.info}
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}
        />
      );
    });

    return (
      <div>
        <ProductForm handleProduct={this.createProduct} />
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}

export default ProductList;
