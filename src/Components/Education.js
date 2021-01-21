import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          credential: {
            value: "",
            edit: false,
          },
          university: {
            value: "",
            edit: false,
          },
          time: {
            value: "",
            edit: false,
          },
          grade: {
            value: "",
            edit: false,
          },
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>Education</h2>
        {this.state.education.map((element, index) => (
          <div key={index}>
            <h5>
              {element.credential.value} | {element.university.value}
            </h5>
            <span>{element.time.value}</span>
            {element.grade.value !== "" ? (
              <span>Grade: {element.grade.value}</span>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Education;
