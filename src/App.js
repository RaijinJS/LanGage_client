import "./App.css";
import "./components/Nav.css";
import "./components/MessagePanel.css";
import "./components/FeedbackPanel.css";
import "./components/Messages.css";
import "./components/Hamburger.css";
import "./components/popups.css";
import Nav from "./components/Nav.jsx";
import FeedbackPanel from "./components/FeedbackPanel.jsx";
import MessagePanel from "./components/MessagePanel.jsx";
import { getPrevMessages } from "./apiService.js";
import { useState, useEffect } from "react";
import { splitReply } from "./util.js";

function App() {
  const [conversation, setConversation] = useState(1);
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [conversationList, setConversationList] = useState([]);

  useEffect(() => {
    getPrevMessages(conversation)
      .then((data) => {
        if (!data) {
          setMessages([]);
        } else {
          setMessages(data);
        }
      })
      .catch((e) => console.log(e));
  }, [conversation]);

  function handleUserMessageClick(message) {
    if (message && message.includes("(")) {
      const feedback = splitReply(message)[1];
      setFeedback(feedback);
    } else {
      setFeedback([""]);
    }
  }

  return (
    <div className="App">
      <nav>
        <Nav
          conversation={conversation}
          setConversation={setConversation}
          conversationList={conversationList}
          setConversationList={setConversationList}
        />
      </nav>
      <main>
        <FeedbackPanel
          messages={messages}
          loading={loading}
          conversation={conversation}
          conversationList={conversationList}
          feedback={feedback ? feedback : [""]}
        />
        <MessagePanel
          loading={loading}
          setLoading={setLoading}
          messages={messages}
          setMessages={setMessages}
          setFeedback={setFeedback}
          conversation={conversation}
          handleUserMessageClick={handleUserMessageClick}
        />
      </main>
    </div>
  );
}

export default App;
