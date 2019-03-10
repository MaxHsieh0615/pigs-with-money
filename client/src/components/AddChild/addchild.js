import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import { Redirect } from "react-router-dom";
import { Modal } from 'react-materialize';
import Button from 'react-bootstrap/Button';



class AddChild extends Component {
  state = {
    children: [],
    child_name: "",
    piggy: 0,
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
          child_name: "",
          piggy: "",
          budget: ""
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
    if (this.state.child_name && this.state.piggy) {
      API.getAddChild({
        child_name: this.state.child_name,
        piggy: this.state.piggy
      })
        // FIXME: see .then below
        .then(res => this.loadChild())
        .catch(err => console.log(err));
    }
  };

  removeChild = events => {
    console.log(events.target.id)
    API.deleteAddChild(events.target.id)
      .then(res => this.loadChild())
      .catch(err => console.log(err));
  }

  render() {
    const loggedIn = this.props.loggedIn;
        const modalClose = () => this.setState(
            { modalShow: false },
            this.loadJobs(),
            this.reload()
        );
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div className="container">
          <Container fluid>
            <Row>
              <Col size="md-6">
                {/* <Jumbotron>
                  <h1>Add Child</h1>
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
              <Col size="md-6 sm-12">
              */}
                <Modal
                  {...this.props}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  show={this.state.modalShow}
                  onHide={modalClose}
                ></Modal>
                <Modal
                  header='Add a Child'
                  trigger={<Button>CREATE CHILD</Button>}
                >
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
                </Modal>
                  <Jumbotron>
                    <h1>Child List</h1>
                  </Jumbotron>
                  {this.state.children.length ? (
                    <List>
                      {this.state.children.map(child => (
                        //  <ListItem key={job._id}>
                        <div className="col">
                          <div className="col s12 m12">
                            <div className="card">
                              <div className="card-image" key={child.id}>
                                {/* <img src="images/sample-1.jpg"> */}
                              </div>
                              <div className="card-content">
                                <span className="card-title">{child.child_name}</span>
                                <p>{child.piggy}</p>
                                <button
                                  id={child.id}
                                  className="waves-effect waves-light btn btn-success"
                                  onClick={this.removeChild}
                                >
                                  REMOVE CHILD
                              </button>
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
        </div>
          );
        }
      }
    }
    export default AddChild;
