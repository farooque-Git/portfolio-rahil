import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [navIcon, setNavIcon] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "project",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex bg-black justify-between items-center w-full h-14 px-4 fixed">
      <div>
        <h1 className="text-slate-400 hover:text-sky-400 font-bold ml-10 p-2 text-xl">
          Portfolio
        </h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium text-gray-500 hover:text-cyan-400 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNavIcon(!navIcon)}
        className="cursor-pointer pr-4 z-10 text-gray-500 mt-3 md:hidden "
      >
        {navIcon ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* fobar click event */}

      {navIcon && (
        <ul
          className="flex flex-col justify-center items-center absolute 
        top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800
         text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNavIcon(!navIcon)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
