import './App.css';
import './components/Nav.css';
import './components/MessagePanel.css';
import './components/FeedbackPanel.css';
import './components/Messages.css';
import Nav from './components/Nav.jsx'
import FeedbackPanel from './components/FeedbackPanel.jsx'
import MessagePanel from './components/MessagePanel.jsx'
import { gptReply, getPrevMessages } from './apiService.js';
import { useState, useEffect } from 'react';

function App() {
  const [conversation, setConversation] = useState(1);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState({});
  const [reply, setReply] = useState({});

  useEffect(
    () => {
      getPrevMessages(conversation).then((data) => {
        if (!data) {
          setMessages([])
        } else {
          setMessages(data);
        }
        }).catch((e) => console.log(e))
    }, [conversation]);

  return (
    <div className="App">
      <nav>
      <Nav/>
      </nav>
      <main>
        <FeedbackPanel reply={ reply } />
        <MessagePanel messages={ messages } setMessages={setMessages} setUserInput={ setUserInput } reply={ reply } setReply={setReply}/>
      </main>
    </div>
  );
}

export default App;
