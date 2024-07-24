import React, { useContext } from "react";

import { NavLink, useParams } from "react-router-dom";
import { AuthContext } from "../../context/useContext";
import SinglePage from "./SinglePage";

export default function Details() {
  const { id } = useParams();
  const { data } = useContext(AuthContext);

  // Find data corresponding to the provided ID
  const item = data.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>No data found for the provided ID</div>;
  }


  return (
   <div className=" my-14">
        <div class="flex lg:flex-row flex-col">
      <div class="lg:w-2/3 w-[100%]">
        <div key={item.id}>
          <SinglePage item={item}></SinglePage>
        </div>
      </div>
      <div class="lg:w-1/3 w-[100%]">
      
      
      
      </div>
    </div>
   </div>
  );
}
