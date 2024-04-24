import logo from '../assets/cleanMyCar.png'

const Login = () => {
  return (
    <div className="login-container">
      <section className='cleanMyCar-section'>
        <img src={logo} alt="CleanMyCar logo"/>
        <h2>CleanMyCar</h2>
        <h5>India's first waterless car cleaning company</h5>
      </section>
      <section className='login-section'>
        <h1>Log in</h1>
        <h2>Email</h2>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <h2>Password</h2>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
      </section>
    </div>
  )
}

export default Login
