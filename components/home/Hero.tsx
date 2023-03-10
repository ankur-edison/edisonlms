import React from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Clientele from "./Clientele";

function Hero() {
  return (
    <>
      <div className="pt-28 pb-20 flex items-center justify-center flex-col gap-8 max-sm:pt-14">
        <div>
          <h1 className="text-center text-heading font-bold leading-heading max-sm:text-3xl	max-sm:leading-8">
            <Balancer>
              The Learning Management System that brings actual outcomes
            </Balancer>
          </h1>
          <p className="text-gray text-center text-xl mt-4 leading-8 max-sm:text-base max-sm:leading-6">
            <Balancer>
              Make education more engaging. You can have all of your essential
              authoring tools and social <br />
              learning in one place.
            </Balancer>
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-5 max-sm:flex-col ">
          <a
            href="https://app.edisonos.com"
            className="bg-gradient-to-b from-gradientBlueStart to-gradientBlueStop  hover:from-gradientHoverBlue hover:to-gradientHoverBlueStop text-white px-5 py-4 text-md font-semibold rounded leading-snug	text-center"
          >
            Start Free Trial
          </a>
          <a
            href=""
            className="bg-gradient-to-b hover:from-gradientBlueStart hover:to-gradientBlueStop text-steelBlue hover:text-white px-5 py-4 text-md font-semibold rounded border-2 border-steelBlue tracking-wider	"
          >
            Talk To LMS Expert
          </a>
        </div>
        <div className="flex gap-2 max-sm:flex-col items-center">
          <div className="flex gap-1 ">
            <Image src="/check.png" alt="check" height={12} width={12} />
            <div className="text-xs font-medium ">No credit card required</div>
          </div>
          <div className="flex gap-1">
            <Image src="/check.png" alt="check" height={12} width={12} />
            <div className="text-xs font-medium">Free for 30 days</div>
          </div>
          <div className="flex gap-1">
            <Image src="/check.png" alt="check" height={12} width={12} />
            <div className="text-xs font-medium">0% Revenue Fees</div>
          </div>
        </div>
      </div>

      <Clientele />
    </>
  );
}

export default Hero;
