
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Service = ({ service }) => {
const {name, description,  rating, image, id} = service
const [isReadMore, setIsReadMore] = useState(true);


const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  }

  return (
  
      
        <div  className=" border border-gray-700 rounded-lg overflow-hidden shadow-lg relative">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold uppercase">
              {name}
            </h2>
            <p className="text-base  my-4 text-justify ">
            {isReadMore ? description.slice(0, 200) : description}
            <button onClick={toggleReadMore} className='read-or-hide btn btn-xs btn-ghost cursor-pointer text-cyan-700 mx-1'>
                {isReadMore ? 'read more' : 'less'}
            </button>
            </p>
            <p className="text-yellow-500 text-sm mt-2">Rating: {rating}</p>
          </div>
         <div className='my-10'>
         <NavLink to={`/details/${id}`}> <button className='btn btn-accent bottom-0 absolute m-0 border-none w-full'>Details</button></NavLink>
         </div>
        </div>
   

  );
};

export default Service;