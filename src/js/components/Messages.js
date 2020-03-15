import React from "react";
import Message from "./Message";

const Messages = ({ messages }) => (
  <ul>
    {messages.map((message, i) => (
      <Message key={i} message={message} />
    ))}
  </ul>
);

export default Messages;
