import React, { useState, useEffect } from "react";
import { pricingDropdownData } from "./data";
import Image from "next/image";

function PricingDropdown() {
  const [toggle, setToggle] = useState("Yearly");
  const [dataLength, setDataLength] = useState(false);

  // useEffect(() => {
  //   setData(pricingDropdownData.slice(0, dataLength));
  // }, [dataLength]);

  return (
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
      {pricingDropdownData.map((eachPlan, key) => (
        // <div className="mb-8" key={key}>
        //   {eachPlan
        //     .slice(0, dataLength ? pricingDropdownData[0].length : 8)
        //     .map((item, i) => (
        //       <div
        //         className="flex justify-between border border-[#ddd] p-2"
        //         key={i}
        //       >
        //         <h1 className={item.class}>{item.title}</h1>
        //         <h1 className={item.class}>
        //           {item.value === "Yes" ? (
        //             <Image
        //               src="/tick.png"
        //               height={16}
        //               width={16}
        //               alt="tick"
        //               className="mt-1"
        //             />
        //           ) : item.value === "No" ? (
        //             <Image
        //               src="/cancel.png"
        //               height={16}
        //               width={16}
        //               alt="cancel"
        //               className="mt-1"
        //             />
        //           ) : (
        //             <h1 className="">{item.value}</h1>
        //           )}
        //         </h1>
        //       </div>
        //     ))}
        //   <button
        //     onClick={() => setDataLength(!dataLength)}
        //     className="w-full bg-steelBlue text-center text-white text-lg p-2 "
        //   >
        //     {dataLength ? "Show Less" : "Show More"}
        //   </button>
        // </div>
        <EachDropdown eachPlan={eachPlan} index={key} />
      ))}
    </div>
  );
}

interface IProps {
  eachPlan: any;
  index: number;
}

function EachDropdown(props: IProps) {
  const { eachPlan, index } = props;
  const [dataLength, setDataLength] = useState(false);
  return (
    <div className="mb-8" key={index}>
      {eachPlan
        .slice(0, dataLength ? pricingDropdownData[0].length : 8)
        .map((item: any, i: number) => (
          <div
            className="flex justify-between border border-[#ddd] p-2"
            key={i}
          >
            <h1 className={item.class}>{item.title}</h1>
            <h1 className={item.class}>
              {item.value === "Yes" ? (
                <Image
                  src="/tick.png"
                  height={16}
                  width={16}
                  alt="tick"
                  className="mt-1"
                />
              ) : item.value === "No" ? (
                <Image
                  src="/cancel.png"
                  height={16}
                  width={16}
                  alt="cancel"
                  className="mt-1"
                />
              ) : (
                <h1 className="">{item.value}</h1>
              )}
            </h1>
          </div>
        ))}
      <button
        onClick={() => setDataLength(!dataLength)}
        className="w-full bg-steelBlue text-center text-white text-lg p-2 "
      >
        {dataLength ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default PricingDropdown;
