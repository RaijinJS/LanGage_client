import { ReactComponent as Logo } from '../assets/Logo no slogan.svg'
import Hamburger from './Hamburger.jsx'
import Popup from 'reactjs-popup';

function Nav({ conversation, setConversation }) {

  return (
    <div className="Nav">
      <div className="logoContainer">
      <Logo className='logo'/>
      </div>
      {/* <Popup trigger={

      } */}
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {/* <Hamburger conversation={ conversation } setConversation={ setConversation } /> */}
    </div>
  )
}

export default Nav;