import React from "react";
import ReactDOM from "react-dom/client";

const App = () => <h1>Some React!</h1>;

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);