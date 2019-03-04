import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./style.css";
import axios from 'axios';

class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.state = {
      modalShow: true
    }
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }
  render() {
    const loggedIn = this.props.loggedIn;
    let modalClose = () => this.setState({ modalShow: false });
    console.log(this.props);

    return (
      <div>
        {loggedIn ? (
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show={this.state.modalShow}
            onHide={modalClose}
          >
          </Modal>
        ) : (
            <Modal
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
            >
              <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                  {this.props.text}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="waves-effect waves-light modalButton" onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          )}
      </div>

    );
  }
}
export default MyVerticallyCenteredModal;
