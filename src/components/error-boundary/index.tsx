import { Component, ErrorInfo, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { ErrorScreen } from "../../routes/error";

// Class component required: React only exposes componentDidCatch on classes.
class ErrorBoundaryInner extends Component<
  { children: ReactNode; locationKey: string },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // Reset when the user navigates (locationKey changes), so "Back home" clears the error.
  componentDidUpdate(prev: { locationKey: string }) {
    if (this.state.hasError && prev.locationKey !== this.props.locationKey) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorScreen
          headline="Something hit a wrong note 🎸"
          subtext="An error broke the page — head back home and try again."
        />
      );
    }
    return this.props.children;
  }
}

// Wrapper to feed the router location into the class boundary.
const ErrorBoundary = ({ children }: { children: ReactNode }) => (
  <ErrorBoundaryInner locationKey={useLocation().key}>
    {children}
  </ErrorBoundaryInner>
);

export default ErrorBoundary;
