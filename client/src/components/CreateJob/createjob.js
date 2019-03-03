import React, { Component } from "react";
// import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import { Redirect } from 'react-router-dom'
import { timingSafeEqual } from "crypto";



class CreateJob extends Component {
  state = {
    jobs: [],
    title: "",
    description: "",
    budget: 0,
    status: "",
  };

  componentDidMount() {
    if(this.props.loggedIn){
      this.loadJobs();
    }
  }

  loadJobs = () => {
    API.getAllJobs()
      .then(res =>
        this.setState({ jobs: res.data, title: "", description: "", budget: "" })
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
    if(!this.props.loggedIn){
      return <Redirect to="/login"/>
    }else{
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
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Job List</h1>
              </Jumbotron>
              {this.state.jobs.length ? (
                <List>
                  {this.state.jobs.map(job => (
                    //  <ListItem key={job._id}>
                    <div className="col">
                      <div className="col s12 m12">
                        <div className="card">
                          <div className="card-image" key={job._id}>
                            {/* <img src="images/sample-1.jpg"> */}
                          </div>
                          <div className="card-content">
                            <span className="card-title">{job.title}</span>
                            <p>{job.description}</p>
                          <button id="addjobbtn" className="waves-effect waves-light btn btn-success">ADD JOB</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    // </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default CreateJob;
