import React from "react";
import mylogo from "../../assets/mylogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Swal from "sweetalert2";

const FooterIndex = () => {
  const handleOnClick = () => {
    Swal.fire({
      title: "Thank you for your interested!",
      text: "You are not permitted to get the link yet.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  let linkedin = "https://www.linkedin.com/in/sengathith-keomuanvong-8ab4b2219";
  const handleOnClickLinkedin = () => {
    window.open(linkedin);
  };

  return (
    <>
      <section id="footer">
        <div className="flex p-4 w-full mt-[200px]">
          <div className="flex flex-col w-full">
            <div className="grow flex">
              <img src={mylogo} alt="logo" className="w-80" />
            </div>
            <div className="border-b border-emerald-600" />
            <div className="grow flex justify-center gap-4 mt-4 p-4">
              <button onClick={handleOnClick}>
                <FaFacebookF className="w-6 h-6 text-sky-700" />
              </button>
              <button onClick={handleOnClickLinkedin}>
                <FaLinkedin className="w-6 h-6 text-sky-700" />
              </button>
            </div>
            <div className="grow flex">
              <p className="text-sm text-gray-400 mt-4">
                &copy; 2024 Sengathith's Portfolio. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterIndex;
