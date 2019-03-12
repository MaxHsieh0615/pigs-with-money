import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Redirect } from "react-router-dom";

class PiggyBank extends Component {
  state = {
    piggyBank: [],
    name: "",
    balance: 0,
    transaction: ""
  };
  // state = {
  //   piggyBank: {}
  // };
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }
  componentDidMount() {
    this.loadPiggyBank();
  }

  loadPiggyBank = () => {
    API.showAllTransactions()
      .then(res =>
        this.setState({
          piggyBank: res.data,
          name: "",
          balance: 0,
          transaction: ""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.Child.child_name}'s Piggy Bank</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {this.state.piggyBank.map(item => (
            <Col size="md-12">
              <p>
                <h3>Balance: {this.state.piggyBank.item.balance}</h3>
              </p>
              <p>
                <h3>Transactions: {this.state.piggyBank.item.transaction}</h3>
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PiggyBank;
