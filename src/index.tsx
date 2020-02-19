import * as React from "react";
import { render } from "react-dom";

function Authentication() {
  return (
    <>
      <h1>Hello React!</h1>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<Authentication />, rootElement);
