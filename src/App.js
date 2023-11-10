import './App.css';
import './components/Nav.css';
import './components/MessagePanel.css';
import './components/FeedbackPanel.css';
import Nav from './components/Nav.jsx'
import FeedbackPanel from './components/FeedbackPanel.jsx'
import MessagePanel from './components/MessagePanel.jsx'
import { gptReply, getPrevMessages } from './apiService.js';
import { useState, useEffect } from 'react';

function App() {
  const [conversation, setConversation] = useState(0);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [reply, setReply] = useState({});

  useEffect(
    () => {
      getPrevMessages(conversation).then((data) => {
        setMessages(data);
        }).catch((e) => console.log(e))
    }, [conversation]);


  useEffect(
    () => {
      if (userInput !== '') {
        gptReply(userInput).then((data) => {
          setReply(data);
          }).catch((e) => console.log(e))
      }
    }, [userInput]);

  return (
    <div className="App">
      <nav>
      <Nav/>
      </nav>
      <main>
      <FeedbackPanel />
        <MessagePanel messages={ messages } setUserInput={ setUserInput } reply={ reply } />
      </main>
    </div>
  );
}

export default App;
