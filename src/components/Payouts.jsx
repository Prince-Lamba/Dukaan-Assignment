import React from "react";

export default function Payouts() {
  return (
    <div className="flex">
      <div className="hidden md:block">
        <SideBar />
      </div>
      <div className="w-screen">
        <div>
          <Navbar />
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <RevenueCard
            title={"Amount Pending"}
            orderCount={"212"}
            amount={"121029"}
            nextPaymentDate={"01/01/2025"}
          />
          <RevenueCard
            title={"Amount Pending"}
            orderCount={"212"}
            amount={"121029"}
            nextPaymentDate={"01/01/2025"}
          />
          <RevenueCard
            title={"Amount Pending"}
            orderCount={"212"}
            amount={"121029"}
            nextPaymentDate={"01/01/2025"}
          />
          <RevenueCard
            title={"Amount Pending"}
            orderCount={"212"}
            amount={"121029"}
            nextPaymentDate={"01/01/2025"}
          />
        </div>
      </div>
    </div>
  );
}
