import React, { Component } from "react";
import API from "../../utils/API";
import { List } from "../List";
import { Redirect } from "react-router-dom";
import {Button,Input,Col,Row,Card} from "react-materialize";
import Jumbotron from "../Jumbotron";

class AddChild extends Component {
  state = {
    children: [],
    name: "",
    balance: 0,
    status: ""
  };

  componentDidMount() {
    if (this.props.loggedIn) {
      this.loadChild();
    }
  }

  loadChild = () => {
    API.findAllByChild()
      .then(res =>
        this.setState({
          children: res.data,
          name: "",
          balance: 0
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
    if (this.state.name && this.state.balance) {
      API.createChild({
        name: this.state.name,
        balance: this.state.balance
      })
        // FIXME: see .then below
        .then(res => this.loadChild())
        .catch(err => console.log(err));
    }
  };

  removeChild = events => {
    const {id} = events.target;
    API.removeChild(id)
      .then(res => this.loadChild())
      .catch(err => console.log(err));
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
        <Row>
          <Col s={12}>
            <Jumbotron>
              <h1>Add Child</h1>
            </Jumbotron>
            <Row>
              <Input
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                type="number"
                value={this.state.balance}
                onChange={this.handleInputChange}
                name="balance"
                placeholder="Budget (Optional)"
              />
              <Button
                disabled={!this.state.name}
                onClick={this.handleFormSubmit}
              >
                Add
              </Button>
            </Row>
          </Col>
          </Row>
          <Row>
            <Jumbotron>
              <h1>Child List</h1>
            </Jumbotron>

            {this.state.children.length ? (
              <List>
                {this.state.children.map(child => (
                  //  <ListItem key={job._id}>
                  <Col s={12} m={6} key={child.id}>
                    <Card className='small' title={child.name}
                    actions={[<Button waves='light' key={child.id} id={child.id} onClick={this.removeChild}> Remove Child</Button>
                            ]}>
                      <p className="card-text">{child.name}</p>
                      <p>Balance: {child.balance}</p>
                    </Card>
                  </Col>
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
export default AddChild;
