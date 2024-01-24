import React from "react";
import { Link } from "react-scroll";
import myLogo from "../../assets/mylogo.png";

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
          <div className="flex justify-between content-center">
            <div className="flex">
              <img src={myLogo} alt="logo" className="w-40" />
            </div>
            <div className="flex gap-4">
              <Link
                to={"home"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                className="px-4 text-sky-600 rounded-md mt-6 cursor-pointer text-sm font-bold transition-all duration-300 ease-in-out"
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
                className="px-4 text-sky-600 rounded-md mt-6 cursor-pointer text-sm font-bold transition-all duration-300 ease-in-out"
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
                className="px-4 text-sky-600 rounded-md mt-6 cursor-pointer text-sm font-bold transition-all duration-300 ease-in-out"
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
                className="px-4 text-sky-600 rounded-md mt-6 cursor-pointer text-sm font-bold transition-all duration-300 ease-in-out"
              >
                Employers FeedBack
              </Link>
              <Link
                to={"contact"}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
                className="px-4 text-sky-600 rounded-md mt-6 cursor-pointer text-sm font-bold transition-all duration-300 ease-in-out"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
