import axios from 'axios';
import React, { Component } from 'react';
import FormInput from './form/Input.form';

export default class Login extends Component {
  state = {
    formData: {
      email: '',
      password: '',
    },
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
      .post('/api/login', data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { email, password } = this.state.formData;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        <FormInput
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          change={this.handleChangeInput}
        />

        <FormInput
          type="password"
          name="password"
          placeholder="Your password"
          value={password}
          change={this.handleChangeInput}
        />

        <button className="btn btn-primary btn-block">Login</button>
      </form>
    );
  }
}
