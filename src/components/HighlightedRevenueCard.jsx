import React from "react";

export default function HighlightedRevenueCard({
  title,
  orderCount,
  amount,
  nextPaymentDate,
}) {
  return (
    <div>
      <div className="bg-sky-700 text-white text-lg rounded-lg shadow-sm p-0 border-2 hover:bg-sky-900">
        <div className="text-lg flex m-4">{title}</div>
        <div className="flex justify-between">
          <div className="font-semibold text-3xl m-4">{"₹" + amount}</div>
          <div className="text-base underline underline-offset-2 m-4">
            {orderCount + " order(s) >"}
          </div>
        </div>
        <div className="flex justify-between text-white bg-sky-900 rounded-b-lg">
          <div className="m-4">{"Next Payment Date: "}</div>
          <div className="m-4">{nextPaymentDate}</div>
        </div>
      </div>
    </div>
  );
}
