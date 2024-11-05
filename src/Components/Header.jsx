import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();
  const ActiveStyle = ({ isActive }) =>
    isActive && pathname === "/"
      ? "text-white underline font-bold bg-none"
      : isActive
      ? "text-[#9538E2] font-bold"
      : "";
  const navList = (
    <>
      <li>
        <NavLink to="/" className={ActiveStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className={ActiveStyle}>
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={ActiveStyle}>
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`container w-10/12 mx-auto mt-5 ${
        pathname === "/" ? "absolute left-0 right-0" : ""
      } `}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="gap-6 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow"
            >
              {navList}
            </ul>
          </div>
          <Link
            to="/"
            className={`text-xl font-bold ${
              pathname === "/" ? "text-white" : "text-[#0B0B0B]"
            }`}
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-[#0B0B0BB3] text-base font-semibold">
          <ul className="gap-6 menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end gap-3">
          <button className="border border-[#0B0B0B1A] bg-white text-xl p-2 rounded-full">
            <IoCartOutline />
          </button>
          <button className="border border-[#0B0B0B1A] bg-white text-lg p-2 rounded-full">
            <IoIosHeartEmpty />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
