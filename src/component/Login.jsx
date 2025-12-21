import React, { use } from 'react';
import { FaUser, FaEnvelope, FaLock, FaCoffee } from "react-icons/fa";
import { AuthContext } from '../Auth Provider/AuthContex';

const Login = () => {
    const {signInUser} = use(AuthContext)
    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then((result) => {
            console.log(result.user);
            const signInInfo = {
                email,
                lastSignInTime : result.user?.metadata?.lastSignInTime
            }

            fetch('http://localhost:3000/users', {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(signInInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('after update patch', data);
            })
        })
        .catch(err => console.log(err))


        

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
                      <form onSubmit={handleSignin} className="space-y-4">
            
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
                          Login
                        </button>
                      </form>
            
                      {/* Footer text */}
                      <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have account?{" "}
                        <a href="/signup" className="text-[#6B4226] hover:underline">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
        </div>
    );
};

export default Login;