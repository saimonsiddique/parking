import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="flex flex-col w-64 bg-white shadow-md h-screen">
        <nav className="flex-grow mt-12">
          <ul className="space-y-6 px-4 text-lg">
            <li>
              <Link to={"/"} className="text-[#49515d] hover:bg-gray-200">
                <div className="flex items-center gap-2">
                  <BiHome size={18} />
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link
                to={"/vehicle-info"}
                className="text-[#49515d] hover:bg-gray-200"
              >
                <div className="flex items-center gap-2">
                  <BiHome size={18} />
                  Vehicle Info
                </div>
              </Link>
            </li>
            <li>
              <Link
                to={"/add-vehicle"}
                className="text-[#49515d] hover:bg-gray-200"
              >
                <div className="flex items-center gap-2">
                  <BiHome size={18} />
                  Add Vehicle
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
