import React, { Component } from "react";
import "../App.css"

class Header extends Component {
  render() {
    return (
      <div className="header bg-info text-white text-center mb-4">
        <div className="container">
          <h1>Employee Directory</h1>
        </div>
      </div>
    );
  }
}

export default Header;
