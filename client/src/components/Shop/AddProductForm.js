import React, {Component} from "react";
import {Button, Input, Icon, Modal} from "react-materialize";

class AddProductForm extends Component { 
  render(){
    return (
          <form>
            <Input
              type="text"
              onChange={this.props.handleInputChange}
              name="name"
              label="Product Name (Required)">
              <Icon>card_giftcard</Icon>
            </Input>
            <Input
              type="textarea"
              onChange={this.props.handleInputChange}
              name="info"
              label="Info (Required)">
              <Icon>info</Icon>
            </Input>
            <Input
              type="number"
              onChange={this.props.handleInputChange}
              name="price"
              label="Price (Optional)">
              <Icon>attach_money</Icon>
            </Input>
            <Input
              type="number"
              onChange={this.props.handleInputChange}
              name="qty"
              label="Quantity (Optional)">
              <Icon>add</Icon>
            </Input>
            <Button onClick={this.props.handleFormSubmit} id="createProductBtn">Create</Button>
        <Modal
          open={this.props.handleFormSubmit}
          header="Create again"
           >
          </Modal>
          </form>
    )
  }
}

export default AddProductForm;