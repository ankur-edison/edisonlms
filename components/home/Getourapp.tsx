import React from "react";
import Image from "next/image";

function Getourapp() {
  return (
    <div className="flex items-center justify-evenly py-10 mb-10 max-sm:flex-col gap-4 max-sm:gap-12">
      <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center ">
        <Image
          src="https://uploads-ssl.webflow.com/62d6876535c5c7559909754c/635a4ae54b79fbc362d5d74f_Mobile%20app%20illus.png"
          alt="appimg"
          height={100}
          width={100}
          className="w-64 h-full"
        />
        <h3 className="text-3xl font-bold mt-4 max-sm:text-center">
          Get your own mobile apps <br /> on Android & iOS
        </h3>
        <p className="text-gray text-md my-3">
          EdisonLMS lets your learners have an <br />
          exceptional mobile learning experience.
        </p>
        <div className="mt-8">
          <a
            href="https://www.edisonos.com/talk-to-sales"
            className="bg-gradient-to-b from-gradientBlueStart to-gradientBlueStop  hover:from-gradientHoverBlue hover:to-gradientHoverBlueStop text-white px-5 py-4 text-md font-semibold rounded tracking-wider"
          >
            Schedule a demo
          </a>
        </div>
      </div>
      <div>
        <Image
          src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/63970822ede3390ef3f72157_mobile-app_finalversion.gif"
          alt="app-gif"
          height={100}
          width={100}
          className="h-full w-72"
        />
      </div>
    </div>
  );
}

export default Getourapp;
