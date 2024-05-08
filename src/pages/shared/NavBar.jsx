import { Link, NavLink } from "react-router-dom";
import image from "../../assets/icons/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar rounded-b-md px-6 mt-8">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold " : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold " : "font-bold"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold " : "font-bold"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold " : "font-bold"
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold " : "font-bold"
              }
            >
              Contact
            </NavLink>
            {
            user?.email&& <Link to = '/bookings' >Bookings</Link>
          }
          </ul>
        </div>
        <Link to="/">
          <img className="w-20" src={image} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#23BE0A] font-bold " : "font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#23BE0A] font-bold " : "font-bold"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services "
            className={({ isActive }) =>
              isActive ? "text-[#23BE0A] font-bold " : "font-bold"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-[#23BE0A] font-bold " : "font-bold"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#23BE0A] font-bold " : "font-bold"
            }
          >
            Contact
          </NavLink>
          {
            user?.email&& <Link to = '/bookings' >Bookings</Link>
          }
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <>
            <button onClick={handelLogout}>LogOut</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <button className="btn btn-warning btn-outline ml-3">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default NavBar;
