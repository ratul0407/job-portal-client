import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logoImg from "../../assets/logo.png";
function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/myApplications">My applications</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <figure className="items-center gap-2 flex">
              <img className="w-12 h-12" src={logoImg} alt="" />
              <span>Job Portal</span>
            </figure>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <>
              <button
                onClick={() => signOutUser()}
                className="btn bg-blue-500 text-white hover:bg-blue-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              {" "}
              <Link to="/register" className="btn">
                Register
              </Link>
              <Link to="/sign-in" className="btn btn-primary">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
