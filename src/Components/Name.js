import React, { Component } from "react";
import "./Name.css";
class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "Name",
        edit: false,
      },
      surname: {
        value: "Surname",
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
    const onChangeWithFields = (e) => onChangeHandler(e, field,stateObj,stateObjValue);

    if (stateObjEdit) {
      element = (
        <input
          maxLength={maxLength}
          placeholder={placeholder}
          autoFocus
          id={id}
          onChange={onChangeWithFields}
          value={stateObjValue}
          onBlur={toggleHandlerWithFields}
          onKeyUp={(e) => this.exitOnEnter(e, toggleHandlerWithFields)}
        ></input>
      );
    } else {
      if (div) {
        element = (
          <div
            onClick={toggleHandlerWithFields}
            style={{ display: "block" }}
          >
            {stateObjValue}
          </div>
        );
      } else {
        element = (
          <span
            onClick={toggleHandlerWithFields}
            style={{ display: "block" }}
          >
            {stateObjValue}
          </span>
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
    return (
      <div id="name">
        <h1>
          {this.enterElementInput(
            "inputName",
            "Enter your name",
            "20",
            false,
            "name",
            this.state.name,
            this.state.name.edit,
            this.state.name.value,
            this.handleOnChange,
            this.toggleEditState,
            this.exitOnEnter,
          )}
          {this.enterElementInput(
            "inputSurname",
            "Enter your surname",
            "20",
            false,
            "surname",
            this.state.surname,
            this.state.surname.edit,
            this.state.surname.value,
            this.handleOnChange,
            this.toggleEditState,
            this.exitOnEnter
          )}
        </h1>
      </div>
    );
  }
}

export default Name;
