import { ReactComponent as Logo } from "../assets/Logo no slogan.svg";
import Hamburger from "./Hamburger.jsx";
import Popup from "reactjs-popup";
import { useState } from "react";

function Nav({
  conversation,
  setConversation,
  conversationList,
  setConversationList,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="Nav">
      <div className="logoContainer">
        <Logo className="logo" />
      </div>

      <Popup
        className="popUpComponent"
        trigger={
          <button className="hamburgerButton">
            <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </button>
        }
        onOpen={handleOpen}
        onClose={handleClose}
        position="bottom center"
      >
        {(close) => (
          <div className="popUpMenu">
            <Hamburger
              conversation={conversation}
              setConversation={setConversation}
              conversationList={conversationList}
              setConversationList={setConversationList}
            />
            <div className="closeButtonContainer">
              <button className="closeButton" onClick={() => close()}>
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default Nav;
