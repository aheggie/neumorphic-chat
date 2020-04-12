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
    <div className="entry-group" id="chat-entry-group">
      <input
        // how to autofocus :
        // https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
        // autofocus is maybe acceptable for accessibility when there is a single clear element :
        // https://ux.stackexchange.com/questions/60026/when-is-it-appropriate-to-add-the-html5-autofocus-attribute-to-a-page
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        id="chat-input"
        value={currentMessage}
        onChange={e => setCurrentMessage(e.target.value)}
        onKeyPress={e => (e.key == "Enter" ? sendMessage() : null)}
      ></input>
      {/* <button id="chat-button" onClick={sendMessage}>
        Send
      </button> */}
    </div>
  );
};

export default ChatBox;
