import React from "react";
import Message from "./Message";

const Messages = ({ messagesArray }) => (
  <ul id="messages">
    {messagesArray.map((message, i) => (
      <Message key={i} message={message} />
    ))}
  </ul>
);

export default Messages;
