import React, { useEffect } from "react";
import { inject, unmount } from "remoteApp/appInjector";
import routes from "remoteApp/router";
import "./App.scss";
const parentElementId = "parent";
console.log(routes);

function App() {
  useEffect(() => {
    inject(parentElementId);
    return () => unmount(parentElementId);
  }, []);
  return (
    <div className="App">
      <header>Shell app version({React.version})</header>
      <div id={parentElementId}></div>
    </div>
  );
}

export default App;
