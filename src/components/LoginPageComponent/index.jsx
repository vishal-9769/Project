import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  EuiButton,
  EuiFieldText,
  EuiFieldPassword,
  EuiLink
} from "@elastic/eui";
import {login} from '../../login';
class LoginPageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="bg-image">
        <div className="LoginPage">
          <h1 className="loginName">Login Here</h1>
          <EuiFieldText
            className="email"
            compressed
            placeholder="Enter your email"
            value={this.state.value}
            onChange={this.onChange}
            id="uname"
            aria-label="Use aria labels when no actual label is in use"
          />
          <EuiFieldPassword
            className="password"
            compressed
            placeholder="Enter your password"
            value={this.state.value}
            onChange={this.onChange}
            id="pass"
            aria-label="Use aria labels when no actual label is in use"
          />
          {/* <Link to="/adminDashboard"> */}
            <EuiButton className="loginBtn" onClick={login}>Login</EuiButton>
            <br />
          {/* </Link> */}

          {/* <a href= '#'>Forget Password</a> */}
          <EuiLink color="secondary" href="#">
            Forget Password
          </EuiLink>
        </div>
      </div>
    );
  }
}

export default LoginPageComponent;
