function content() {
  return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr';
}

function saveContent() {
  return true;
}

export default {
  Query: {
    content,
  },
  Mutation: {
    saveContent,
  },
};
