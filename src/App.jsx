import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleTrack from "./pages/VehicleTrack";
import VehicleInfo from "./pages/VehicleInfo";
import Dashboad from "./pages/Dashboad";
import EditVehicleInfo from "./pages/EditVehicleInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboad />} />
        <Route path="/vehicle-info" element={<VehicleInfo />} />
        <Route path="/add-vehicle" element={<VehicleTrack />} />
        <Route path="/edit/:id" element={<EditVehicleInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
