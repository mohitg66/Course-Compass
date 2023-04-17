import './App.css'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Courses from './components/Courses'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  )
}

export default App;
