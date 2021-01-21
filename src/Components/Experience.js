import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: [
        {
          title: {
            value: "",
            edit: false,
          },
          company: {
            value: "",
            edit: false,
          },
          place: {
            value: "",
            edit: false,
          },
          time: {
            value: "",
            edit: false,
          },
          responsibilities: [
            {
              value: "",
              edit: false,
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Experience</h2>
        {this.state.experience.map((element, index) =>(
          <div key={index}>
            <h5>
              {element.title.value} | {element.company.value},{" "}
              {element.place.value}
            </h5>
            <span>{element.time.value}</span>
            {element.responsibilities.length > 0 ? (
              <ul>
                {element.responsibilities.map((nestedElement, index2) => (
                  <li key={index2}>{nestedElement.value}</li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;