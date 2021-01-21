import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "email",
        edit: false,
      },
      github: {
        value: "github",
        edit: false,
      },
      linkedin: {
        value: "linkedin",
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

    this.enterElementInput = this.enterElementInput.bind(this);
    this.exitOnEnter = this.exitOnEnter.bind(this);
  }

  exitOnEnter(e) {
    if (e.key === "Enter" || e.key === "Escape") {
      this.toggleSurnameEditState(e);
    }
  }
  enterElementInput(
    id,
    placeholder,
    maxLength,
    fontSize,
    div,
    elementEdit,
    elementValue,
    onChangeHandler,
    toggleHandler,
  ) {
    let element = "";
    if (elementEdit) {
      element = (
        <input
          maxLength={maxLength}
          placeholder={placeholder}
          autoFocus
          id={id}
          style={{ fontSize: fontSize }}
          onChange={onChangeHandler}
          value={elementValue}
          onBlur={(e) => {
            toggleHandler(e);
          }}
          onKeyUp={this.exitOnEnter}
        ></input>
      );
    } else {
      if (div) {
        element = (
          <div onClick={toggleHandler} style={{ display: "block" }}>
            {elementValue}
          </div>
        );
      } else {
        element = (
          <span onClick={toggleHandler} style={{ display: "block" }}>
            {elementValue}
          </span>
        );
      }
    }
    return element;
  }
  render() {
    const { address, city, country, phone, email, github } = this.state;
    return (
      <div id="contact">
        <div>
          {/* {this.enterElementInput("inputAddress", address, 10, false, )} */}
          <span>{address.value}</span>, <span>{city.value}</span>,{" "}
          <span>{country.value}</span>
        </div>
        <div>{phone.value}</div>
        <div>{email.value}</div>
        <div>{github.value}</div>
      </div>
    );
  }
}

export default Contact;
