import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.error ? (
      <h1> Oooops. That is wrong</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
