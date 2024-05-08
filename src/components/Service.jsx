import {  FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  console.log(service);

  const {_id,img, title, price}=service
  return (
    <div className="card bg-base-100 shadow-xl p-4 border mt-8">
      <figure className="">
        <img
          src={img}
          alt=""
          className="rounded-xl h-full md:h-[25vh]"
        />
      </figure>
      <div className=" items-center ">
        <h2 className="text-[#444] text-2xl font-bold my-4">{title}</h2>
        <div className="flex justify-between text-xl font-semibold text-[#FF3811]  items-center">
        <p className=""> Price : ${price}</p>
       
       <Link to={`/checkout/${_id}`} className=""><FaArrowRight/></Link>
        </div>
      
      </div>
    </div>
  );
};

export default Service;
