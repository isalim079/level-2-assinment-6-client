"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import { CgMenu } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="overflow-hidden absolute z-30 bg-primary-white/70 w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar py-2 max-w-screen-xl justify-between">
          <div className="navbar-start justify-between lg:justify-start  ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <CgMenu className="text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <div>
              <Link href={'/'}>
              <Image
                src={logo}
                alt="logo"
                className="lg:w-14 w-16 mr-4 lg:mr-0"
              />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">
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
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className=" hidden lg:block">
            <Link href={'/login'}>
            <button className="bg-dark-green text-primary-white px-4 py-2 rounded-md shadow-sm">
              Login
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
