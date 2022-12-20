import React from "react";
import logo from "./logo.svg";
import Header from "remoteApp/Header";
import "./App.css";
// const RemoteComponent = React.lazy(() => import("remoteApp/Header"));
console.log(Header);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        content edit
      </header>
    </div>
  );
}

export default App;
