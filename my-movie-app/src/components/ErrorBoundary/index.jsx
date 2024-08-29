import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  } // getDerivedStateFromError(error): This lifecycle method is used to update the state in response to an error being thrown.

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error", error, errorInfo);
  }// componentDidCatch(error, errorInfo): This lifecycle method is used to log the error or perform any side effects like sending error logs to an external service.

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center bg-background text-white">
          <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
          <p className="text-lg">We encountered an error while loading this section.</p>
          <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
