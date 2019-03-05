import React from "react";
import { List } from "../List";
import Jumbotron from "../Jumbotron";
import { Col } from "../Grid";

function ListJobs(props){
  return (
    <List>
      {props.jobs.map(job => (
        <div className="col">
          <div className="col s12 m12">
            <div className="card">
              <div className="card-image" key={job.id}>
                {/* <img src="images/sample-1.jpg"> */}
              </div>
              <div className="card-content">
                <span className="card-title">{job.title}</span>
                <p>{job.description}</p>
                <button
                  id="addjobbtn"
                  className="waves-effect waves-light btn btn-success"
                >
                  ADD JOB
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </List>
  )
}

export default ListJobs;