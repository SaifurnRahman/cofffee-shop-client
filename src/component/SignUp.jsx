import React, { use } from 'react';
import { FaUser, FaEnvelope, FaLock, FaCoffee } from "react-icons/fa";
import { AuthContext } from '../Auth Provider/AuthContex';
import { PiPassword } from 'react-icons/pi';
import { data } from 'react-router';
import Swal from 'sweetalert2';


const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(formData.entries());

    console.log(email, password, userProfile);
    // create user in firebase

    createUser(email, password)
      .then(result => {
        console.log(result.user);

        //save profile info in the db
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(userProfile)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your user has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
      })
      .catch(err => {
        console.log(err);
      })
  }



  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-[#f5f3ef]">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          {/* Brand / Logo */}
          <div className="flex flex-col items-center mb-6">
            <FaCoffee className="text-[#6B4226] text-4xl mb-2" />
            <h1 className="text-2xl font-bold text-[#3E2723]">Espresso Emporium</h1>
            <p className="text-sm text-gray-500">Join us and enjoy every sip!</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                name='name'
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b5895c]"
              />
            </div>
            {/* address */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                name='address'
                type="text"
                placeholder="Full address"
                className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b5895c]"
              />
            </div>
            {/* phone */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                name='phone'
                type="number"
                placeholder="Phone Number"
                className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b5895c]"
              />
            </div>
            {/* Photo */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-500" />
              <input
                name='photo'
                type="text"
                placeholder="photo URL"
                className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b5895c]"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
              <input
                name='email'
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b5895c]"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-500" />
              <input
                name='password'
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#b5895c]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#b5895c] hover:bg-[#a0754d] text-white font-semibold py-2 rounded-md transition-colors duration-200 cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          {/* Footer text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-[#6B4226] hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;