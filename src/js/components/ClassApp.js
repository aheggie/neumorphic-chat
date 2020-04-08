import React /*, { useState, useEffect }*/ from "react";
import { render } from "react-dom";

import Messages from "./Messages";
import ChatBox from "./ChatBox";

class ClassApp extends React.Component {
  // const [currentMessage, setCurrentMessage] = useState("");
  // const [messagesArray, setMessagesArray] = useState([]);

  state = {
    currentMessage: "",
    messagesArray: []
  };

  slashCommands = messageString => {
    switch (messageString) {
      case "/shrug":
        return "¯\\_(ツ)_/¯";
      default:
        return messageString;
    }
  };

  appendCurrentMessageToMessages = messageString => {
    const processedString = this.slashCommands(messageString);
    const messagesArray = this.state.messagesArray;
    console.log(messagesArray);
    const newMessages = messagesArray.concat([processedString]);
    this.setState({ messagesArray: newMessages });
  };

  setCurrentMessage = messageString => {
    this.setState({ currentMessage: messageString });
  };

  // adapted from https://stackoverflow.com/questions/31173359/can-i-make-the-browser-window-start-at-the-bottom-of-the-page?noredirect=1&lq=1
  // useEffect(() => {
  //   window.scrollTo(0, 99999);
  // }, [messagesArray]);

  componentDidUpdate() {
    window.scrollTo(0, 99999);
  }
  render() {
    return (
      <div>
        <Messages messagesArray={this.state.messagesArray} />
        <ChatBox
          currentMessage={this.state.currentMessage}
          setCurrentMessage={this.setCurrentMessage}
          appendCurrentMessageToMessages={this.appendCurrentMessageToMessages}
        />
      </div>
    );
  }
}

render(<ClassApp />, document.getElementById("root"));
