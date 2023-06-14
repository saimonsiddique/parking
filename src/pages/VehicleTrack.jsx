import VehicleForm from "../components/VehicleForm";
import Layout from "../components/common/Layout";

function VehicleTrack() {
  return (
    <Layout>
      <div className="w-[40vw] m-auto mt-2">
        <VehicleForm />
      </div>
    </Layout>
  );
}

export default VehicleTrack;
