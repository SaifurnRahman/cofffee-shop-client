import React, { useState } from 'react';
import { data, useLoaderData } from 'react-router';
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
                 <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
  </table>
</div>


                {
                    users.map((user, index) =>
                        <div key={user._id} className="overflow-x-auto">
                            <table className="table table-zebra">
                               
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.phone}</td>
                                        <div>
                                            <button onClick={()=> handleDelete(user._id)} className='btn'>X</button>
                                            <button className='btn'>Y</button>
                                            <button className='btn'>Z</button>
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Users;