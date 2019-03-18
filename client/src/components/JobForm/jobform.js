import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Input, TextArea } from "../Form";
import "./style.css";
import API from "../../utils/API";


class CreateJobModal extends React.Component {

    state = {
        jobs: [],
        title: "",
        description: "",
        budget: 0,
        status: "",
        modalShow: true
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // event.preventDefault();
        if (this.state.title && this.state.description) {
            API.getCreateJob({
                title: this.state.title,
                description: this.state.description,
                budget: this.state.budget
            })
                // this.loadJobs = this.loadJobs.bind(this)    
                .then(res => this.props.loadJobs())
                .catch(err => console.log(err));
        }
    };

    render() {
        const loggedIn = this.props.loggedIn;
        const modalClose = () => this.setState(
            { modalShow: false },
            this.loadJobs(),
            this.reload()
        );

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
                                    <Modal.Footer>
                                        <Button className="waves-effect waves-light modalButton" disabled={!(this.state.description && this.state.title)}
                                        onClick={this.handleFormSubmit}>Submit Job</Button>
                                    </Modal.Footer>
                                    <Modal.Footer>
                                        <Button className="waves-effect waves-light modalButton" onClick={this.props.onHide}>Close</Button>
                                    </Modal.Footer>
                                </form>
                            </Modal.Body>

                        </Modal>
                    )}
            </div>

        );
    }
}
export default CreateJobModal;
