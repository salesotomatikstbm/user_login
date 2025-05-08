"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
const MyOrderPage = () => {
  const orders = [
    {
      id: "ORD123",
      product: "Web Development Course",
      date: "2025-05-05",
      status: "Delivered",
    },
    {
      id: "ORD124",
      product: "JavaScript Basics Course",
      date: "2025-05-07",
      status: "In Progress",
    },
  ];

  return (
    <div className="p-8">
          <Navbar/>
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faShoppingBag} className="text-green-600" />
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{order.product}</h2>
                  <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                </div>
                <div className="text-sm text-right">
                  <p>{order.date}</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrderPage;
