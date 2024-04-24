import { NavLink } from 'react-router-dom'
import logo from '../assets/cleanMyCar.png'

const ForgotPassword = () => {
  return (
    <div className="forgotPassword-container">
      <section className='forgotPassword-recover'>
        <div className='recover-text'>Recover your account</div>
        <p>Type your email address or your mobile number to reset your password</p>
        <input type="email" id="email" name="email" placeholder="email address or mobile number" required />
        <div className='forgot-links'>
          <NavLink  to="/login/">
            <button>Cancel</button>
          </NavLink>
          <NavLink  to="/login/">
            <button>Search</button>
          </NavLink>
        </div>
      </section>
      <section className='cleanMyCar-section'>
        <img src={logo} alt="CleanMyCar logo"/>
        <h3>India's first waterless car cleaning company</h3>
      </section>
    </div>
  )
}

export default ForgotPassword
