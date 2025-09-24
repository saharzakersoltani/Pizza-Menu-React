import React from "react";
import ReactDOM from "react-dom/client";
function App() {
  return (
    <React.StrictMode>
      <h2>Hello React!</h2>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
