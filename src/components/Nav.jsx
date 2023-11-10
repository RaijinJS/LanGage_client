import { ReactComponent as Logo } from '../assets/Logo no slogan.svg'

function Nav() {

  return (
    <div className="Nav">
      <div className="logoContainer">
      <Logo className='logo'/>
      </div>
    <div className="hamburger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
  </div>
    </div>
  )
}

export default Nav;