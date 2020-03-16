import React, { useState } from "react";
import { render } from "react-dom";

import Messages from "./Messages";
import ChatBox from "./ChatBox";

const App = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState([]);

  const updateMessages = messageString => {
    const newMessages = messagesArray.concat([messageString]);
    setMessagesArray(newMessages);
  };

  return (
    <div>
      <Messages messagesArray={messagesArray} />
      <ChatBox
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
        updateMessages={updateMessages}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
