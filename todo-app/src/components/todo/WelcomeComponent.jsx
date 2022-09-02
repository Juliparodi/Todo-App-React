import React, { Component } from 'react'
import { Link } from "react-router-dom";

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1> Welcome! </h1>
        <div className="container">  Welcome {this.props.params.name} . You can manage your todo's:{" "}
          <Link to="/todo"> here </Link>
        </div>
      </>
    );
  }
}

export default WelcomeComponent