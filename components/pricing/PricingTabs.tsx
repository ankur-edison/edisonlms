import React, { useState } from "react";
import Image from "next/image";
import { pricingHeadingData, priceListData } from "./data";

function PricingTabs() {
  const [toggle, setToggle] = useState("Yearly");
  return (
    <React.Fragment>
      <div className="mt-16">
        <h1 className="text-center text-heading font-bold leading-heading max-sm:text-3xl	max-sm:leading-8">
          Find a suitable plan
        </h1>
        <p className="text-gray text-center text-xl mt-4 leading-8 max-sm:text-base max-sm:leading-6">
          Simple, transparent pricing that scales with your usage and needs
        </p>
      </div>
      <div className="mb-48 mt-16">
        <div className="flex justify-center items-center mb-16">
          <a
            className={`${
              toggle === "Monthly"
                ? "px-5 py-3 bg-[#fff] text-fadedBlack"
                : "px-5 py-3 bg-black text-white "
            } border border-1 border-[#222] cursor-pointer font-medium`}
            onClick={(e) => setToggle("Monthly")}
          >
            Monthly
          </a>
          <a
            className={`${
              toggle === "Yearly"
                ? " px-5 py-3 bg-[#fff] text-fadedBlack"
                : "px-5 py-3 bg-black text-white"
            } border border-1 border-[#222] cursor-pointer font-medium`}
            onClick={(e) => setToggle("Yearly")}
          >
            Yearly
          </a>
        </div>
        <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr]">
          {pricingHeadingData.map((item, key) => (
            <div className="border border-[#ddd] px-2 py-2" key={key}>
              <h1 className="text-lg font-bold">{item.name}</h1>
              <h3 className="text-2xl text-steelBlue font-bold">
                {toggle == "Yearly" ? item.dollarYearly : item.dollarMonthly}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] justify-center">
          {priceListData.map((item, key) => (
            <div
              className={`${
                Math.trunc(key / 4) % 2 == 0 ? "bg-[#f0f0f0]" : ""
              } border border-[#ddd] px-2 py-2`}
              key={key}
            >
              {item.text === "Yes" ? (
                <Image
                  src="/tick.png"
                  height={16}
                  width={16}
                  alt="tick"
                  className="mt-1"
                />
              ) : item.text === "No" ? (
                <Image
                  src="/cancel.png"
                  height={16}
                  width={16}
                  alt="cancel"
                  className="mt-1"
                />
              ) : (
                <h1 className="">{item.text}</h1>
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PricingTabs;
