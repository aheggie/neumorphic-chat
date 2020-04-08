import React /*, { useState, useEffect }*/ from "react";
import { render } from "react-dom";

import Messages from "./Messages";
import ChatBox from "./ChatBox";

import base from "../base";

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
    const newMessages = messagesArray.concat([processedString]);
    this.setState({ messagesArray: newMessages });
  };

  setCurrentMessage = messageString => {
    this.setState({ currentMessage: messageString });
  };

  componentDidMount() {
    const params = { chatId: process.env.ROOM_NAME };

    this.ref = base.syncState(`${params.chatId}/messagesArray`, {
      context: this,
      state: "messagesArray",
      asArray: true
    });
  }

  // adapted from https://stackoverflow.com/questions/31173359/can-i-make-the-browser-window-start-at-the-bottom-of-the-page?noredirect=1&lq=1
  // useEffect(() => {
  //   window.scrollTo(0, 99999);
  // }, [messagesArray]);

  componentDidUpdate() {
    window.scrollTo(0, 99999);
  }
  render() {
    console.log("return", this.state.messagesArray);
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
