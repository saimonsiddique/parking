import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleTrack from "./pages/VehicleTrack";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VehicleTrack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
