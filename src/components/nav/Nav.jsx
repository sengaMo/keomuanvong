import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Service",
      url: "/service",
    },
    {
      title: "Resume",
      url: "/resume",
    },
    {
      title: "Work",
      url: "/work",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  const localtion = useLocation();
  const pathname = localtion.pathname;

  return (
    <nav className="flex gap-8">
      {navItems.map((item, index) => {
        return (
          <Link
            to={item.url}
            key={index}
            className={`${
              item.url === pathname &&
              "text-custom-600 border-b-2 border-emerald-500"
            } capitalize font-medium text-custom-600 transition-all duration-300 ease-in-out`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
