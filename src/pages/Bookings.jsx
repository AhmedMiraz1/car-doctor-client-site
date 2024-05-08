import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";


const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings, setBookings]= useState([])

    const url =`http://localhost:5000/booking?email=${user?.email}`
    useEffect(()=> {
        fetch(url).then(res=> res.json()).then(data => {
            setBookings(data)
        })
    },[url])

    const handelDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                      });
                      const remaining = bookings.filter(booking => booking._id !== id); 
                      setBookings(remaining)
                }
              });
            
          }
        });
      };

      const handelConfirm = id => {
   fetch(`http://localhost:5000/bookings/${id}`,{
    method: "PATCH",
    headers: {
        'content-type': "application/json"
    },
    body: JSON.stringify({status:'confirm'})
   })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    if(data.modifiedCount > 0){

        const remaining = bookings.filter(booking => booking._id !==id)
        const update = bookings.find(booking => booking._id ===id)
        update.status = 'confirm'
        const newBookings = [update, ...remaining]
        setBookings(newBookings)
        Swal.fire({
            title: "Good job!",
            text: "Your booking Approved",
            icon: "success"
          });
    }
   })
      }

    return (
        <div>
            <p>{bookings.length}</p>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     {
       bookings.map(booking => <BookingRow key={booking._id} booking={booking} handelDelete={handelDelete}
        handelConfirm={handelConfirm} />)
     }
   
    </tbody>
   
    
  </table>
</div>
            
        </div>
    );
};

export default Bookings;