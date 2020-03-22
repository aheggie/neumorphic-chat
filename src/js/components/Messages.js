import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Message from "./Message";

const Messages = ({ messagesArray }) => (
  <TransitionGroup component="ul" id="messages">
    {messagesArray.map((message, i) => (
      <CSSTransition
        key={i}
        classNames="message-anim"
        timeout={{ enter: 750, exit: 750 }}
      >
        <Message key={i} message={message} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default Messages;
