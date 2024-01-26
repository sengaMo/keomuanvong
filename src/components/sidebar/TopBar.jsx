import React from "react";
import { Link } from "react-scroll";
import myLogo from "../../assets/mylogo.png";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const TopBar = () => {
  const [navActive, setNavActive] = React.useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  });

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const Links = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Portfolio",
      link: "portfolio",
    },
    {
      name: "About Me",
      link: "about",
    },
    {
      name: "Employers FeedBack",
      link: "feedback",
    },
    {
      name: "Contact Me",
      link: "contact",
    },
  ];
  return (
    <>
      <div
        className={`${
          navActive ? "shadow-md w-full fixed top-0 left-0" : null
        }`}
      >
        <div className="phone:flex item-center justify-between bg-white py-4 phone:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex item-center text-gray-800">
            <img src={myLogo} alt="logo" className="w-40" />
          </div>
          <div
            onClick={() => setNavActive(!navActive)}
            className=" transition-all duration-500 ease-in"
          >
            {navActive ? (
              <IoIosClose className="text-3xl fixed right-16 top-8 cursor-pointer phone:hidden" />
            ) : (
              <IoMenu className="text-3xl fixed right-16 top-8 cursor-pointer phone:hidden" />
            )}
          </div>
          <ul
            className={`phone:flex phone:items-center phone:pb-0 absolute phone:static bg-white phone:z-auto z-[-1] left-0 w-full phone:w-auto phone:pl-0 pl-9 transistion-all duration-500
          ease-in ${
            navActive ? "top-20 opacity-100" : "top-[490px"
          } phone:opacity-100 opacity-0`}
          >
            {Links.map((value) => (
              <li
                key={value.name}
                className="phone:ml-8 text-sm phone:text-base phone:my-0 my-7 "
              >
                <Link
                  to={value.link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900}
                  className="text-sky-800 font-bold cursor-pointer hover:border-l hover:border-b hover:border-sky-500 duration-500 p-2 rounded-md"
                >
                  {value.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <nav
        className={
          navActive
            ? "shadow-md fixed w-full transition-all duration-300 ease-in-out bg-white"
            : ""
        }
      >
        <div className="p-4 shadow-md">
          <div className="flex">
            <div className="flex justify-between">
              <div className="flex justify-center">
                <img src={myLogo} alt="logo" className="w-40" />
              </div>
              <div className="">
                <Link
                  to={"home"}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={900}
                  className="px-4 text-sky-600 rounded-md cursor-pointer text-xs phone:text-sm font-bold transition-all duration-300 ease-in-out"
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
                  className="px-4 text-sky-600 rounded-md cursor-pointer text-xs phone:text-sm font-bold transition-all duration-300 ease-in-out"
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
                  className="px-4 text-sky-600 rounded-md cursor-pointer text-xs phone:text-sm font-bold transition-all duration-300 ease-in-out"
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
                  className="px-4 text-sky-600 rounded-md cursor-pointer text-xs phone:text-sm font-bold transition-all duration-300 ease-in-out"
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
                  className="px-4 text-sky-600 rounded-md cursor-pointer text-xs phone:text-sm font-bold transition-all duration-300 ease-in-out"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default TopBar;
