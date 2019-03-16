import React, {Component} from "react";
import {Button,Input} from "react-materialize";

class AddProductForm extends Component { 
  render(){
    return (
          <form>
            <Input
              type="text"
              onChange={this.props.handleInputChange}
              name="name"
              label="Product Name (Required)"
            />
            <Input
              type="textarea"
              onChange={this.props.handleInputChange}
              name="info"
              label="Info (Required)"
            />
            <Input
              type="number"
              onChange={this.props.handleInputChange}
              name="price"
              label="Price (Optional)"
            />
            <Input
              type="number"
              onChange={this.props.handleInputChange}
              name="qty"
              label="Quantity (Optional)"
            />
            <Button onClick={this.props.handleFormSubmit} >Create</Button>
          </form>
    )
  }
}

export default AddProductForm;