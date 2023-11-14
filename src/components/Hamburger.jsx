import { useEffect } from "react";
import { getConvoList } from "../apiService";

function Hamburger({
  conversation,
  setConversation,
  conversationList,
  setConversationList,
}) {
  useEffect(() => {
    getConvoList()
      .then((data) => {
        setConversationList(() => data);
      })
      .catch((e) => console.log(e));
  }, [conversation]);

  function handleClick(listNum) {
    setConversation(() => listNum);
  }

  return (
    <div className="Hamburger">
      <h1 className="hamMenuHeader">Select a conversation</h1>
      <ul className="hamList">
        <li className="hamListItem">
          <button
            id="newConvo"
            className="ConvoButton"
            onClick={() => handleClick(conversationList.length + 1)}
          >
            Start New Conversation
          </button>
        </li>
        {conversationList.map((item) => {
          return (
            <li className="hamListItem" key={item}>
              <button
                className={
                  item == conversation
                    ? "ConvoButton currentConvo"
                    : "ConvoButton"
                }
                onClick={() => handleClick(item)}
              >
                Chat {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Hamburger;
