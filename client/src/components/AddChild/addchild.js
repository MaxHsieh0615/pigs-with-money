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
    child_name: "",
    piggy: 0,
    status: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.child_name && this.state.piggy) {
      API.getAddChild({
        child_name: this.state.child_name,
        piggy: this.state.piggy
      })
      // FIXME: see .then below
        .then(res => this.getAddChild())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add child_name</h1>
            </Jumbotron>
            <form>
              <Input
                type="text"
                value={this.state.child_name}
                onChange={this.handleInputChange}
                name="child_name"
                placeholder="Name (required)"
              />
              <Input
                type="number"
                value={this.state.piggy}
                onChange={this.handleInputChange}
                name="piggy"
                placeholder="Budget (Optional)"
              />
              <FormBtn
                disabled={!(this.state.child_name && this.state.piggy)}
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
