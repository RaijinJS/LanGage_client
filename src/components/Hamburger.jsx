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
    if (listNum !== 0 && listNum !== undefined) {
      setConversation(() => listNum+1);
    }
  }

  return (
    <div className="Hamburger">
      <h1 className="hamMenuHeader">Select a conversation</h1>
      <ul className="hamList">
        <li className="hamListItem">
          <button
            id="newConvo"
            className="ConvoButton"
            onClick={() => handleClick(conversationList.length)}
          >
            Start New Conversation
          </button>
        </li>
        {conversationList !== undefined ? (
          conversationList.map((item) => {
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
          })
        ) : (
          <h3> You currently have no conversations.</h3>
        )}
      </ul>
    </div>
  );
}

export default Hamburger;
