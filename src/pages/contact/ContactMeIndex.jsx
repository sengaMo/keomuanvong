import React from "react";

const ContactMeIndex = () => {
  return (
    <>
      <section id="contact">
        <div className="flex justify-center mt-[200px] w-full">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl text-center">Contact Me</h1>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div className="flex flex-wrap justify-center mt-10 gap-4">
              <div className="flex flex-col w-80">
                <label className="text-sm">Full Name:</label>
                <input
                  type="text"
                  className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                />
              </div>
              <div className="flex flex-col w-80">
                <label className="text-sm">Full Name:</label>

                <input
                  type="text"
                  className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-4 gap-4">
              <div className="flex flex-col w-80">
                <label className="text-sm">Email:</label>
                <input
                  type="text"
                  className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                />
              </div>
              <div className="flex flex-col w-80">
                <label className="text-sm">Phone Number:</label>

                <input
                  type="text"
                  className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-4 gap-4">
              <div className="flex flex-col w-[650px]">
                <label className="text-sm">Choose Project:</label>
                <input
                  type="text"
                  className="text-sm border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-4 gap-4">
              <div className="flex flex-col w-[650px]">
                <label className="text-sm">Description:</label>
                <textarea
                  type="text"
                  className="text-sm border border-gray-300 p-10 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-4 gap-4">
              <div className="flex flex-col w-[650px]">
                <button className=" bg-gradient-to-b from-emerald-500 to-emerald-700 hover:shadow-md text-white font-bold py-2 px-4 rounded-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMeIndex;
