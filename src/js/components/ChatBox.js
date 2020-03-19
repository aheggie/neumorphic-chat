import React from "react";

const ChatBox = ({
  currentMessage,
  setCurrentMessage,
  appendCurrentMessageToMessages
}) => {
  const sendMessage = () => {
    //dont let users send blank messages
    if (currentMessage !== "") {
      appendCurrentMessageToMessages(currentMessage);
      //this resets the input box
      setCurrentMessage("");
    }
  };
  return (
    <div id="chat">
      <input
        id="chat-input"
        value={currentMessage}
        onChange={e => setCurrentMessage(e.target.value)}
        onKeyPress={e => (e.key == "Enter" ? sendMessage() : null)}
      ></input>
      <button id="chat-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatBox;
