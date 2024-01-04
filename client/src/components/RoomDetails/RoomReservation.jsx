import PropTypes from "prop-types";

import Calender from "./Calender";
import Button from "../Button/Button";
// import { formatDistance } from "date-fns";
// import { useState } from "react";

const RoomReservation = ({ room }) => {
//   const toDate = new Date(room?.to);
//   const fromDate = new Date(room?.from);

//   // price calculation

//   let totalDays = 0;

//   if (isNaN(toDate) || isNaN(fromDate)) {
//     //   console.error("Invalid date values:", room?.to, room?.from);
//     } else {
//         totalDays = parseInt(formatDistance(toDate, fromDate).split(" ")[0], 10);
  
//   }

//   console.log(totalDays);

//   //   // total price calculation
//     const totalPrice = totalDays * room?.price;

//     const [value, setvalue] = useState({
//         startDate : new Date (room?.from),
//         endDate : new Date (room?.to),
//         key: "selection"
//     });

// console.log(value);


  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender />
      </div>
      <hr />
      <div className="p-4">
        <Button label="Reserve" />
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {room.price}</div>
      </div>
    </div>
  );
};

export default RoomReservation;

RoomReservation.propTypes = {
  room: PropTypes.any,
};
