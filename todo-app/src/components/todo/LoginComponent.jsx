import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
          username: "juliparodi",
          password: "",
          hasLoginFailed: false,
          showSuccessMessage: false,
        };
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    
      loginClicked = () => {
        if (this.state.username === "juliparodi" &&
            this.state.password === "hola") 
          {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
          this.props.navigate(`/welcome/${this.state.username}`);
          this.setState({ showSuccessMessage: true });
          this.setState({ hasLoginFailed: false });
        } else {
          this.setState({ showSuccessMessage: false });
          this.setState({ hasLoginFailed: true });
        }
      };
    
      render() {
        return (
          <div>
            <h1> Login </h1>
            <div className="container">
              {/*<ShowInvalidCredentiales hasLoginFailed={this.state.hasLoginFailed} />*/}
              {this.state.hasLoginFailed && (
                <div className="alert alert-warning">Invalid Credentials</div>
              )}
              {this.state.showSuccessMessage && (
                <div>Welcome to Juli Todo's App</div>
              )}
              {/* <ShowLoginSuccessful ShowLoginSuccessful={this.state.showSuccessMessage} />*/}
              User Name:{" "}
              <input
                type="text"
                name="username"
                defaultValue={this.state.username}
                onChange={this.handleChange}
              />
              Password:{" "}
              <input
                type="password"
                name="password"
                defaultValue={this.state.password}
                onChange={this.handleChange}
              />
              <button className="btn btn-success" onClick={this.loginClicked}>
                Login
              </button>
            </div>
          </div>
        );
      }
}

export default LoginComponent