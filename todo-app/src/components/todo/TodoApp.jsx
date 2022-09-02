import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import withNavigation from "./../WithNavigation";
import withParams from "./../WithParams";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent";
import ListTodoComponent from "./ListTodoComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";

class TodoApp extends Component {
  render() {
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
    return (
      <div className="TodoApp">
        <BrowserRouter>
          <HeaderComponentWithNavigation />
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>}/>
            <Route path="/todo" element={<AuthenticatedRoute><ListTodoComponent /></AuthenticatedRoute>} />
            <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </div>
    );
  }
}

export default TodoApp;
