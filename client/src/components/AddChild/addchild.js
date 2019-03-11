import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { List } from "../List";
import { Input, FormBtn } from "../Form";
import { Redirect } from "react-router-dom";
import { Modal,Card,Col } from 'react-materialize';
import Button from 'react-bootstrap/Button';



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
  };

  render() {
    const modalClose = () => this.setState(
          { modalShow: false },
          this.loadJobs(),
          this.reload()
      );
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
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
        </div>
        );
      }
    }
  }
  export default AddChild;
