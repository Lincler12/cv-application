import React, { Component } from "react";

class ProfSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profSummary: {
        value: "insert professional Summary",
        edit: false,
      },
    };
  }

  render() {
    const { value, edit } = this.state.profSummary;
    return (
      <div>
        <h2>Personal Summary</h2>
        <p>{value}</p>
      </div>
    );
  }
}

export default ProfSummary;
