import React from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

function Build() {
  return (
    <div className="pt-24 py-16">
      <div className="flex gap-4 justify-center mb-5">
        <Image
          src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c4eb77db5721ff53daad_build.png"
          height={24}
          width={24}
          alt="wrench"
        />
        <h1 className="font-bold text-md ">Build</h1>
      </div>
      <h2 className="text-center text-3xl font-bold">
        The Simplest & Powerful Course Builder
      </h2>
      <p className="text-gray text-center text-md mt-3">
        <Balancer>
          Building online courses has never been easier. Create your course in
          minutes with
          <br /> our powerful rich-text editor and launch it immediately
          fuss-free.
        </Balancer>
      </p>

      <div className="grid grid-cols-2 gap-4 pt-10 max-md:grid-cols-1">
        <div className="min-2xl:col-span-2 bg-green p-5 rounded-xl flex justify-center items-start max-sm:flex-col">
          <div className="flex-1 p-5">
            <div className="flex gap-4">
              <Image
                src="/block.png"
                alt="learning-block"
                height={30}
                width={30}
              />
              <h2 className="text-center text-2xl font-bold">
                Learning Blocks
              </h2>
            </div>
            <p className="pt-3 font-medium text-fadedBlack text-md h24">
              Design a seamless learning experience with intuitive,
              <br /> illustrative & interactive content.
            </p>
            <h6 className="py-3 font-medium text-fadedBlack text-lg font-bold">
              Replaces:
            </h6>
            <div className="flex items-start gap-4 pb-5 ">
              <Image
                src="/articulate.png"
                alt="learning-block"
                height={40}
                width={100}
              />
              <Image
                src="/articulate.png"
                alt="learning-block"
                height={40}
                width={100}
              />
            </div>
            <a
              href="app.edisonos.com"
              className="text-white bg-fadedBlack px-5 py-3 rounded hover:text-fadedBlack hover:bg-white hover:border-2 hover:border-fadedBlack text-sm font-medium hover:font-medium"
            >
              {" "}
              Try Our Authoring Tools
            </a>
          </div>
          <div className="flex-1">
            <Image
              src="/learningBlocks.svg"
              alt="learning-block"
              height={100}
              width={100}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="bg-lightBlue p-5 rounded-xl flex flex-col justify-center max-md:flex-row max-sm:flex-col">
          <div className="flex-1 p-5 ">
            <div className="flex gap-4">
              <Image
                src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c4f8c4255cb5b7221e56_video-camera.png"
                alt="learning-block"
                height={30}
                width={30}
              />
              <h2 className="text-center text-2xl font-bold">Live Class</h2>
            </div>
            <p className="pt-3 font-medium text-fadedBlack text-md h-24 max-sm:h-36">
              Conduct secured, instructor-led live classes &
              <br /> personalise the learning environment through live
              interaction.
            </p>
            <h6 className="py-3 font-medium text-fadedBlack text-lg font-bold">
              Enhances:
            </h6>
            <div className="flex items-start gap-4 pb-5 ">
              <Image
                src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c4f8c4255c671e221e5e_gmeet.png"
                alt="learning-block"
                height={40}
                width={100}
              />
              <Image
                src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c4f8c4255c4725221e60_zoom_grey.png"
                alt="learning-block"
                height={40}
                width={100}
              />
            </div>
            <a
              href="app.edisonos.com"
              className="text-white bg-fadedBlack px-5 py-3 rounded hover:text-fadedBlack hover:bg-white hover:border-2 hover:border-fadedBlack text-sm font-medium hover:font-medium"
            >
              {" "}
              Setup Your Live Class
            </a>
          </div>
          <div className="flex-1">
            <Image
              src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c4f8c4255cb1b9221e52_Live%20Class%20PS.svg"
              alt="Live Class"
              height={100}
              width={100}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="bg-yellow p-5 rounded-xl flex flex-col justify-center max-md:flex-row max-sm:flex-col">
          <div className="flex-1 p-5">
            <div className="flex gap-4">
              <Image
                src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c4f8c4255ceb84221e58_checklist.png"
                alt="learning-block"
                height={30}
                width={30}
              />
              <h2 className="text-center text-2xl font-bold">
                Learning Blocks
              </h2>
            </div>
            <p className="pt-3 font-medium text-fadedBlack text-md h-24 max-sm:h-36">
              Develop assessments and mock tests easily. Give students an exam
              experience that mimics the actual test with our easy to use
              builder.
            </p>
            <h6 className="py-3 font-medium text-fadedBlack text-lg font-bold">
              Replaces:
            </h6>
            <div className="flex items-start gap-4 pb-5 ">
              <Image
                src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c4f8c4255c6e14221e62_mettl_grey.png"
                alt="metll"
                height={30}
                width={80}
              />
            </div>
            <a
              href="app.edisonos.com"
              className="text-white bg-fadedBlack px-5 py-3 rounded hover:text-fadedBlack hover:bg-white hover:border-2 hover:border-fadedBlack text-sm font-medium hover:font-medium"
            >
              {" "}
              Create a Mock Test
            </a>
          </div>
          <div className="flex-1">
            <Image
              src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c4f8c4255c212a221e53_Assesments%20PS.svg"
              alt="Assessments"
              height={100}
              width={100}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Build;
