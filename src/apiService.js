const url = 'http://localhost:3001'


async function getPrevMessages(conversationID) {
  try {
    const response = await fetch(`${url}/messages/${conversationID}`);
    const messages = await response.json();
    return messages;
  } catch (e) {
    console.log(e);
  }
}

async function gptReply(userInput) {
  try {
    const response = await fetch(`${url}/messages/gpt`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput)
    });
    const reply = await response.json();
    return reply;
  } catch (e) {
    console.log(e);
  }
}

async function postUserMessage(userInput) {
  try {
    const response = await fetch(`${url}/messages/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput)
    });
    const reply = await response.json();
    return reply;
  } catch (e) {
    console.log(e);
  }
}

async function getConvoList() {
  try {
    const response = await fetch(`${url}/messages/conversations`);
    const list = await response.json();
    return list;
  } catch (e) {
    console.log(e);
  }
}

export { gptReply, getPrevMessages, postUserMessage, getConvoList }