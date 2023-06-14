import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="flex-[0.1]">
          <Sidebar />
        </div>
        <div className="flex-[0.9]">{children}</div>
      </div>
    </>
  );
}

export default Layout;
