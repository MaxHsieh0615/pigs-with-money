import React, { Component } from "react";
// TODO: Create products db to hold prod data
// FIXME: import API from "../../utils/API";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../Modals/index";


/* Product */
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  };

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
      API.getAllProducts({
        name: this.state.name,
        info: this.state.info,
        price: this.state.price,
        qty: this.state.qty
      })
        .then(res => this.loadJobs())
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
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <form>
          <h3>add item</h3>
          <div className="row">
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
  
          <div className="row">
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
  
          <div className="row">
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
        </form>
        {/* <MyVerticallyCenteredModal
          show={this.state.modalShow}
          text="example text goes here"
          onHide={modalClose}
        /> */}
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

export default Shop;