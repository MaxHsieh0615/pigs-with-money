import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

class AddChild extends Component {
  state = {
    name: "",
    budget: 0,
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.budget) {
      API.getAddChild({
        name: this.state.name,
        budget: this.state.budget
      })
        // .then(res => this.loadJobs())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create Child</h1>
            </Jumbotron>
            <form>
              <Input
                type="text"
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                type="number"
                value={this.state.budget}
                onChange={this.handleInputChange}
                name="budget"
                placeholder="Budget (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.budget)}
                onClick={this.handleFormSubmit}
              >
                Add Child
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddChild;
