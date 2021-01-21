import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "Email",
        edit: false,
      },
      github: {
        value: "Github",
        edit: false,
      },
      linkedin: {
        value: "Linkedin",
        edit: false,
      },
      phone: {
        value: "Phone",
        edit: false,
      },
      country: {
        value: "Country",
        edit: false,
      },
      city: {
        value: "City",
        edit: false,
      },
      address: {
        value: "Address",
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
    const onChangeWithFields = (e) => onChangeHandler(e, field,stateObj,stateObjValue);

    if (stateObjEdit) {
      element = (
        <input
          maxLength={maxLength}
          size = {inputSize}
          placeholder={placeholder}
          autoFocus
          id={id}
          style={{ fontSize: fontSize }}
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
    const { address, city, country, phone, email, github } = this.state;
    return (
      <div id="contact">
        <div>
          {this.enterElementInput("inputAddress", "address", "10", "14px", "10", false, "address", address, address.edit,address.value, this.handleOnChange, this.toggleEditState)}
          , {this.enterElementInput("inputCity", "city", "10", "14px","10", false, "city", city, city.edit,city.value, this.handleOnChange, this.toggleEditState)}, {" "}
          {this.enterElementInput("inputCountry", "country", "10", "14px", "10", false, "country", country, country.edit, country.value, this.handleOnChange, this.toggleEditState)}
        </div>
        {this.enterElementInput("inputPhone", "phone", "10", "14px", "10", true, "phone", phone, phone.edit, phone.value, this.handleOnChange, this.toggleEditState)}
        {this.enterElementInput("inputEmail", "email", "10", "14px", "10", true, "email", email, email.edit, email.value, this.handleOnChange, this.toggleEditState)}
        {this.enterElementInput("inputGithub", "github", "10", "14px", "10", true, "github", github, github.edit, github.value, this.handleOnChange, this.toggleEditState)}
      </div>
    );
  }
}

export default Contact;
