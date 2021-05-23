import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {

  state = {
    data: {},
    errors: {}
  }

  validate = () => {
    const options = { abortEarly: false }
    const result = Joi.validate(this.state.data, this.schema, options);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  validatePropery = input => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const erroreMassage = this.validatePropery(input);
    if (erroreMassage) errors[input.name] = erroreMassage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  }

  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validate()} >
        {label}
      </button>
    )
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
      />
    )
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        label={label}
        onChange={this.handleChange}
        options={options}
        value={data[name]}
        error={errors[name]}
      />
    )
  }

}

export default Form;