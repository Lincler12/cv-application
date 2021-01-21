import React, { Component } from "react";
import "./ProfSummary.css";
class ProfSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profSummary: {
        value: "Insert professional Summary",
        edit: false,
      },
    };

    this.toggleEditState = this.toggleEditState.bind(this);
    this.exitOnEnter = this.exitOnEnter.bind(this);
    this.enterElementInput = this.enterElementInput.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  enterElementInput(
    id,
    placeholder,
    maxLength,
    fontSize,
    inputSize,
    div,
    field,
    stateObj,
    stateObjEdit,
    stateObjValue,
    onChangeHandler,
    toggleHandler
  ) {
    let element = "";
    const toggleHandlerWithFields = (e) =>
      toggleHandler(e, field, stateObj, stateObjEdit);
    const onChangeWithFields = (e) =>
      onChangeHandler(e, field, stateObj, stateObjValue);

    if (stateObjEdit) {
      element = (
        <div>
          <textarea
            maxLength={maxLength}
            placeholder={placeholder}
            autoFocus
            id={id}
            style={{ fontSize: fontSize }}
            onChange={onChangeWithFields}
            value={stateObjValue}
            onBlur={toggleHandlerWithFields}
          ></textarea>
          <button onClick={this.toggleEditState}>Save</button>
        </div>
      );
    } else {
      if (div) {
        element = (
          <div onClick={toggleHandlerWithFields} style={{ display: "block" }}>
            {stateObjValue}
          </div>
        );
      } else {
        element = (
          <p style={{fontSize: "16px", backgroundColor: "#cccccc", padding:"10px 20px"}} onClick={toggleHandlerWithFields}>{stateObjValue}</p>
        );
      }
    }
    return element;
  }

  toggleEditState(e, field, thisStateObject, thisStateObjectEdit) {
    console.log(this.state);
    if (e.target.value !== "") {
      this.setState({
        ...this.state,
        [field]: {
          ...thisStateObject,
          edit: !thisStateObjectEdit,
        },
      });
    }
  }

  handleOnChange(e, field, thisStateObject, thisStateObjectValue) {
    this.setState({
      ...this.state,
      [field]: {
        ...thisStateObject,
        value: e.target.value,
      },
    });
  }

  exitOnEnter(e, toggleEditState) {
    if (e.key === "Enter" || e.key === "Escape") {
      toggleEditState(e);
    }
  }

  render() {
    const { value, edit } = this.state.profSummary;
    return (
      <div style={{width:"100%"}}>
        <h2>Professional Summary</h2>
        {this.enterElementInput("profSummary", "Enter your professional summary", "2000", "16px", "10", false, "profSummary", this.state.profSummary, edit, value, this.handleOnChange, this.toggleEditState )}
      </div>
    );
  }
}

export default ProfSummary;
