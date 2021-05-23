import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {
      email: '',
      password: '',
      name: ''
    },
    errors: {}
  }

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(3).max(30).required().label("Password"),
    name: Joi.string().min(3).max(30).required().label("Name"),
  }

  doSubmit = () => {
    console.log('submited');
  }


  render() {

    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    )
  }
}

export default RegisterForm;