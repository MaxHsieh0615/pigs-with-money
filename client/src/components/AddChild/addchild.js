import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { FormBtn } from "../Form";
import { List } from "../List";
import { Redirect } from "react-router-dom";
import { Modal, Card, Col, Row, Button, Input, Icon } from "react-materialize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";



class AddChild extends Component {
  state = {
    children: [],
    name: "",
    balance: 0,
    status: "",
    isModalOpen: false
  };

  notify = (msg) => toast(msg);

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
        .then(res => {
          this.notify(`Added ${this.state.name}.`);
          this.setState({isModalOpen: false, name: "", balance: 0, status: ""});
          //reset form.
          this.setState({name: "",
          balance: 0});
          this.loadChild()})
        .catch(err => console.log(err));
    }
  };

  removeChild = events => {
    const {id} = events.target;
    const childMatch = this.state.children.filter(child => child.id === id);


    API.removeChild(id)
      .then(res => {
        this.notify(`I disown yoooOOOUUU ${childMatch}!!!!!`);  
        this.loadChild()})
      .catch(err => console.log(err));
  };

  openModal = () => {
    this.setState({isModalOpen: true});
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <ToastContainer/>
          <Modal
            open={this.state.isModalOpen}
            header="Add a Child"
          >
            <form>
              <Input
                type="text"
                value={this.state.child_name}
                onChange={this.handleInputChange}
                name="name"
                label="Name (required)">
                <Icon>account_circle</Icon>
              </Input>
              <Input
                type="number"
                value={this.state.piggy}
                onChange={this.handleInputChange}
                name="balance"
                label="Budget (Optional)">
                <Icon>attach_money</Icon>
                </Input>
              <FormBtn
                disabled={!(this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Add Child
              </FormBtn>
              <FormBtn
                    onClick={this.closeModal}
                  >
                    Close
                  </FormBtn>
            </form>
          </Modal>
          <Jumbotron>
          <Button onClick={this.openModal} id="createChildBtn">CREATE CHILD</Button>
            <h1>Child List</h1>
          </Jumbotron>
          <Row>
          {this.state.children.length ? (
            <List>
              {this.state.children.map(child => (
                <Col s={12} m={3} key={child.id}>
                  <Card className="small" title={child.name}
                  actions={[<Button waves="light" key={child.id} id={child.id} onClick={this.removeChild}> Remove Child</Button>
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
