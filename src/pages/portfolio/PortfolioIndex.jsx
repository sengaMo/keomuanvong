import React from "react";

export const portfolio = [
  {
    id: 1,
    title: "Web Application",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
];

const PortfolioIndex = () => {
  return (
    <section id="portfolio" className="flex p-4">
      <div className="flex flex-col">
        <div className="flex p-4 ml-[160px]">
          <div className="flex flex-col mt-10">
            <h1 className="font-bold text-4xl">Portfolio</h1>
            <p className="text-sm font-bold">My Project</p>
          </div>
        </div>
        <div className="flex p-4 ml-[160px]">
          <div className="flex flex-col ">
            <div className="flex flex-wrap gap-4">
              <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
                {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">Web Application</div>
                  <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
                {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Web Application</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
                {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Web Application</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-10 bg-sky-50">
                {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Web Application</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioIndex;
