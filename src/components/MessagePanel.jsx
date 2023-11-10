import { ReactComponent as LogoL } from '../assets/Logo L.svg'
import { useState } from 'react';
import { Messages } from './Messages.jsx'


function MessagePanel({ messages, setUserInput, reply }) {
  const [input, setInput] = useState('');


  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserInput(input);
    // make input appear as user message
    setInput('');
  }

  return (
    <div className="MessagePanel">
      <div className="messages-container">
        {messages.map((message) => {
        return <Messages key={message._id} message={message} />
        })
        }
      </div>
      <form className="userInput" onSubmit={handleSubmit}>
<input type="textarea" name="inputField" className="inputField" value={input} onChange={ handleChange } required placeholder= "Type here..." rows={2} />
      <button type="submit" className='send-button'>
        <LogoL title= 'Send' className='buttonImg'/>
      </button>
      </form>
    </div>
  )
}

export default MessagePanel;