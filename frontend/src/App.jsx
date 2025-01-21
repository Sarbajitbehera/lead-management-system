// import Home from "./pages/home/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer"
import Navbar from "./components/footer"
import LoginPage from "./components/footer"
import Login from "./pages/login/Login"
import Signin from "./pages/signup/Signup"
import Hero from "./pages/home/Hero.jsx"
import Hero1 from "./pages/new/Hero1.jsx"
import Navbar1 from "./components/Navbar1.jsx"
import Add from "./pages/Add/add.jsx";
import Detail from "./pages/home/Detail.jsx";

function App() {
  return (
    <>
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/new" element={<Hero1 />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
