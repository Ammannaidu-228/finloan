import React from "react";
import Navbar from '../components/Navbar/Navbar'
import Signin from '../components/Navbar/Signin'
import Footer from '../components/Navbar/Footer'
function Login() {
  return (
    <div>
      <Navbar />
      <div>
        <Signin />
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
