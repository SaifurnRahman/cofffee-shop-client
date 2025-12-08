import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { FaCoffee } from "react-icons/fa";


const Home = () => {
    const initialCoffee = useLoaderData()
    const [coffees, setCoffees] = useState(initialCoffee);
    return (
        <div>
             <section className="text-center py-14 bg-white">
      {/* top divider text */}
      <p className="text-gray-600 text-sm mb-2">--- Sip &amp; Savor ---</p>

      {/* heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#3e2723] mb-6 font-[Poppins]">
        <span className="drop-shadow-sm" style={{ textShadow: "1px 2px 2px #bfa582" }}>
          Our Popular Products
        </span>
      </h2>

      {/* Add Coffee button */}
    <button className="flex items-center justify-center gap-2 bg-[#d2a679] hover:bg-[#c6935f] text-white font-semibold py-2 px-6 rounded-md shadow-md transition-colors duration-200">
        <Link to={'/addcofffee'}> Add Coffee</Link>
        <FaCoffee className="text-lg" />
      </button>
    </section>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    coffees.map(coffee => <CoffeeCard
                         key={coffee._id} 
                         coffee={coffee}
                         coffees={coffees}
                        setCoffees={setCoffees}
                         >
                        
                         </CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;