
import React from 'react';
import { FaCoffee, FaStar, FaLeaf, FaFire } from "react-icons/fa";
import { Link } from 'react-router';



const Header = () => {
  return (
    <div>
      <div className="font-sans bg-[#f5f3ef] text-gray-800">
        {/* ======= Navbar ======= */}
        <header className="bg-[#3e2723] py-4 px-8 flex items-center justify-around">
          <div><h1 className="text-2xl text-white font-semibold flex items-center gap-2">
            <FaCoffee className="text-amber-400 text-3xl" />
            Espresso Emporium
          </h1></div>

          <div className='grid grid-cols-2 gap-2'>
            <Link to={'/signup'}><button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-6 rounded transition-colors">
              Sign Up
            </button></Link>
            <Link to={'/login'}><button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-6 rounded transition-colors">
              Login
            </button></Link>
          </div>
        </header>

        {/* ======= Hero Section ======= */}
        <section
          className="relative text-white text-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/CptJgj2z/3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "15vh",
          }}
        >

          <div className="relative z-10 px-4 sm:px-8 max-w-2xl py-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-serif">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="text-sm sm:text-base text-gray-200 mb-6">
              It’s coffee time – sip & savor – relaxation in every sip! Get the nostalgia back!!
              Your companion of every moment! Enjoy the beautiful moments and make them memorable.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-2 px-6 rounded transition-colors">
              Learn More
            </button>
          </div>
        </section>

        {/* ======= Features Section ======= */}
        <section className="py-16 px-6 md:px-16 bg-[#f0ebe3]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <FaCoffee className="text-5xl text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Awesome Aroma</h3>
              <p className="text-gray-600 text-sm">
                You’ll definitely be a fan of the design & aroma of your coffee.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <FaStar className="text-5xl text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-600 text-sm">
                We serve the best coffee to you while maintaining premium quality.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <FaLeaf className="text-5xl text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pure Grades</h3>
              <p className="text-gray-600 text-sm">
                Our coffee is made from the finest green coffee beans you’ll love.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center">
              <FaFire className="text-5xl text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proper Roasting</h3>
              <p className="text-gray-600 text-sm">
                Coffee brewed by first roasting grains for that perfect flavor.
              </p>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Header;