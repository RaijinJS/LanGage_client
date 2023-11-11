import { ReactComponent as RobotPoint } from '../assets/pointing-robot.svg'

function FeedbackPanel(reply) {
  // returning undefined, why?
console.log(reply.content)
  return (
    <div className="FeedbackPanel">
      <div className="feedbackBox">
        <p>{reply.content}</p>
      </div>
      <div className="tutorImg">
      <RobotPoint className='tutor'/>
      </div>
    </div>
  )
}

export default FeedbackPanel;