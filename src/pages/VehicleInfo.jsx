import React from "react";
import VehicleInfoTable from "../components/VehicleInfoTable";
import Layout from "../components/common/Layout";

function VehicleInfo() {
  return (
    <Layout>
      <div className="w-[80vw] mt-5 ml-5">
        <VehicleInfoTable />
      </div>
    </Layout>
  );
}

export default VehicleInfo;
