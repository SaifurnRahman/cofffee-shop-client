import React from 'react';
import { data, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCofffe = () => {
    const coffee = useLoaderData()
    console.log(coffee);
    const {
    _id,
    name,
    price,
    category,
    quantity,
    taste,
    details,
    photo,
  } = coffee;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // send updated coffee to the db

    fetch(`http://localhost:3000/coffees/${_id}`, {
        method : 'PUT',
        headers : {
            'content-type' : 'application/json',
        },
        body : JSON.stringify(updatedCoffee),
    })
    .then(res => res.json())
    .then(data => {
        console.log('after update' , data);
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
            <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Update Coffee</h1>

      <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F5F3EE] p-8 rounded-xl">

        {/* Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="p-3 rounded border"
            required
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Price</label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            className="p-3 rounded border"
            required
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={category}
            className="p-3 rounded border"
            required
          />
        </div>

        {/* Quantity */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Quantity</label>
          <input
            type="text"
            name="quantity"
            defaultValue={quantity}
            className="p-3 rounded border"
            required
          />
        </div>

        {/* Taste */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Taste</label>
          <input
            type="text"
            name="taste"
            defaultValue={taste}
            className="p-3 rounded border"
            required
          />
        </div>

        {/* Photo URL */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Photo URL</label>
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            className="p-3 rounded border"
            required
          />
        </div>

        {/* Details */}
        <div className="md:col-span-2 flex flex-col">
          <label className="font-semibold mb-1">Details</label>
          <textarea
            name="details"
            defaultValue={details}
            rows="4"
            className="p-3 rounded border"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700"
          >
            Update Coffee
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateCofffe;