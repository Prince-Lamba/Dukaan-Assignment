import { useState } from "react";
import "./App.css";
import RevenueCard from "./components/RevenueCard";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import TransactionTable from "./components/TransactionsTable";
import HighlightedRevenueCard from "./components/HighlightedRevenueCard";

function App() {
  return (
    <div className="flex">
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <div className="w-screen">
        <div>
          <Navbar />
        </div>
        <div className="text-xl font-semibold mx-6 flex justify-center my-6">Overview</div>
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 p-4">
          <HighlightedRevenueCard
            title={"Next Payout"}
            orderCount={"212"}
            amount={"2,301.23"}
            nextPaymentDate={"01/01/2025"}
          />
          <RevenueCard
            title={"Amount Pending"}
            orderCount={"212"}
            amount={"31,029.66"}
            nextPaymentDate={"01/01/2025"}
          />
          <RevenueCard
            title={"Amount Processed"}
            orderCount={"212"}
            amount={"12,21,029.78"}
            nextPaymentDate={"01/01/2025"}
          />
        </div>
        <div>
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

export default App;
