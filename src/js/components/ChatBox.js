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
      setCurrentMessage("");
    }
  };
  return (
    <>
      <input
        value={currentMessage}
        onChange={e => setCurrentMessage(e.target.value)}
        onKeyPress={e => (e.key == "Enter" ? sendMessage() : null)}
      ></input>
      <button onClick={sendMessage}>Send</button>
    </>
  );
};

export default ChatBox;
