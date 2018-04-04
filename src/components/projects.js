import React, { Component } from 'react';
import './App.css';


class Projects extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1200,
    })
  }
  render() {
    return (
      <div className="projects" >
       <div>
         emoji game here
       </div>
      </div>
    );
  }
}

export default Projects;
