import React from 'react';
import { FaArrowLeft, FaEdit } from "react-icons/fa";

import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const cofffeeData = useLoaderData();
      const {_id , name, price, category, quantity, taste, details, photo } = cofffeeData;

    return (
        <div>
              <div className="max-w-4xl mx-auto p-8">
      
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-700 hover:text-black mb-6"
      >
        <FaArrowLeft />
        Back to Home
      </Link>

      {/* Card */}
      <div className="bg-[#F5F3EE] rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8">

        {/* Image */}
        <div className="w-full md:w-1/3">
          <img
            src={photo}
            alt={name}
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 space-y-3 text-gray-800">
          <h2 className="text-3xl font-bold">{name}</h2>

          <p><span className="font-semibold">Category:</span> {category}</p>
          <p><span className="font-semibold">Taste:</span> {taste}</p>
          <p><span className="font-semibold">Quantity:</span> {quantity}</p>
          <p><span className="font-semibold">Price:</span> {price} Taka</p>

          <p className="mt-4">
            <span className="font-semibold">Details:</span><br />
            {details}
          </p>

          {/* Edit Button */}
          <Link
            to={`/updateCoffee/${_id}`}
            className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 mt-4"
          >
            <FaEdit />
            Edit Coffee
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CoffeeDetails;