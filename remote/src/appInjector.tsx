import App from "./App";
import ReactDOM from "react-dom";

export const inject = (parentElementId: string) =>
  ReactDOM.render(<App />, document.getElementById(parentElementId));

export const unmount = (parentElementId: string) =>
  ReactDOM.unmountComponentAtNode(
    document.getElementById(parentElementId) as HTMLElement
  );
