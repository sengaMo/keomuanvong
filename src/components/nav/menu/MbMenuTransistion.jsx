import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
// import * as SheetPrimitive from "@radix-ui/react-dialog";
// import { cva } from "class-variance-authority";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Service",
    url: "/service",
  },
  {
    id: 3,
    title: "Resume",
    url: "/resume",
  },
  {
    id: 4,
    title: "Work",
    url: "/work",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const MbMenuTransistion = forwardRef(({ open, close }, ref) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Transition
      enter="transition ease-in-out duration-300"
      enterFrom="-translate-x-full "
      enterTo="translate-y-0 "
      leave="transition ease-in-out duration-300"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div
        className={`${`w-screen h-screen bg-custom-800 gap-4 text-white fixed top-0 left-0 z-50 filter drop-shadow-2xl`} `}
        ref={ref}
      >
        <div className="flex justify-between items-center p-4">
          <button onClick={close}>Image</button>
          <button onClick={close}>Close</button>
        </div>

        <div className="flex flex-col gap-4 text-center">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className={`${
                pathname == link.url &&
                "text-white border-b-2 border-emerald-500"
              } capitalize font-medium text-sm text-white transition-all duration-300 ease-in-out`}
            >
              {link.title}
            </Link>
          ))}
          <button className="button-primary rounded-md px-2 text-base">
            Hire Me
          </button>
        </div>
      </div>
    </Transition>
  );
});

export default MbMenuTransistion;
