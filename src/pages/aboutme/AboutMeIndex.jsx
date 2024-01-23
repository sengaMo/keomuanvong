import React from "react";
import momo from "../../assets/sengathith.jpeg";
const AboutMeIndex = () => {
  return (
    <section id="about">
      <div className="flex p-4 bg-emerald-50">
        <div className="grows flex justify-center w-full">
          <div className="flex mt-[100px]">
            <img className="w-[340px] h-60 rounded-md" src={momo} alt="hero" />
          </div>
        </div>
        <div className="grows flex justify-center w-full">
          <div className="flex flex-col p-10 mt-10">
            <h className="font-bold text-6xl mt-4">About Me</h>
            <div className="w-1/2 mt-4">
              <p className="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum, quas. Amet soluta assumenda cum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeIndex;
