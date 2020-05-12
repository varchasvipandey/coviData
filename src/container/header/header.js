import React, { Component } from "react";

import "./header.css";

import logo from "../../img/full-logo-web.png";

class Header extends Component {
  state = {
    input: ""
  };

  getInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <header className="header" id="header">
        <div className="header__items">
          <div className="header__logo">
            <img src={logo} alt="" className="header__logo-image" />
          </div>
          <div className="header__functionalities">
            <form>
              <input
                type="text"
                className="header__functionalities-input"
                placeholder="Country"
                onChange={this.getInput}
              />
              <br />
              <button
                type="submit"
                className="header__functionalities-button"
                onClick={e => this.props.search(e, this.state.input)}
              >
                Search
              </button>
            </form>
          </div>
          <div className="header__report">
            {this.state.input === "" ? (
              <h1 className="header__report-country">India</h1>
            ) : (
              <h1 className="header__report-country">{this.state.input}</h1>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
