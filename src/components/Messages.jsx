import React, { useState } from 'react';
import { splitReply } from '../util.js';
import { getWordTranslation } from '../apiService.js';
import Popup from 'reactjs-popup';

function Messages({ message }) {
  const [selectedWord, setSelectedWord] = useState(null);
  const [translation, setTranslation] = useState(null);
  const messageContent = splitReply(message.content);

  const handleWordClick = (word) => {
    const cleanedWord = word.replace(/[^\w\sÀ-ÖØ-öø-ÿ]/g, '')
    setSelectedWord(cleanedWord);
    getWordTranslation(word)
      .then((translation) => {
        const cleanedTranslation = translation.replace(/[^\w\sÀ-ÖØ-öø-ÿ]/g, '')
        console.log(translation)
        setTranslation(cleanedTranslation);
      })
      .catch((error) => {
        console.error('Error fetching translation:', error);
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
      </div>

      <Popup  open={selectedWord !== null} onClose={() => setSelectedWord(null)}>
        <div className="translationPopUp popUpMenu">
          <h2 className='translationTitle'>Translation of "{selectedWord}"</h2>
          <p className='translatedText'>{translation}</p>
          <div className='closeButtonContainer'>
            <button className='closeButton' onClick={() => setSelectedWord(null)}>Close</button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default Messages;
