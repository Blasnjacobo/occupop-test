import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/cleanMyCar.png';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const emailInput = document.getElementById('email') as HTMLInputElement | null;
    const passwordInput = document.getElementById('password') as HTMLInputElement | null;

    if (!emailInput || !passwordInput) {
      setErrorMessage('Email or password input is missing');
      return;
    }

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email !== 'blas@gmail.com' || password !== 'password') {
      setErrorMessage('Invalid email or password');
      return;
    }
    window.location.href = "/login/welcome";
  };

  return (
    <div className="login-container">
      <section className='cleanMyCar-section'>
        <img src={logo} alt="CleanMyCar logo"/>
        <h3>India's first waterless car cleaning company</h3>
      </section>
      <section className='login-section'>
        <h1>Log in</h1>
        <a href="https://www.lipsum.com/feed/html" className="need-help-link" target="_blank">Need help?</a>
        <div className='email-password-section'>
            <h1>Email</h1>
            <input type="email" id="email" name="email" placeholder="blas@gmail.com" required />
            <h1>Password</h1>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
            <Link to="/login/forgotPassword/" className="forgot-password-link">Forgot your password?</Link>
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </section>
    </div>
  );
}

export default Login;
