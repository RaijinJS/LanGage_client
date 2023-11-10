function Messages ({message}) {

  return (
    <div className="Messages">
      <div className= {message.role === "user" ? "userM message" : "tutorM message"}>
        <p className="messageContent">{ message.content }</p>
      </div>
    </div>
  )
}

export default Messages;