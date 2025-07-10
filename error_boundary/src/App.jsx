import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./BuggyComponent";
import BuggyCounter from "./BuggyCounter";

// Fallback UI component
function ErrorFallback({ error }) {
  return (
    <div style={{ color: "red" }}>
      <p>Something went wrong!</p>
      <pre>{error.message}</pre>
    </div>
  );
}


// App component
function App() {
  return (
    <div>
      <h1>Error Boundary in Functional Component</h1>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* <BuggyComponent /> */}
        <BuggyCounter/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
