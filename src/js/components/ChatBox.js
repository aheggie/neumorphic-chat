import React from "react";

const ChatBox = ({ currentMessage, setCurrentMessage, updateMessages }) => {
  const val = `message ${Math.floor(Math.random() * 105)}`;
  return (
    <>
      <button onClick={() => setCurrentMessage(val)}>{val}</button>
      <button onClick={() => updateMessages(currentMessage)}>
        {currentMessage}
      </button>
    </>
  );
};

export default ChatBox;
