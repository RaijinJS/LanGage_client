import { splitReply } from '../util.js';

function Messages({ message }) {

  const messageContent = splitReply(message.content);

  return (
    <div className="Messages">
      <div className= {message.role === "user" ? "userM message" : "tutorM message"}>
        <p className="messageContent">{ messageContent[0] }</p>
      </div>
    </div>
  )
}

export default Messages;