import './App.css';
import './components/Nav.css';
import './components/MessagePanel.css';
import './components/FeedbackPanel.css';
import './components/Messages.css';
import './components/Hamburger.css';
import Nav from './components/Nav.jsx'
import FeedbackPanel from './components/FeedbackPanel.jsx'
import MessagePanel from './components/MessagePanel.jsx'
import { getPrevMessages } from './apiService.js';
import { useState, useEffect } from 'react';
import { splitReply } from './util.js';


function App() {
  const [conversation, setConversation] = useState(1);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState({});
  const [reply, setReply] = useState({});

  useEffect(
    () => {
      getPrevMessages(conversation).then((data) => {
        if (!data) {
          setMessages([]);
        } else {
          setMessages(data);
        }
      }).catch((e) => console.log(e));
    }, [conversation]);

  return (
    <div className="App">
      <nav>
      <Nav conversation={conversation} setConversation={ setConversation }/>
      </nav>
      <main>
        <FeedbackPanel feedback={ reply.content ? splitReply(reply.content): '' } />
        <MessagePanel messages={ messages } setMessages={ setMessages } setUserInput={ setUserInput } reply={ reply } setReply={ setReply }/>
      </main>
    </div>
  );
}

export default App;
