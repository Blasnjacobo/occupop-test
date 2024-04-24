import { Route, Routes } from 'react-router-dom'
import './App.css'
import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import Welcome from './pages/Welcome'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login/' element={<Login />} />
        <Route path='/login/forgotPassword/' element={<ForgotPassword />} />
        <Route path='/login/welcome/' element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App
