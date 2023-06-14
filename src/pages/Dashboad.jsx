import React from "react";
import Layout from "../components/common/Layout";
import InfoCard from "../components/InfoCard";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
function Dashboad() {
  const [searchDate, setSearchDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [overTwoHours, setOverTwoHours] = useState([]);
  const [totalCars, setTotalCars] = useState(0);
  const [totalMiniBus, setTotalMiniBus] = useState(0);
  const [totalTruck, setTotalTruck] = useState(0);
  const [emptySlot, setEmptySlot] = useState(0);

  const totalSlot = 100;

  useEffect(() => {
    // set Search Date to today's date
    setSearchDate(moment().format("YYYY-MM-DD"));
  }, []);

  useEffect(() => {
    const allVehicles = JSON.parse(localStorage.getItem("vehicles"));
    // filter the vehicles by date
    const filteredVehicles = allVehicles.filter(
      (vehicle) => moment(vehicle.entryTime).format("YYYY-MM-DD") === searchDate
    );
    setFilteredData(filteredVehicles);
    setEmptySlot(totalSlot - filteredVehicles.length);
  }, [searchDate]);

  useEffect(() => {
    const overTwoHoursVehicles = filteredData.filter((vehicle) => {
      const entryTime = moment(vehicle.entryTime);
      const exitTime = moment(vehicle.exitTime);
      const duration = moment.duration(exitTime.diff(entryTime));
      const hours = duration.asHours();
      if (hours > 2) {
        return vehicle;
      }
    });
    setOverTwoHours(overTwoHoursVehicles);
  }, [filteredData]);

  useEffect(() => {
    let total = {
      car: 0,
      microbus: 0,
      truck: 0,
    };
    filteredData.forEach((vehicle) => {
      total[vehicle.type] += 1;
    });
    setTotalCars(total.car);
    setTotalMiniBus(total.microbus);
    setTotalTruck(total.truck);
  }, [filteredData]);

  return (
    <Layout>
      <div className="flex h-screen">
        <div className="flex-[0.5] p-2 m-auto ">
          <div className="card shadow-xl h-[80vh] p-2 bg-indigo-200">
            <div className="card-body flex flex-col">
              <h1 className="text-6xl font-bold text-center uppercase">
                Parking Information
              </h1>
              <div className="flex flex-col items-center mt-5">
                <input
                  type="date"
                  placeholder="Entry Time"
                  className="input input-bordered w-full  focus:outline-none w-96 h-16"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                />
                <div className="flex flex-col gap-2 mt-5">
                  <InfoCard
                    name={"Vehicle Parked More than 2 hours"}
                    vehicleNum={overTwoHours.length}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <div className="grid grid-cols-2 gap-2">
                    {overTwoHours.map((vehicle) => (
                      <InfoCard
                        key={vehicle.license}
                        name={vehicle.type}
                        vehicleNum={vehicle.license}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0.5] p-2 m-auto">
          <div
            className="card shadow-xl h-[80vh] p-2
            bg-purple-200
          "
          >
            <div className="card-body flex flex-col gap-10">
              <h1 className="text-6xl font-bold text-center uppercase">
                Vehicle Information
              </h1>
              <div className="grid grid-cols-2 gap-2">
                <InfoCard name={"Total Cars Parked"} vehicleNum={totalCars} />
                <InfoCard name={"Total Empty Slot"} vehicleNum={emptySlot} />
                <InfoCard
                  name={"Total Trucks Parked"}
                  vehicleNum={totalTruck}
                />
                <InfoCard
                  name={"Total Microbus Parked"}
                  vehicleNum={totalMiniBus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboad;
