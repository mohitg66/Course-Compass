import './App.css'
import LandingPage from './components/LandingPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Courses from './components/Courses'
import CoursePage from './components/CoursePage'
import Contact1 from './components/Contact1'
import Contact2 from './components/Contact2'
import Compare from './components/Compare'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignOut from './components/SignOut'

// global variable for backend API
// window.API = 'https://course-compass-backend.onrender.com'
window.API = 'http://127.0.0.1:8000'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/logout" element={<SignOut />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/contact1" element={<Contact1 />} />
        <Route path="/contact" element={<Contact2 />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </Router>
  )
}

export default App;
