import { ReactComponent as RobotPoint } from '../assets/pointing-robot.svg'


function FeedbackPanel({ feedback }) {

  return (
    <div className="FeedbackPanel">
      <div className="feedbackBox">
        <ul className="feedbackList">
          {!feedback[1] ?
            <li>Keep up the good work!</li> :
            feedback[1].map((str) => {
              return <li key={feedback[1].indexOf(str)}>{str}</li>
        })
        }
        </ul>
      </div>
      <div className="tutorImg">
      <RobotPoint className='tutor'/>
      </div>
    </div>
  )
}

export default FeedbackPanel;