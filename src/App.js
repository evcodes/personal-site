import React from "react";
import Amplify from 'aws-amplify';
import awsExports from "./aws-exports";
import Nav from "./components/navigation";
import "./App.css";

Amplify.configure(awsExports)
export default function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}
