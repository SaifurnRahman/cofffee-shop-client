
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const user = useLoaderData()
    const {_id,name, email, phone, photo, address} = user

    const handleUpdate = (e) => {
        e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedUser = Object.fromEntries(formData.entries());
    console.log(updatedUser);

    // send updated user data to the DB
    fetch(`http://localhost:3000/users/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log('after update', data);
        if(data.modifiedCount){
            Swal.fire({
            icon: "success",
            title: "Coffee Updated Successfully!",
            timer: 1500,
            showConfirmButton: false,
          });
        }
    })
    }

    
    return (
        <div>
             <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Update User
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name='name'
              defaultValue={name}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name='email'
              defaultValue={email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="text"
              name='phone'
              defaultValue={phone}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              name='address'
              defaultValue={address}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter address"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name='photo'
              defaultValue={photo}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
           <Link to={'/'}> <button
              type="button"
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors duration-200"
            >
              ← Back
            </button></Link>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateUser;