import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import { Link } from "react-router-dom";


class HeaderComponent extends Component {
    render() {
      const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
      console.log(isUserLoggedIn)
      return (
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="https://juli-tweet-app.herokuapp.com" className="navbar-brand">{" "}Juli Tweet App{" "} </a>
            </div>
            <ul className="navbar-nav">
             {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/juliparodi"> Home </Link></li>}
              {isUserLoggedIn && <li><Link className="nav-link" to="/todo"> Todo App </Link> </li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn &&<li><Link to="/login" className="nav-link"> Login </Link></li>}
              {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}> Logout </Link></li>}
            </ul>
          </nav>
        </header>
      );
    }
  }

  export default HeaderComponent