import React from "react";
import Layout from "../components/common/Layout";
import VehicleForm from "../components/VehicleForm";

function EditVehicleInfo() {
  return (
    <Layout>
      <div className="w-[80vw] mt-5 ml-5">
        <VehicleForm />
      </div>
    </Layout>
  );
}

export default EditVehicleInfo;
