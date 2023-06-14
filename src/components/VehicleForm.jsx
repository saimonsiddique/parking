import { useState } from "react";

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
    if (localStorage.getItem("vehicles")) {
      const vehicles = JSON.parse(localStorage.getItem("vehicles"));
      vehicles.push(newVehicle);
      localStorage.setItem("vehicles", JSON.stringify(vehicles));
    } else {
      const vehicles = [newVehicle];
      localStorage.setItem("vehicles", JSON.stringify(vehicles));
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
            className="input input-bordered w-full max-w-xs focus:outline-none"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />
          <span className="text-md font-semibold uppercase">vehicle Type</span>
          <select
            className="select select-bordered w-full max-w-xs"
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
            className="input input-bordered w-full max-w-xs focus:outline-none"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <span className="text-md font-semibold uppercase">
            Owner Phone Number
          </span>
          <input
            type="text"
            placeholder="Owner Phone Number"
            className="input input-bordered w-full max-w-xs focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="text-md font-semibold uppercase">Status</span>
          <select
            className="select select-bordered w-full max-w-xs"
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
            className="input input-bordered w-full max-w-xs focus:outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="w-96">
            <span className="text-md font-semibold uppercase">Entry Time</span>
            <input
              type="datetime-local"
              placeholder="Entry Time"
              className="input input-bordered w-full max-w-xs focus:outline-none"
              value={entryTime}
              onChange={(e) => setEntryTime(e.target.value)}
            />
          </div>
          <div className="w-96">
            <span className="text-md font-semibold uppercase">Exit Time</span>
            <input
              type="datetime-local"
              placeholder="Exit Time"
              className="input input-bordered w-full max-w-xs focus:outline-none"
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
            className="input input-bordered w-full max-w-xs focus:outline-none"
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
