import React, { Component } from 'react';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      students: []
    }
  }

  render() {
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>

      </div>
    )
  }
}