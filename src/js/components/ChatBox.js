import React from "react";

const ChatBox = ({
  currentMessage,
  setCurrentMessage,
  appendCurrentMessageToMessages
}) => {
  return (
    <>
      <input
        value={currentMessage}
        onChange={e => setCurrentMessage(e.target.value)}
      ></input>
      <button
        onClick={() => {
          appendCurrentMessageToMessages(currentMessage);
          setCurrentMessage("");
        }}
      >
        Send
      </button>
    </>
  );
};

export default ChatBox;
