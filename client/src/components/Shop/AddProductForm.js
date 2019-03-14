import React, {Component} from "react";
import {Button,Input,Row,Modal} from "react-materialize";

class AddProductForm extends Component {
  render(){
    return (
      <Row>
        <Modal
          header='Create Product'
          trigger={<Button>Create Product</Button>}
          >
          <form>
            <Input
              type="text"
              onChange={this.props.handleInputChange}
              name="name"
              label="name"
              placeholder="Product name (required)"
            />
            <Input
              type="textarea"
              onChange={this.props.handleInputChange}
              name="info"
              label="info"
              placeholder="Info (required)"
            />
            <Input
              type="number"
              onChange={this.props.handleInputChange}
              name="price"
              label="price"
              placeholder="Price (optional)"
            />
            <Input
              type="number"
              onChange={this.props.handleInputChange}
              name="qty"
              label="qty"
              placeholder="Qty (optional)"
            />
            <Button onClick={this.props.handleFormSubmit} >Create</Button>
          </form>
        </Modal>
      </Row>
    )
  }
}

export default AddProductForm;