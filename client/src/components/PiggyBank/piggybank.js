import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
// import { Col, Row, Container } from "../Grid";
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
  };

  loadChild = () => {
    API.findAllByChild()
      .then(res => {
        this.setState({
          children: res.data,
          name: res.data[0].name,
          balance: res.data[0].balance
        });
        // this.showAllTransactions();
      })
      .catch(err => console.log(err));
  };

  showAllTransactions = () => {
    API.showAllTransactions(this.state.children[0].id)
      .then(res =>
        this.setState({
          transactions: res.data
        })
      )
      .catch(err => console.log(err));
  };

selectChild = () => {
  this.setState({isChildSelected: true});
};

  render() {
    return (
      <Container fluid>
        <Row>
          {this.state.children.length ? (
            <List>
              {this.state.children.map(child => (
                <Col s={12} m={3} key={child.id}>
                  <Button onClick={this.selectChild} id="selectChild">
                    View {child.name}'s Balance
                  </Button>
                </Col>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Row>
        </Container>
        
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
      
    );
  }
}

export default PiggyBank;
