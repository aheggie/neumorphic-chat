import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import ClassApp from "./ClassApp";

render(
  <Router>
    <ClassApp path="/" />
    <ClassApp path="/:chatId" />
  </Router>,
  document.getElementById("root")
);
