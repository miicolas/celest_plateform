import React from "react";

function CardEvent({ name, date, places, status }) {
  return (
    <div
      className={`border rounded-lg p-4 mb-4 w-80 ${status === "close" ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-gray-600 mb-2">{places}</p>
      <p
        className={`text-sm ${status === "close" ? "text-red-500" : "text-green-500"}`}
      >
        {status}
      </p>
      <button
        className={` bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 ${status === "close" ? "cursor-not-allowed" : ""}`}
      >
        {" "}
        Participer
      </button>
    </div>
  );
}

export default CardEvent;
