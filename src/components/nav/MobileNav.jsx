import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Transition } from "@headlessui/react";
import MbMenuTransistion from "./menu/MbMenuTransistion";

const MobileNav = () => {
  const [openSide, setOpenSide] = useState(false);

  const handleOpenSide = () => {
    setOpenSide(localStorage.setItem("open", true));
    const open = localStorage.getItem("open");
    if (open) {
      setOpenSide(true);
      var blur = document.getElementById("main");
      blur.classList.add("filter", "blur");
    }
    if (window.onclick) {
      setOpenSide(false);
    }
  };

  const handleCloseSide = () => {
    const check = localStorage.getItem("open", true);
    if (check) {
      localStorage.setItem("open", false);
      setOpenSide(false);
    }
    var blur = document.getElementById("main");
    blur.classList.remove("filter", "blur");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleOpenSide}
          className={`${openSide == true ? "hidden" : ""}`}
        >
          <IoMdMenu className="text-3xl" />
        </button>
      </div>

      <Transition
        show={openSide}
        enter="transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <MbMenuTransistion open={openSide} close={handleCloseSide} />
      </Transition>
    </>
  );
};

export default MobileNav;
