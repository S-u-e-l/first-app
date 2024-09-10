import React, { useState } from "react";
import { navlinks } from "../constants";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex py-8 bg-black">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-white text-2xl font-bold">First App</h1>
        </div>
        <div>
          <ul className="hidden md:flex items-center space-x-4">
            {navlinks.map((nav) => {
              return (
                <li>
                  <Link to={nav.path} className="text-white">
                    {nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* icons here */}
          <div className="md:hidden">
            {open ? (
              <Icon.X onClick={()=>setOpen(!open)} size={35} color="white"/>
            ) : (
              <Icon.Menu onClick={()=>setOpen(!open)} size={35} color="white"/>
            )}
          </div>
          {open && (
            <div className="absolute right-5 bg-black top-20 w-32 rounded-b-md">
              <ul className="md:hidden flex flex-col items-center py-4">
                {navlinks.map((nav) => {
                  return (
                    <li>
                      <Link to={nav.path} className="text-white">
                        {nav.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
