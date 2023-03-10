import React from "react";
import Image from "next/image";
import { enterpriseData } from "./data";
import PricingCta from "./PricingCta";

function Enterprise() {
  return (
    <React.Fragment>
      <PricingCta />
      <div className="py-36">
        <div></div>
        <div className="mb-12">
          <h1 className="text-heading font-bold leading-heading max-sm:text-3xl	max-sm:leading-8">
            Enterprise
          </h1>
          <p className="text-gray text-xl mt-4 leading-8 max-sm:text-base max-sm:leading-6">
            Get more features, more bandwidth and more users with our Premium
            plan
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
          {enterpriseData.map((item, key) => (
            <div key={key}>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white mb-4">
                <Image src={item.src} height={24} width={24} alt="feature" />
              </div>
              <h1 className="mb-2 font-bold text-xl">{item.title}</h1>
              <p className="text-md text-gray"> {item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Enterprise;
