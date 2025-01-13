import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-sky-200 lg:px-10 lg:w-11/12 mx-auto rounded-sm fixed z-10 bg-opacity-80">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <NavLink to="/" className="text-base text-sky-600 font-bold">Home</NavLink>
          <NavLink to="about" className="text-base text-sky-600 font-bold">About</NavLink>
          <NavLink to="contact" className="text-base text-sky-600 font-bold">Contact</NavLink>
          <NavLink to="skill" className="text-base text-sky-600 font-bold">skill</NavLink>
        </ul>
      </div>
      <a className="text-xl">
        <img src="https://img.icons8.com/?size=64&id=J3nZHWgT1e7m&format=png" alt="" />
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <NavLink to="/" className="text-lg text-sky-600 mr-6 font-bold">Home</NavLink>
      <NavLink to="about" className="text-lg text-sky-600 mr-6 font-bold">About</NavLink>
          <NavLink to="contact" className="text-lg text-sky-600 mr-6 font-bold">Contact</NavLink>
          <NavLink to="skill" className="text-lg text-sky-600 mr-6 font-bold">skill</NavLink>
      </ul>
    </div>
    <div className="navbar-end">
    <a href="/public/resume.pdf" download className="btn bg-blue-100 text-sky-600 border-2 border-blue-500"><img className="w-8" src="https://img.icons8.com/?size=48&id=VGQlJM067vkN&format=png"/> Resume</a>
    </div>
  </div>
    );
};

export default Navbar;