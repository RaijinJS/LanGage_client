function Hamburger ({ conversation, setConversation }) {

  return (
    <div className="Hamburger">
      <ul className="hamList">
        <li className="hamListItem">
          Lesson {conversation}
        </li>
        <li className="newConvoButton">Start New Lesson</li>
      </ul>
    </div>
  )
}

export default Hamburger;