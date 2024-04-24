import { Route, Routes } from 'react-router-dom'
import './App.css'
import ForgotPassword from './components/ForgotPassword'
import Login from './components/Login'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login/' element={<Login />} />
        <Route path='/login/forgotPassword/' element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}

export default App
