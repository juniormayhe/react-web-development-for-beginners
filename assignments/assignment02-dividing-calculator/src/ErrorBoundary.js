import React from "react";

// Error boundary component to catch errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  resetError = () => {
    this.setState({ hasError: false, errorMessage: "" });
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div>Error: {this.state.errorMessage}</div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
