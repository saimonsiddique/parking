import { useEffect } from "react";
import { useState } from "react";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

function VehicleInfoTable() {
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const vehicles = JSON.parse(localStorage.getItem("vehicles"));
    setVehicleInfo(vehicles);
  }, []);

  const handleEdit = (license) => {
    navigate(`/edit/${license}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-pin-cols table-zebra">
        <thead className="text-lg">
          <tr>
            <th>Owner Name</th>
            <th>Vehicle Type</th>
            <th>License Number</th>
            <th>Entry Time</th>
            <th>Exit Time</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {vehicleInfo?.map((vehicle) => (
            <tr key={vehicle?.license}>
              <td>{vehicle?.ownerName}</td>
              <td>{vehicle?.type}</td>
              <td>{vehicle?.license}</td>
              <td>
                {moment(vehicle?.entryTime).format("DD-MM-YYYY hh:mm:ss A")}
              </td>
              <td>
                {vehicle?.exitTime
                  ? moment(vehicle?.exitTime).format("DD-MM-YYYY hh:mm:ss A")
                  : "Not Exited"}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleEdit(vehicle?.license)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleInfoTable;
