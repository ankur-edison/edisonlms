import React, { useState } from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { manageToggleData, manageImagesData } from "./data";

function Manage() {
  const [toggle, setToggle] = useState("Analytics & Reporting");
  return (
    <div className="max-md:px-5 max-md:h-auto max-md:pb-16 py-16">
      <div className="flex gap-4 justify-center my-5">
        <Image src="/manage.png" height={32} width={32} alt="wrench" />
        <h1 className="font-bold text-md text-white">Manage</h1>
      </div>
      <h2 className="text-center text-3xl font-bold text-white">
        Integrate. Automate.
        <br />
        Analyse.
      </h2>
      <p className="text-gray text-center text-md mt-3">
        <Balancer>
          Automate complex business operations.
          <br /> Track KPIs to derive actionable insights.
        </Balancer>
      </p>
      {/* <div className="grid grid-cols-[1fr,1.75fr] items-center mt-16 gap-8 max-lg:mt-8 max-md:grid-cols-1 "> */}
      <div className="flex min-2xl:items-center mt-16 gap-8 max-lg:mt-8 max-md:flex-col">
        <div className="max-md:flex max-md:overflow-auto">
          <div className="max-md:flex max-md:flex-1">
            {manageToggleData.map((item, key) => (
              <div
                key={key}
                onClick={() => setToggle(item.name)}
                className={`${
                  item.name == toggle ? "bg-fadedLightBlack" : ""
                } cursor-pointer px-3 py-8 hover:bg-fadedLightBlack max-md:w-max`}
              >
                <div className="flex gap-2 mb-2">
                  <Image src={item.src} height={30} width={30} alt="icons" />
                  <h1 className={item.class}>{item.name}</h1>
                </div>
                <p className="text-white">{item.descOne}</p>
                <p className="text-white">{item.descTwo}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          {manageImagesData
            .filter((item) => item.filter == toggle)
            .map((feature, key) => (
              <div className="w-full flex-grow-1 max-md:h-full" key={key}>
                <Image
                  src={feature.src}
                  height={100}
                  width={100}
                  alt="features"
                  className="w-full"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Manage;
