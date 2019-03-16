import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import { List } from "../List";
import API from "../../utils/API";
import { FormBtn } from "../Form";
import { Redirect } from "react-router-dom";
import Job from "../Job";
import { Col, Row, Modal, Input, Button, Icon } from "react-materialize";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CreateJob extends Component {
  state = {
    children: [],
    jobs: [],
    title: "",
    description: "",
    budget: 0,
    status: "",
    isModalOpen: false
  };

  notify = (msg) => toast(msg);

  componentDidMount() {
    if (this.props.loggedIn) {
      this.loadJobs();
    }
  };

  //Load Jobs and Load Children together, so both state will be available for the child component
  loadJobs = () => {
    API.getAllJobs()
      .then(jobs => {
        this.loadChildren(jobs);
      })
      .catch(err => console.log(err));
  };

  loadChildren = (jobs) => {
    API.findAllByChild()
      .then(children =>
        this.setState({
          children: children.data,
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
        .then(res => {
          this.setState({ isModalOpen: false });
          this.notify("Added a job.");
          this.loadJobs()
        })
        .catch(err => console.log(err));
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    const { children } = this.state;
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <ToastContainer />
          <div className="container-fluid">
            <Row>
              <Col m={6} s={12}>
                <Modal
                  open={this.state.isModalOpen}
                  header="Add a Job"
                >
                  <form>
                    <Input
                      type="text"
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      name="title"
                      label="Title (Required)">
                      <Icon>title</Icon>
                      </Input>
                    <Input
                      type="textarea"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                      name="description"
                      label="Description (Optional)">
                      <Icon>description</Icon>
                      </Input>
                    <Input
                      type="number"
                      value={this.state.budget}
                      onChange={this.handleInputChange}
                      name="budget"
                      label="Budget (Optional)"
                      validate defaultValue="0">
                      <Icon>attach_money</Icon>
                    </Input>
                    <FormBtn
                      disabled={!(this.state.description && this.state.title)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit Job
                    </FormBtn>
                  </form>
                </Modal>
              </Col>
            </Row>
            <Row>
              <Jumbotron>
              <Button onClick={this.openModal} id="createJobBtn">CREATE JOB</Button>
                <h1>Job List</h1>
              </Jumbotron>
              {this.state.jobs.length ? (
                <List>
                  {this.state.jobs.map(job => (
                    <Job job={job} children={children} loadJobs={this.loadJobs} key={job.id} />
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Row>
          </div>
        </div>
      );
    }
  };
}

export default CreateJob;