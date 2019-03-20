import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { List } from "../List";
import { Button, Col, Row, Container } from "react-materialize";
import "./style.css";
// import { Redirect } from "react-router-dom";

class PiggyBank extends Component {
  state = {
    children: [],
    name: "",
    balance: "",
    transactions: []
  };

  componentDidMount() {
    this.loadChild();
  }

  loadChild = () => {
    API.findAllByChild()
      .then(res => {
        this.setState({
          children: res.data,
          name: res.data[0].name,
          balance: res.data[0].balance
        });
        this.showAllTransactions();
      })
      .catch(err => console.log(err));
  };

  showAllTransactions = () => {
    API.showAllTransactions(this.state.children.id) //for loop here?
      .then(res =>
        this.setState({
          transactions: res.data[0].transactions
        })
      )
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name) {
  //     API.selectChild({
  //       name: this.state.name,
  //       balance: this.state.balance,
  //       transactions: this.state.transactions
  //     })
  //       .then(res => this.loadChild())
  //       .catch(err => console.log(err));
  //   }
  // };
  handleClick = () =>{
  
  }

  render() {
    return (
      <Container fluid>
        <Row>
          {this.state.children.length ? (
            <List>
              {this.state.children.map(child => (
                <Col s={12} m={3} key={child.id}>
                  <Button
                    onClick={this.handleClick}
                    id="selectChild"
                    className="btn-lrg"
                  >
                    View {child.name}'s Balance
                  </Button>
                </Col>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.name}'s Piggy Bank</h1>
              <h2>Balance: {this.state.balance}</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3> Transactions: </h3>
            <Row>
              <Col size="md-6">
                {this.state.transactions.length ? (
                  <List>
                    {this.state.transactions.map(item => (
                      <h5>
                        {item.updatedAt}: {item.transaction}. {item.description}
                        .
                      </h5>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
                ;
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PiggyBank;
