import React, { Component } from "react";
import {Button, Col, Card} from 'react-materialize';
import API from "../../utils/API";

class Job extends Component {
  constructor(props) {
    super(props);
    const {job,children} =  props;
    this.state={
      childId: job.assigneeId,
      childName: children ? this.getName() : "",
      status: job.status,
      counter: 0,
      buttonName: this.getButtonName()
    };
  }

  toggleChildren = () =>{
    const { counter,status } = this.state;
    const { children } = this.props; 
    if ( children.length >= 0 && status === "Open"){
      const key = counter % children.length;
      this.setState({childName:children[key].name,
        childId: children[key].id, 
        counter: counter + 1});
    }
  };

  completeJob = dataSet => {
    API.completeJob(dataSet)
      .then(res => {
        this.setState({status: res.data.status});
        this.getButtonName();
      })
      .catch(err => console.log(err));
  };

  assignJob = dataSet=>{
    API.assignJob(dataSet)
      .then(res => {
        this.setState({status: res.data.status});
        this.getButtonName();
      })
      .catch(err => console.log(err));
  };

  updateJobStatus = event => {
    if(this.state.childId ===""){
      return
    }
    const { id } = event.target;
    const { status, childId } = this.state;
    const data = {
      jobId: id,
      childId: childId
    }
    
    return status === "Open" ? this.assignJob(data) : this.completeJob(data);
  };

  getName(){
    const {job,children} = this.props;
    return job.assigneeId != null ? children.filter(item => item.id === job.assigneeId)[0].name : null;
  };

  getButtonName()
  {
    let buttonName = "ASSIGN JOB"
    switch (this.props.job.status){
      case "Open":
        buttonName = "ASSIGN JOB";
        break;
      case "Assigned":
        buttonName = "COMPLETE JOB";
        break;
      case "Completed":
        buttonName = "CLOSE JOB";
        break;
      case "Closed":
        buttonName = "Closed";
        break;
      default:
        buttonName = "ASSIGN JOB";
        break;
    }
    return buttonName;
  };

  render(){
    const {job} = this.props;
    return (
      <Col s={12} m={6}>
        <Card className='small' title={job.title}
          actions={[
            <Button waves='light' key={job.id} id={job.id} onClick={this.updateJobStatus}>{this.state.buttonName}</Button>
          ]}>
          <p>{job.description}</p>
          <p onClick={this.toggleChildren}>Assign to : {this.state.childName}</p>
        </Card>
      </Col>
      
    )
  }
}

export default Job;