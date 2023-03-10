import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { testimonialData } from "./data";

function Testimonials() {
  return (
    <>
      <div>
        <h2 className="text-center text-3xl font-bold mt-20">
          Real people. Real results.
        </h2>
        <p className="text-gray text-center text-md mt-5">
          <Balancer>
            When you build on EdisonOS, you’re joining 1000+ serious experts,
            <br />
            entrepreneurs and influencers around the world — you know, people
            like you.
          </Balancer>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 my-10 max-md:grid-cols-2 max-sm:grid-cols-1">
        {testimonialData.map((item, i) => (
          <div className="bg-[#f7f7f7] shadow-custom rounded-xl p-5" key={i}>
            <div className="flex gap-4">
              <Image
                src={item.src}
                alt={item.name}
                height={60}
                width={60}
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg text-fadedBlack font-bold">
                  {item.name}
                </h2>
                <h3 className="text-md text-gray font-semibold">
                  {item.designation}
                </h3>
              </div>
            </div>
            <p className="pt-4 text-gray font-medium ">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Testimonials;
