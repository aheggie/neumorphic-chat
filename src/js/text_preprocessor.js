const slashCommands = messageString => {
  switch (messageString) {
    case "/shrug":
      return "¯\\_(ツ)_/¯";
    case "/mandala":
      //how to force a newline
      return "🎈🎆🎈\n🎆🎇🎆\n🎈🎆🎈";
    default:
      return messageString;
  }
};

export { slashCommands };
