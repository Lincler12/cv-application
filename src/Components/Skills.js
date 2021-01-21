import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          value: "",
          edit: false,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Skills</h2>
        <ul>
          {this.state.skills.map((element, index) =>(
            <li key={index}>{element.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
