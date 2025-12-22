import React, { useState } from 'react';
import { data, Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUser = useLoaderData();
    const [users, setUsers] = useState(initialUser)
    const handleDelete = (_id) => {
         Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result)=> {
            if(result.isConfirmed){
                fetch(`http://localhost:3000/users/${_id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                         Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                              });

                        const remainingUsers = users.filter((singleUser) => singleUser._id != _id);
                        setUsers(remainingUsers);
                    }
                })
            }
        })
       
    }
    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl text-bold'>User Length : {initialUser.length}</h1>

            <div>


<div className='grid grid-cols-2 gap-3'>
    {
                    users.map((user, index) =>
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 flex flex-col items-center text-center">
        <img
          src={user.photo}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
        />

        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-500 text-sm">{user.email}</p>
        <p className="text-gray-600 mt-2">{user.address}</p>
        <p className="text-gray-700 font-medium">{user.phone}</p>

        <div className="mt-4 p-3 w-full bg-gray-50 rounded-lg text-sm text-gray-500">
          <p>
            <span className="font-semibold">Created: </span>
            {new Date(user.creationTime).toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Last Sign In: </span>
            {new Date(user.lastSignInTime).toLocaleString()}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6 w-full">
          <button className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors duration-200">
            ← Back
          </button>
          <Link to={`/updateuser/${user._id}`}>
          <button className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200">
            Update
          </button>
          </Link>
          <button onClick={()=> handleDelete(user._id)}  className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-200">
            Delete
          </button>
        </div>
      </div>
    </div>
                    )
                }
</div>
            </div>
        </div>
    );
};

export default Users;