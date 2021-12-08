import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      window.location.href = 'freshStart';

      return (
        <div style={{ backgroundColor: 'red' }}>
          <h1>this is redirect error</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
