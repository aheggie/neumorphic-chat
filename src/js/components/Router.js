import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import ClassApp from "./ClassApp";
import RoomSelector from "./RoomSelector";

render(
  <Router>
    <RoomSelector path="/" />
    <ClassApp path="/:chatId" />
  </Router>,
  document.getElementById("root")
);
