const slashCommands = messageString => {
  switch (messageString) {
    case "/shrug":
      return "¯\\_(ツ)_/¯";
    case "/mandala":
      return `
🎈🎆🎈
🎆🎇🎆
🎈🎆🎈`;
    default:
      return messageString;
  }
};

export { slashCommands };
