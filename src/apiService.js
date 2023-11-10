const url = 'http://localhost:3001'


async function getPrevMessages(conversationID) {
  try {
    const response = await fetch(`${url}/messages/${conversationID}`);
    const messages = await response.json();
    console.log('api server line 8:', messages)
    return messages;
  } catch (e) {
    console.log(e);
  }
};

async function gptReply(userInput) {
  try {
    const response = await fetch(`${url}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput)
    });
    const reply = await response.json();
    return reply;
  } catch (e) {
    console.log(e);
  }
};

export { gptReply, getPrevMessages }