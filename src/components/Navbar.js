import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    let buttons;

    if (this.props.user) {
      buttons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to={'/'}
              onClick={() => localStorage.clear()}
              className="nav-link"
            >
              Log out
            </Link>
          </li>
        </ul>
      );
    } else {
      buttons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={'/login'} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/register'} className="nav-link">
              Sign up
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <Link to={'/'} className="navbar-brand">
            Home
          </Link>
          <div className="collapse navbar-collapse">{buttons}</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
