
import React from 'react';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router';
import { Links } from 'react-router';
import Swal from 'sweetalert2';


const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const { _id ,name, taste, photo, price } = coffee;

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed);
  if (result.isConfirmed) {
    // start deleting the coffee

    fetch(`http://localhost:3000/coffees/${_id}`, {
        method: 'DELETE'
    }) .then(res => res.json())
  .then(data => {
    if (data.deletedCount) {
      Swal.fire({
        title: "Deleted!",
        text: "Your coffee has been deleted.",
        icon: "success"
      });

      // removing from ui
      const remainingCoffees = coffees.filter(
        (singleCoffee) => singleCoffee._id !== _id
      );
      setCoffees(remainingCoffees);
    }
  });
  }
});
    }
    return (
        <div>
             <div className="flex items-center gap-6 bg-[#F5F3EE] p-6 rounded-xl shadow-sm max-w-2xl">
      
      {/* Image */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex-1 text-gray-800">
        <p className="text-lg font-semibold">
          <span className="font-bold">Name:</span> {name}
        </p>

        <p className="text-lg font-semibold">
          <span className="font-bold">Chef:</span> {taste}
        </p>

        <p className="text-lg font-semibold">
          <span className="font-bold">Price:</span> {price} Taka
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <Link to={`/coffee/${_id}`}><button className="p-3 rounded-md bg-[#E8D8C0] hover:bg-[#D5C2A5] transition">
          <FaEye className="text-white text-lg" />
        </button></Link>
       <Link to={`/updatecoffee/${_id}`}> <button className="p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition">
          <FaEdit className="text-white text-lg" />
        </button></Link>
        <button onClick={() => handleDelete(_id)} className="p-3 rounded-md bg-red-500 hover:bg-red-600 transition">
          <FaTrash className="text-white text-lg" />
        </button>
      </div>
    </div>
        </div>
    );
};

export default CoffeeCard;