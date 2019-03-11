import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { List } from "../List";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { Input, TextArea, FormBtn } from "../Form";
import { Redirect } from "react-router-dom";
import Job from "../Job";
import { Modal } from 'react-materialize';
import "./style.css";

// export default () => (
//   <Button waves='light'>
//     <Icon>thumb_up</Icon>
//   </Button>
// )

class CreateJob extends Component {
  state = {
    children: [],
    jobs: [],
    title: "",
    description: "",
    budget: 0,
    status: ""
  };

  componentDidMount() {
    if (this.props.loggedIn) {
      this.loadJobs();
    }
  };

  //Load Jobs and Load Children together, so both state will be available for the child component
  loadJobs = () => {
    API.getAllJobs()
      .then(jobs =>
        {this.loadChildren(jobs);
      })
      .catch(err => console.log(err));
  };

  loadChildren = (jobs) => {
    API.findAllByChild()
      .then(children =>
        this.setState({
          children:children.data,
          jobs: jobs.data
        }))
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
    if (this.state.title && this.state.description) {
      API.getCreateJob({
        title: this.state.title,
        description: this.state.description,
        budget: this.state.budget
      })
        .then(res => this.loadJobs())
        .catch(err => console.log(err));
    }
  };

  render() {
    const{children} = this.state;
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
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
              <Jumbotron>
                <h1>Job List</h1>
              </Jumbotron>
              <Col size="md-6 sm-12">
                {this.state.jobs.length ? (
                  <List>
                  {this.state.jobs.map(job => (
                    <Job job={job} children={children} key={job.id}/>
                  ))}
                  </List>
                ) : (
                    <h3>No Results to Display</h3>
                  )}
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  };
}

export default CreateJob;