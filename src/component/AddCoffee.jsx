import React from 'react';
import { data } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        // send data to server
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Add Successfully",
                        icon: "success",
                        draggable: true
                    });

                    form.reset()
                }
            })


    }
    return (
        <div className='  bg-[#E8D8C0] hop-3'>
            <div className='text-center'>
                <h1 className='font-bold text-2xl'>Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} className='p-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <fieldset className="fieldset">
                        <label className='text-xs font-bold' >Name</label>
                        <input className='input w-full' type="text" name='name' placeholder="Enter Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className='text-xs font-bold' >Price</label>
                        <input className='input w-full' type="number" name='price' placeholder="Enter Coffee price" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className='text-xs font-bold' >Quantity</label>
                        <input className='input w-full' type="number" name='quantity' placeholder="Enter Coffee Quantity" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className='text-xs font-bold' >Taste</label>
                        <input className='input w-full' type="text" name='taste' placeholder="Enter Coffee taste" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className='text-xs font-bold' >Category</label>
                        <input className='input w-full' type="text" name='category' placeholder="Enter Coffee Category" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className='text-xs font-bold' >Details</label>
                        <input className='input w-full' type="text" name='details' placeholder="Enter Coffee details" />
                    </fieldset>


                </div>
                <fieldset className="fieldset">
                    <label className='text-xs font-bold' >Photo</label>
                    <input className='input w-full' name='photo' type="text" placeholder="Enter Photo URL" />
                </fieldset>
                <button className='btn w-full mt-3 bg-yellow-600'>Add Coffee</button>

            </form>
        </div>
    );
};

export default AddCoffee;