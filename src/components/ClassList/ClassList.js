import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    // On Component mount, get the list of student names from the API.
    axios
    .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results => {
      this.setState({
        students: results.data
      });
    })
  }

  render() {
    // Map the returned results to an array with H3 tags, including a key so that the app can keep track of the different tags.
    const students = this.state.students.map((student, i) => (
      // Link each student name to their page, which we will access based on student id.
      // Render the linked student page if their name is clicked.
      <Link to={`/student/${student.id}`} key={i}>        
      <h3>{ student.first_name } { student.last_name }</h3>
      </Link>
    ));
    return (
      <div className="box">
        {/* Display the class name that matches the data */}
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { students }
      </div>
    )
  }
}