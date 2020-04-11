import React, { useState } from "react";
import { Link } from "@reach/router";

const RoomSelector = () => {
  const [roomName, setRoomName] = useState("");
  return (
    <div id="room-entry-group">
      <p>Please select a chatroom name</p>
      <input
        // how to autofocus :
        // https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
        // autofocus is maybe acceptable for accessibility when there is a single clear element :
        // https://ux.stackexchange.com/questions/60026/when-is-it-appropriate-to-add-the-html5-autofocus-attribute-to-a-page
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        id="room-input"
        value={roomName}
        onChange={e => setRoomName(e.target.value)}
      />
      <Link to={roomName}>go to chatroom</Link>
    </div>
  );
};

export default RoomSelector;
