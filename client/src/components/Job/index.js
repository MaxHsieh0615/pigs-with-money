import React, { Component } from "react";
import {Button, Col, Card} from 'react-materialize';
import API from "../../utils/API";

class Job extends Component {
  state={
    childId: this.props.job.assigneeId,
    childName: this.props.job.assignee !== null ? this.props.job.assignee.name : null,
    status: this.props.job.status,
    counter: 0,
    buttonName: this.getButtonName(this.props.job.status)
  };

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
    if(this.props.job.status !== "Assigned"){
      return;
    }
    API.completeJob(dataSet)
      .then(() => this.props.loadJobs())
      .catch(err => console.log(err));
  };

  assignJob = dataSet=>{
    API.assignJob(dataSet)
      .then(() => {
          this.setState({status: 'Assigned',buttonName: this.getButtonName("Assigned")});
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

  getButtonName(status)
  {
    let buttonName = "ASSIGN JOB"
    switch (status){
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