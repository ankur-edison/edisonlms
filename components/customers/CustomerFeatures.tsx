import React from "react";
import Image from "next/image";

function CustomerFeatures() {
  return (
    <div className="my-24">
      <h1 className="text-center text-3xl	font-bold mt-8 mb-16">
        Attract more visitors, convert more customers, <br /> and engage better
        with EdisonOS
      </h1>
      <div className="flex items-center justify-evenly max-sm:flex-col max-sm:gap-8">
        <div>
          <h6 className="mb-4 font-semibold">Live Class Host Manager</h6>
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/63970a7c0f9ad62ed9d5b262_Group%201386.png"
              height={150}
              width={150}
              alt="logo"
            />
          </div>
          <p className="text-gray text-center">
            Less costs on your
            <br />
            zoom licenses
          </p>
        </div>

        <div>
          <h6 className="mb-4 font-semibold">SEO Optimised Builder</h6>
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/63970a7c0f9ad68b13d5b260_Group%201387.png"
              height={150}
              width={150}
              alt="logo"
            />
          </div>
          <p className="text-gray text-center">
            Faster loading of
            <br />
            pages
          </p>
        </div>

        <div>
          <h6 className="mb-4 font-semibold">Community-led Spaces</h6>
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/63970a7c0f9ad69438d5b25e_Group%201388.png"
              height={150}
              width={150}
              alt="logo"
            />
          </div>
          <p className="text-gray text-center">
            More active & engaged
            <br />
            learner base
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerFeatures;
