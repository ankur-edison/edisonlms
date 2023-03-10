import React from "react";

function PricingCta() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-[800px] h-[260px] rounded-xl shadow-xl max-md:w-full max-md:mx-5 gap-8 bg-white -mt-[120px] max-sm:mx-2 max-sm:py-8">
        <h1 className="text-3xl font-bold mb-4 text-center px-2">
          Create your academy & <br /> choose your plan later
        </h1>
        <div>
          <a
            href="https://app.edisonos.com"
            className="bg-gradient-to-b from-gradientBlueStart to-gradientBlueStop  hover:from-gradientHoverBlue hover:to-gradientHoverBlueStop text-white px-5 py-4 text-md font-semibold rounded leading-snug	text-center"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  );
}

export default PricingCta;
