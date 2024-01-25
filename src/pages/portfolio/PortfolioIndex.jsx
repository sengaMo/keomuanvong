import React from "react";

export const portfolio = [
  {
    id: 1,
    title: "Web Application",
    description: "In Progress",
  },
  {
    id: 2,
    title: "Web Application",
    description: "In Progress",
  },
  {
    id: 3,
    title: "Web Application",
    description: "In Progress",
  },
];

const PortfolioIndex = () => {
  return (
    <section id="portfolio">
      <div className="flex flex-col mb-10">
        <div className="flex p-4 phone:ml-[160px]">
          <div className="flex flex-col mt-6 phone:mt-10">
            <h1 className="font-bold text-4xl">Portfolio</h1>
            <p className="text-sm font-bold">My Project</p>
          </div>
        </div>
        <div className="flex ml-20 p-4 phone:ml-[160px]">
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-4">
              {portfolio.map((item) => {
                return (
                  <>
                    <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 mt-4 bg-sky-50">
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{item.title}</div>
                        <p class="text-gray-700 text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioIndex;
