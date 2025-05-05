import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Navbar/Footer'

function Aboutus() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className='mt-5'>
            <h1 className='text-3xl px-10'> About Us</h1>
            <div className='px-10 py-8 lg:w-200 xs:w-75 text-l font-'>
                <p>
                    Civil-Finlaon is a finance management company whcih is providing the extensive array of services by providing loans to citizens, Money transfer, wealth management and also leading on providing micro loans to agriculture and small business in the rural regions.
                </p>
            </div>
            <div className='px-10'>
                <button
                  type="submit"
                  className="flex justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore Home
                </button>
              </div>
        </div>
        <div className='fixed bottom-0 w-full'>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Aboutus
