import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactPage from './components/Contact/ContactPage'
import LoginPage from './components/Login/LoginPage'
import SignupPage from './components/SignUp/SignupPage'
import Services from "./components/Services/Services"
import DashBoard from "./components/DashBoard/DashBoard"
import UserPage from "./components/DashBoard/UserPage"
import InternPage from "./components/DashBoard/InternPage"
import TraineePage from './components/DashBoard/TraineePage'


const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="about" element ={<About/>}/>
      <Route path="contact" element ={<ContactPage/>}/>
      <Route path="services" element ={<Services/>}/>
      <Route path="login" element ={<LoginPage/>}/>
      <Route path="register" element ={<SignupPage/>}/>
      <Route path="dashboard" element ={<DashBoard/>}/>
      <Route path="dashboard/users" element={<UserPage />} />
      <Route path="dashboard/interns" element={<InternPage />} />
      <Route path="dashboard/trainees" element={<TraineePage />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App