import { ReactComponent as RobotPoint } from "../assets/pointing-robot.svg";
import { ReactComponent as RobotBook } from "../assets/book-robot.svg";
import { ReactComponent as RobotThink } from "../assets/thinking-robot.svg";
import { ReactComponent as RobotLetter } from "../assets/letter-robot.svg";
import { useState, useEffect } from "react";
import React from "react";

function FeedbackPanel({
  feedback,
  loading,
  messages,
  conversation,
  conversationList,
}) {
  const [mascot, setMascot] = useState(RobotBook);

   const determineMascot = () => {
     if (
       conversation === conversationList.length + 1 &&
       messages.length === 0
     ) {
       return RobotBook;
     } else if (feedback[0].length === 0) {
       return RobotLetter;
     }
     return RobotPoint;
   };

  useEffect(() => {
    const newMascot = determineMascot();
    if (mascot !== newMascot) {
      setMascot(newMascot);
    }
  }, [conversation, messages, feedback, mascot]);

  return (
    <div className="FeedbackPanel">
      <div className="feedbackBox">
        <h1 className="feedbackHeader">Feedback board</h1>
        <ul className="feedbackList">
          {feedback[0].length === 0 ? (
            <li>{messages.length === 0 ? "" : "Keep up the good work!"}</li>
          ) : (
            feedback.map((str) => {
              return <li key={feedback.indexOf(str)}>{str}</li>;
            })
          )}
        </ul>
      </div>
      <div className="tutor">
        {loading ? (
          <RobotThink className="tutorImg" />
        ) : (
          React.createElement(mascot, { className: "tutorImg" })
        )}
      </div>
    </div>
  );
}

export default FeedbackPanel;
