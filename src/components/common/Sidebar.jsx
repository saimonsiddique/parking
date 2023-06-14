import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="flex flex-col w-64 bg-white shadow-md h-screen">
        <nav className="flex-grow">
          <ul className="space-y-6 px-4 text-lg">
            <li>
              <Link to={"/"} className="text-[#49515d] hover:bg-gray-200">
                <div className="flex items-center gap-2">
                  <BiHome size={18} />
                  Dashboard
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
