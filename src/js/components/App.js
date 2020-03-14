import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div className="div">
      <p>Hey!</p>
    </div>
  );
};

render(<App />, document.getElementById("root"));
