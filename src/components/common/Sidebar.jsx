import { BiHome } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="flex flex-col w-72 bg-white shadow-md h-screen">
        <nav className="flex-grow m-auto mt-28">
          <ul className="space-y-6 px-4 text-lg">
            <li>
              <Link to={"/"} className="text-[#49515d] hover:bg-gray-200">
                <div className="flex items-center gap-2 text-3xl">
                  <BiHome size={28} />
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link
                to={"/vehicle-info"}
                className="text-[#49515d] hover:bg-gray-200"
              >
                <div className="flex items-center gap-2 text-3xl">
                  <BsFillCarFrontFill size={28} />
                  Vehicle Info
                </div>
              </Link>
            </li>
            <li>
              <Link
                to={"/add-vehicle"}
                className="text-[#49515d] hover:bg-gray-200"
              >
                <div className="flex items-center gap-2 text-3xl">
                  <RiAddFill size={28} />
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
