import React, { useEffect } from "react";
import { Link } from "react-scroll";

const TopBar = () => {
  const [navActive, setNavActive] = React.useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  });
  return (
    <>
      <nav
        className={
          navActive
            ? "shadow-md fixed w-full transition-all duration-300 ease-in-out bg-white"
            : ""
        }
      >
        <div className="p-4 shadow-md">
          <div className="flex justify-between gap-4 ">
            <div className="flex p-2">
              <p>Logo</p>
            </div>
            <div className="flex gap-4 p-2">
              <Link
                to={"home"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                className="px-4 text-sky-600 rounded-md cursor-pointer text-sm font-bold hover:border-b hover:border-sky-400 transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
              <Link
                to={"portfolio"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                className="px-4 text-sky-600 rounded-md cursor-pointer text-sm font-bold hover:border-b hover:border-sky-400  transition-all duration-300 ease-in-out"
              >
                Portfolio
              </Link>
              <Link
                to={"about"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                className="px-4 text-sky-600 rounded-md cursor-pointer text-sm font-bold hover:border-b hover:border-sky-400  transition-all duration-300 ease-in-out"
              >
                About Me
              </Link>
              <Link
                to={"feedback"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                className="px-4 text-sky-600 rounded-md cursor-pointer text-sm font-bold hover:border-b hover:border-sky-400  transition-all duration-300 ease-in-out"
              >
                Employers FeedBack
              </Link>
            </div>
            <div className="flex">
              <Link
                to={"contact"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                className="bg-sky-700 px-4 cursor-pointer rounded-md p-2"
              >
                <p className="text-sm font-bold text-white">Contact Me</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
