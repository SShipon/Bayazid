
import Service from "./Service";
import { useContext,  } from "react";
import { AuthContext } from "../../../context/useContext";


export default function Services() {

  const{ data }= useContext(AuthContext)
  
  return (
    <div className="container mx-auto  my-10 ">
       <div className="my-9">
         <h1 className="text-2xl font-bold text-center mb-4 py-4">OUR SERVICES</h1>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
         {
            data.map((service)=><Service
               key={service.id}
              service={service}
            ></Service>)
         }
       </div>
    
    </div>
  );
}
