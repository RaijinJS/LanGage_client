import React, { useState } from 'react';
import { splitReply } from '../util.js';
import { getWordTranslation } from '../apiService.js';
import Popup from 'reactjs-popup';

function Messages({ message, setReply}) {
  const [selectedWord, setSelectedWord] = useState(null);
  const [wordTranslation, setWordTranslation] = useState(null);
  const [messageTranslation, setMessageTranslation] = useState(null);
  const messageContent = splitReply(message.content);

  function handleWordClick (word) {
    const cleanedWord = word.replace(/[^\w\sÀ-ÖØ-öø-ÿ]/g, '')
    setSelectedWord(cleanedWord);
    getWordTranslation(word)
      .then((translation) => {
        const cleanedTranslation = translation.replace(/[^\w\sÀ-ÖØ-öø-ÿ]/g, '')
        setWordTranslation(cleanedTranslation);
      })
      .catch((error) => {
        console.error('Error fetching word translation:', error);
      });
  };

  function handleUserMessageClick() {
    // setReply(message)
  };

  function handleTutorMessageClick(messageToTranslate) {
  getWordTranslation(messageToTranslate)
    .then((translation) => {
      console.log(translation)
      setMessageTranslation(translation);
    })
    .catch((error) => {
      console.error('Error fetching message translation:', error);
    });
  };

  return (
    <div className="Messages">
      <div className={message.role === "user" ? "userM message" : "tutorM message"}>
        <p className="messageContent">
          {messageContent[0].split(' ').map((word, index) => (
            <span className="word" key={index} onClick={() => handleWordClick(word)}>
              {word}{' '}
            </span>
          ))}
        </p>
        {message.role === "user" ?
        <div className='messageFunctions userF' onClick={handleUserMessageClick()}><button className='functionDesc'>See feedback</button></div> :
        <div className='messageFunctions tutorF' onClick={() => handleTutorMessageClick(messageContent[0])}><button className='functionDesc'>Translate message</button></div>}
      </div>

      <Popup  open={selectedWord !== null} onClose={() => setSelectedWord(null)}>
        <div className="translationPopUp popUpMenu">
          <h2 className='translationTitle'>Translation of "{selectedWord}"</h2>
          <p className='translatedText'>{wordTranslation}</p>
          <div className='closeButtonContainer'>
            <button className='closeButton' onClick={() => setSelectedWord(null)}>Close</button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Messages;
