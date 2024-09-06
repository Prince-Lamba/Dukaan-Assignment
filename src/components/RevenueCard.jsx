import React from "react";

const RevenueCard = ({ title, orderCount, amount, nextPaymentDate }) => {
  return (
    <div className="bg-white text-xl rounded-lg shadow-sm p-5">
      <div className=" text-gray-500 flex">
        {title}
      </div>
      <div className="flex justify-between my-2">
        <div className="font-semibold text-3xl">{"₹" + amount}</div>
        <div className="text-base text-sky-900 underline underline-offset-2">
          {orderCount + " order(s) >"}
        </div>
      </div>
    </div>
  );
};

export default RevenueCard;
