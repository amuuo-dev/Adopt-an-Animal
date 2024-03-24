import { Component } from "react";
import { Link } from "react-router-dom";
class ErrorBundary extends Component {
  state = { hasError: "false" };
  static getDerivedStateFromError() {
    return { hasError: "true" };
  }
  componentDidCatch(error, info) {
    console.log("Error boundary caught an error!!", error, info);
  }
  render() {
    if (this.state.hasError) {
      return ~(
        <h2>
          There was an Error with this Listing.
          <Link to="/"> Click here to go to home page</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}
export default ErrorBundary;
