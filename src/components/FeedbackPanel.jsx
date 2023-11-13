import { ReactComponent as RobotPoint } from '../assets/pointing-robot.svg'
import { ReactComponent as RobotBook } from '../assets/book-robot.svg'
import { ReactComponent as RobotThink } from '../assets/thinking-robot.svg'
import { ReactComponent as RobotHappy } from '../assets/happy-robot.svg'
import { ReactComponent as RobotLetter } from '../assets/letter-robot.svg'
import { useState, useEffect } from 'react';
import React from 'react';



function FeedbackPanel({ feedback, loading, messages, conversation, conversationList }) {
  const [mascot, setMascot] = useState(RobotHappy);

  useEffect(
    () => {
      if (conversation === conversationList.length+1 && messages.length === 0) {
      setMascot(()=>RobotBook)}
      else if (!feedback[1] || feedback[1].length === 0) { setMascot(RobotLetter) }
      else if (feedback[1]) { setMascot(RobotPoint) }
      else {setMascot(()=>RobotHappy)}
    }, [mascot, conversation, messages]);

  return (
    <div className="FeedbackPanel">
      <div className="feedbackBox">
        <h1 className="feedbackHeader">Feedback Board</h1>
        <ul className="feedbackList">
          {!feedback[1] || feedback[1].length === 0 ?
            <li>{messages.length === 0 ? '': 'Keep up the good work!'}</li> :
            feedback[1].map((str) => {
              return <li key={feedback[1].indexOf(str)}>{str}</li>
        })
        }
        </ul>
      </div>
      <div className="tutor">
        {loading ? <RobotThink className='tutorImg'/> : React.createElement(mascot, { className: 'tutorImg' })}
      </div>
    </div>
  )
}

export default FeedbackPanel;