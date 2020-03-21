import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import Messages from "./Messages";
import ChatBox from "./ChatBox";

const App = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState([]);

  const appendCurrentMessageToMessages = messageString => {
    const newMessages = messagesArray.concat([messageString]);
    setMessagesArray(newMessages);
  };

  // adapted from https://stackoverflow.com/questions/31173359/can-i-make-the-browser-window-start-at-the-bottom-of-the-page?noredirect=1&lq=1
  useEffect(() => {
    window.scrollTo(0, 99999);
  }, [messagesArray]);

  return (
    <div>
      <Messages messagesArray={messagesArray} />
      <ChatBox
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
        appendCurrentMessageToMessages={appendCurrentMessageToMessages}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
