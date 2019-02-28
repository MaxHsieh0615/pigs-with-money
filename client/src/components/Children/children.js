import React, { Component } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

class Children extends Component {

  componentDidMount() {
    this.loadChildren();
  }

  loadChildren = () => {
    API.getAddChild()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteChild = id => {
    API.deleteChild(id)
      .then(res => this.loadChildren())
      .catch(err => console.log(err));
  }
}