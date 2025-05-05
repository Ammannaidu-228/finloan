import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import bgImage from "../assets/CivilFinal.jpg";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            height: "50vh",
            backgroundPosition: "center",
          }}
        >
          <p className="text-white lg:text-5xl text-3xl lg:w-200 px-13 sm:w-100 px-5 py-5">
            If you're not making mistakes, then you're not doing anything
          </p>
        </div>
        <h1 className="text-cyan-700 text-center lg:mt-3 sm:mt-5 md:mt-5 lg:text-4xl text-2xl">
          An Hub For Your Financial Needs
        </h1>
        <div className="text-center lg:w-200 m-auto p-2 sm:py-5 text-orange-900 py-5">
          <span>
            We offer the extensive array of services by providing loans to
            citizens, Money transfer, wealth management and also leading on
            providing micro loans to agriculture and small businesses in the
            rural regions.
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
