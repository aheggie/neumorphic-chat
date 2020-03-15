import React from "react";

const ChatBox = ({ updateMessages }) => (
  <button
    onClick={() => updateMessages(`message ${Math.floor(Math.random() * 105)}`)}
  >
    Click
  </button>
);

export default ChatBox;
