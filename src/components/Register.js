import React, { Component } from 'react';
import FormInput from './form/Input.form';
import axios from 'axios';

export default class Register extends Component {
  state = {
    passState: {},
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    isLoading: false,
  };

  handleChangeInput = (e) => {
    const target = e.target;
    const value =
      target.type === 'checkbox' ? (target.checked ? 1 : 0) : target.value;
    const name = target.name;

    this.handleChange(name, value);
  };

  handleChange = (name, value, callBack = null) => {
    this.setState(
      (prev) => {
        const newData = prev.formData;
        newData[name] = value;

        return {
          formData: newData,
        };
      },
      () => {
        return callBack;
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { formData } = this.state;
    const data = { ...formData };

    axios
      .post('/api/register', data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  };

  resIsLoading = (allow, callBack = null) => {
    this.setState({ isLoading: allow }, () => {
      return callBack;
    });
  };

  render() {
    const { firstName, lastName, email, password, confirmPassword } =
      this.state.formData;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h3>Sign up</h3>

          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Your first name"
            value={firstName}
            change={(e) => this.handleChangeInput(e)}
          />

          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Your last name"
            value={lastName}
            change={this.handleChangeInput}
          />

          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email address"
            value={email}
            change={this.handleChangeInput}
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            change={this.handleChangeInput}
          />

          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            change={this.handleChangeInput}
          />

          <button className="btn btn-primary btn-block">Sign up</button>
        </form>
      </React.Fragment>
    );
  }
}
