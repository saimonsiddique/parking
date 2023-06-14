import React from "react";

function InfoCard({ name, vehicleNum }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center bg-indigo-300 rounded-lg">
        <h2 className="card-title text-3xl uppercase">{name}</h2>
        <div className="text-3xl font-bold text-[#e01a56]">{vehicleNum}</div>
      </div>
    </div>
  );
}

export default InfoCard;
