import React from "react";
import momo from "../../assets/sengathith.jpeg";
const AboutMeIndex = () => {
  return (
    <section id="about">
      <div className="flex p-4 bg-emerald-50">
        <div className="grows flex justify-center w-full">
          <div className="flex mt-[80px] mb-20">
            <img className="w-[340px] h-60 rounded-md" src={momo} alt="hero" />
          </div>
        </div>
        <div className="grows flex justify-center w-full">
          <div className="flex flex-col p-10 mt-10">
            <h className="font-bold text-6xl mt-4">About Me</h>
            <div className="w-[800px] mt-4">
              <p className="text-sm">
                I am passionate about my work. Because I love what I do, I have
                a steady source of motivation that drives me to do my best. In
                my last job, this passion led me to challenge myself daily and
                learn new skills that helped me to do better work. For example,
                I taught myself how to programming. I soon became to know, it's
                to late to return.
                <br />
                01010100 01101000 01100001 01101110 01101011 00100000 01111001
                01101111 01110101 00100001 00101110 00100000 01100110 01101111
                01110010 00100000 01111001 01101111 01110101 01110010 00100000
                01110100 01101001 01101101 01100101 01110011 00101110.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeIndex;
