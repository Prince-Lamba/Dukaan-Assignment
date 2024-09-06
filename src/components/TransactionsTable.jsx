import React from "react";

const TransactionTable = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Transactions | This Month</h1>

      <div className="flex space-x-2 mb-4">
        <button className="bg-sky-700 text-white py-2 px-4 rounded">
          Payouts (22)
        </button>
        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
          Refunds (2)
        </button>
      </div>

      <input
        type="text"
        placeholder="Order ID or transaction ID"
        className="border p-2 w-full rounded mb-4"
      />

      <div className="overflow-auto max-h-64">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border">Date</th>
              <th className="px-4 py-2 text-left border">Status</th>
              <th className="px-4 py-2 text-left border">Transaction ID</th>
              <th className="px-4 py-2 text-left border">Order amount</th>
              <th className="px-4 py-2 text-left border">Transaction fees</th>
              <th className="px-4 py-2 text-left border">Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                date: "Today, 09:00 PM",
                status: "Processing",
                id: "131634495747",
                amount: "₹10,125.00",
                fees: "₹1,125.00",
                total: "₹9,312",
              },
              {
                date: "Today, 03:00 PM",
                status: "Successful",
                id: "131634495747",
                amount: "₹10,125.00",
                fees: "₹1,125.00",
                total: "₹9,312",
              },
              {
                date: "Today, 09:00 AM",
                status: "Successful",
                id: "131634495747",
                amount: "₹10,125.00",
                fees: "₹1,125.00",
                total: "₹9,312",
              },
              {
                date: "Yesterday, 3:00 PM",
                status: "Successful",
                id: "131634495747",
                amount: "₹10,125.00",
                fees: "₹1,125.00",
                total: "₹9,312",
              },
              {
                date: "Yesterday, 09:00 AM",
                status: "Successful",
                id: "131634495747",
                amount: "₹10,125.00",
                fees: "₹1,125.00",
                total: "₹9,312",
              },
              {
                date: "12 Jul 2023, 03:00 PM",
                status: "Successful",
                id: "131634495747",
                amount: "₹10,125.00",
                fees: "₹1,125.00",
                total: "₹9,312",
              },
              {
                date: "12 Jul 2023, 11:00 AM",
                status: "Successful",
                id: "131634495747",
                amount: "₹10,125.00",
                fees: "₹1,125.00",
                total: "₹9,312",
              },
            ].map((transaction, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{transaction.date}</td>
                <td className="px-4 py-2 border">
                  <span
                    className={
                      transaction.status === "Processing"
                        ? "text-gray-500"
                        : "text-green-500"
                    }
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-4 py-2 border">{transaction.id}</td>
                <td className="px-4 py-2 border">{transaction.amount}</td>
                <td className="px-4 py-2 border">{transaction.fees}</td>
                <td className="px-4 py-2 border">{transaction.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
