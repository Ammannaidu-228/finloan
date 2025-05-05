import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Aboutus from "../pages/Aboutus"
import Login from "../pages/Login"
import Emi from "../pages/Emi"
import Member from "../pages/Member"

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/emi" element={<Emi/>}/>
            <Route path="/member" element={<Member/>}/>

        </Routes>
      
    </div>
  )
}

export default Routing
