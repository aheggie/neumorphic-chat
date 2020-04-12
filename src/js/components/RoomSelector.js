import React, { useState } from "react";
import { Link, navigate } from "@reach/router";

const RoomSelector = () => {
  const [roomName, setRoomName] = useState("");
  return (
    <div className="entry-group" id="room-entry-group">
      <input
        // how to autofocus :
        // https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
        // autofocus is maybe acceptable for accessibility when there is a single clear element :
        // https://ux.stackexchange.com/questions/60026/when-is-it-appropriate-to-add-the-html5-autofocus-attribute-to-a-page
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        id="room-input"
        value={roomName}
        placeholder="Please select a chatroom name"
        onChange={e => setRoomName(e.target.value)}
        onKeyPress={e => (e.key == "Enter" ? navigate(roomName) : null)}
      />
      <Link to={roomName}>
        <button id="room-button">↠</button>
      </Link>
    </div>
  );
};

export default RoomSelector;
