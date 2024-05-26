import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import logo from "../../assets/mylogo.png";
const Header = () => {
  return (
    <header className="py-8 l:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to={"/"} className="flex">
          <img src={logo} alt="logo" className="w-60 rounded-md" />
          {/* <p className="mt-8">Magpie</p> */}
        </Link>
        {/* nav */}
        <div className="hidden xl:flex gap-8">
          <Nav />
          <Link to={"/asdfasd"}>
            <button className="button-primary rounded-md px-2 ">Hire Me</button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
