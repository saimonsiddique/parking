import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const vehicleTypes = ["microbus", "truck", "car"];

function VehicleForm() {
  const [license, setLicense] = useState("");
  const [type, setType] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(false);
  const [address, setAddress] = useState("");
  const [entryTime, setEntryTime] = useState("");
  const [exitTime, setExitTime] = useState("");
  const [parkingCharge, setParkingCharge] = useState(0);

  const { id } = useParams();
  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVehicle = {
      license,
      type,
      ownerName,
      phone,
      status,
      address,
      entryTime,
      exitTime,
      parkingCharge,
    };

    const allVehicles = JSON.parse(localStorage.getItem("vehicles"));
    if (allVehicles && id) {
      const index = allVehicles.findIndex((vehicle) => vehicle.license === id);
      allVehicles[index] = newVehicle;
      localStorage.setItem("vehicles", JSON.stringify(allVehicles));
    } else if (allVehicles) {
      allVehicles.push(newVehicle);
      localStorage.setItem("vehicles", JSON.stringify(allVehicles));
    } else {
      localStorage.setItem("vehicles", JSON.stringify([newVehicle]));
    }
    //  Reset the form
    setLicense("");
    setType("");
    setOwnerName("");
    setPhone("");
    setStatus(false);
    setAddress("");
    setEntryTime("");
    setExitTime("");
    setParkingCharge(0);
  };

  useEffect(() => {
    if (id) {
      const vehicles = JSON.parse(localStorage.getItem("vehicles"));
      const vehicle = vehicles.find((vehicle) => vehicle.license === id);
      setLicense(vehicle.license);
      setType(vehicle.type);
      setOwnerName(vehicle.ownerName);
      setPhone(vehicle.phone);
      setStatus(vehicle.status);
      setAddress(vehicle.address);
      setEntryTime(vehicle.entryTime);
      setExitTime(vehicle.exitTime);
      setParkingCharge(vehicle.parkingCharge);
    }
  }, [id]);

  return (
    <div className="card bg-gray-300 shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <span className="text-md font-semibold uppercase">
            License Number
          </span>
          <input
            type="text"
            placeholder="License Number"
            className="input input-bordered w-full focus:outline-none"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />
          <span className="text-md font-semibold uppercase">vehicle Type</span>
          <select
            className="select select-bordered w-full"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            {type === "" && (
              <option value="" className="capitalize">
                Select vehicle type
              </option>
            )}
            {vehicleTypes.map((vehicleTypes) => (
              <option className="capitalize" key={vehicleTypes}>
                {vehicleTypes}
              </option>
            ))}
          </select>
          <span className="text-md font-semibold uppercase">Owner Name</span>
          <input
            type="text"
            placeholder="Owner Name"
            className="input input-bordered w-full  focus:outline-none"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <span className="text-md font-semibold uppercase">
            Owner Phone Number
          </span>
          <input
            type="text"
            placeholder="Owner Phone Number"
            className="input input-bordered w-full  focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="text-md font-semibold uppercase">Status</span>
          <select
            className="select select-bordered w-full "
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value={true}>In</option>
            <option value={false}>Out</option>
          </select>
          <span className="text-md font-semibold uppercase">Owner Address</span>
          <input
            type="text"
            placeholder="Owner Address"
            className="input input-bordered w-full  focus:outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="w-full">
            <span className="text-md font-semibold uppercase">Entry Time</span>
            <input
              type="datetime-local"
              placeholder="Entry Time"
              className="input input-bordered w-full  focus:outline-none"
              value={entryTime}
              onChange={(e) => setEntryTime(e.target.value)}
            />
          </div>
          <div className="w-full">
            <span className="text-md font-semibold uppercase">Exit Time</span>
            <input
              type="datetime-local"
              placeholder="Exit Time"
              className="input input-bordered w-full  focus:outline-none"
              value={exitTime}
              onChange={(e) => setExitTime(e.target.value)}
            />
          </div>
          <span className="text-md font-semibold uppercase">
            Parking Charge
          </span>
          <input
            type="text"
            placeholder="Parking Charge"
            className="input input-bordered w-full  focus:outline-none"
            value={parkingCharge}
            onChange={(e) => setParkingCharge(e.target.value)}
          />
        </div>
        <div className="card-footer flex justify-center">
          <button className="btn btn-primary w-48 m-2">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default VehicleForm;
