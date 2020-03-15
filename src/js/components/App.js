import React, { useState } from "react";
import { render } from "react-dom";

import Messages from "./Messages";
import ChatBox from "./ChatBox";

const App = () => {
  // const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const updateMessages = messageString => {
    const newMessages = messages.concat([messageString]);
    setMessages(newMessages);
  };

  return (
    <div>
      <Messages messages={messages} />
      <ChatBox updateMessages={updateMessages} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
