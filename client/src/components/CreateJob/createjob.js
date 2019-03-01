import React, { Component } from "react";
// import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
// import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

class CreateJob extends Component {
  state = {
    title: "",
    description: "",
    budget: 0,
    status: "",
  };

//   componentDidMount() {
//     this.loadJobs();
//   }

//   loadJobs = () => {
//     API.getJobs()
//       .then(res =>
//         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   deleteJob = id => {
//     API.deleteJob(id)
//       .then(res => this.loadJobs())
//       .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.description) {
      API.getCreateJob({
        title: this.state.title,
        description: this.state.description,
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
              <h1>Create Job</h1>
            </Jumbotron>
            <form>
              <Input
                type="text"
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <Input
                type="number"
                value={this.state.budget}
                onChange={this.handleInputChange}
                name="budget"
                placeholder="Budget (Optional)"
              />
              <FormBtn
                disabled={!(this.state.description && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Job
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateJob;
