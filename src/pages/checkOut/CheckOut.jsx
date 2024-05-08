import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title , price, img} = service;

  const {user} =useContext(AuthContext)


  const handelBookService = event => {
    event.preventDefault()
    const form = event.target;
    const name= form.name.value;
    const date =form.date.value;
    const email=form.email.value;
    // const amount =form.amount.value;
    // console.log(name, date, email, amount);
    const booking ={
      customerName : name,
      email,
      date,
      img, 
      service:title,
      service_id:_id,
      price,
    }
    console.log(booking);
    fetch('http://localhost:5000/bookings',{
      method: "POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: "Good job!",
          text: "Your booking success",
          icon: "success"
        });
      }
    })
  }
  return (
    <div className="my-24">
      <p className="text-center text-4xl my-8 font-bold"> Book Service : {title}</p>

      <form onSubmit={handelBookService} className="card-body bg-[#F3F3F3] p-24 rounded-lg ">
       <div className="flex flex-col md:flex-row w-full  gap-6 mb-6">
       <div className="w-full" >
         
          <input
            type="text"
            defaultValue={user?.displayName}
            name="name"
            className="input input-bordered w-full border-red-500 "
            required
          />
          
        </div>
        <div className="w-full" >
         
          <input
            type="date"
           name="date"
            className="input input-bordered w-full border-red-500 "
            required
          />
          
        </div>
       </div>
       <div className="flex w-full flex-col md:flex-row  gap-6">
       <div className="w-full" >
         
          <input
            type="email"
           defaultValue={user?.email}
            name="email"
            className="input input-bordered w-full "
            required
          />
          
        </div>
        <div className="w-full" >
         
          <input
            type="text"
            name="amount"
           defaultValue={'$'+price}
            className="input input-bordered w-full  "
            required
          />
          
        </div>
       </div>
       <div>
        
       </div>
        <div className="form-control mt-6">
         <input className="btn bg-[#FF3811] text-white" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
