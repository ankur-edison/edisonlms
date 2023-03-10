import React, { useState } from "react";
import Image from "next/image";
import { togglecategoryData, customerData } from "./data";

function CustomersList() {
  const [filter, setFilter] = useState("B2B Trainings");
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="flex justify-between mt-8 max-sm:flex-wrap max-sm:gap-4">
        {togglecategoryData.map((category, key) => (
          <a
            className={`${
              filter == category.name ? "underline" : ""
            } text-black font-bold font-xl cursor-pointer`}
            key={key}
            onClick={() => {
              setFilter(category.name);
            }}
          >
            {category.name}
          </a>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-8 my-8 max-md:grid-cols-2 max-sm:grid-cols-1">
        {customerData
          .filter((category) => category.filter == filter)
          .map((item, key) => (
            <div key={key}>
              <a href={item.url} className="decoration-none" target="_blank">
                <Image
                  src={item.src}
                  height={100}
                  width={100}
                  alt="categoryImage"
                  className="w-full rounded-md"
                />
              </a>
              <h1 className="text-2xl font-bold my-5">{item.name}</h1>
              <p className="text-sm text-gray font-medium">{item.desc}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default CustomersList;
