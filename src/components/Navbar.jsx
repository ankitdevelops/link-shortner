import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 my-3 ">
      <div className="navbar-start">
        <a className=" normal-case text-xl" href="sd">
          <img
            src="https://docrdsfx76ssb.cloudfront.net/static/1680205903/pages/wp-content/uploads/2021/08/bitly_logo.svg"
            alt="logo"
            className="h-16 w-auto mx-auto"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a href="sdf">Why Bitly?</a>
            <ul className="p-2">
              <li>
                <a href="sdf">Submenu 1</a>
              </li>
              <li>
                <a href="sdf">Submenu 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a href="sdf">Products</a>
            <ul className="p-2">
              <li>
                <a href="sdf">Submenu 1</a>
              </li>
              <li>
                <a href="sdf">Submenu 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a href="sdf">Pricing</a>
            <ul className="p-2">
              <li>
                <a href="sdf">Submenu 1</a>
              </li>
              <li>
                <a href="sdf">Submenu 2</a>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <a href="sdf">Resources</a>
            <ul className="p-2">
              <li>
                <a href="sdf">Submenu 1</a>
              </li>
              <li>
                <a href="sdf">Submenu 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="sm:visible invisible" href="%">
          Login
        </a>
        <a className="mx-3 sm:visible invisible" href="%">
          Sign Up
        </a>
        <a
          className="btn bg-[#0236b9] hover:bg-[#032e99] border-none sm:visible invisible"
          href="%"
        >
          Get a Quote
        </a>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost sm:invisible ">
            <div className="w-10 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between" href="sdf">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="sdf">Settings</a>
            </li>
            <li>
              <a href="sdf">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
