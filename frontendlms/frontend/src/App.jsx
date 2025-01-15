import Home from "./pages/home/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer"
import Navbar from "./components/footer"
import LoginPage from "./components/footer"
import Login from "./pages/login/Login"
import Signin from "./pages/signup/Signup"
import Hero from "./pages/new/Hero"
import Hero1 from "./pages/new2/Hero1"
import Navbar1 from "./pages/new2/Navbar1"
import DashBoard from "./pages/dashboard/dashBoard";


function App() {


  return (
    <>
  {/* <Home/> */}
  {/* <DashBoard/> */}
  {/* <Login /> */}
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/new" element={<Hero1 />} />
        </Routes>
      </Router>
{/* 
    
      <div className="flex ">
      <Login/>
      <Signin/>
      </div>
      <br></br>
      <Navbar1/>
      <Hero/>
      <Hero1/>
      <br></br>
      < Footer /> */}
    </>
  )
}

export default App
