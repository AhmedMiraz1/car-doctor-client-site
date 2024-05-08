

const BookingRow = ({ booking, handelDelete, handelConfirm }) => {
  const { _id, price, service, date, img, status } = booking;

//   const handelDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:5000/bookings/${id}`,{
//             method: 'DELETE'
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             if(data.deletedCount > 0){
//                 Swal.fire({
//                     title: "Deleted!",
//                     text: "Your file has been deleted.",
//                     icon: "success",
//                   });
//             }
//           });
        
//       }
//     });
//   };
  return (
    <tr>
      <th>
        <button
          onClick={() => handelDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded  w-24 h-24">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>
        {/* {price} */}
        {service}
      </td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {
            status=== 'confirm' ? <span className="text-green-600 font-bold border-green-600 ">Approved</span> :
            <button onClick={()=>handelConfirm(_id)} className="btn btn-ghost btn-xs bg-[#FF3811] text-white px-3">Confirm</button>}
      </th>
    </tr>
  );
};

export default BookingRow;
