import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

function Engage() {
  return (
    <div className="pb-16 pt-10">
      <div className="flex gap-4 justify-center mb-5">
        <Image
          src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c50c66eb94dfd28bda9b_organization.png"
          height={24}
          width={24}
          alt="wrench"
        />
        <h1 className="font-bold text-md ">Engage</h1>
      </div>
      <h2 className="text-center text-3xl font-bold">
        Discuss, share, engage <br />
        and connect
      </h2>
      <p className="text-gray text-center text-md mt-3">
        <Balancer>
          Optimize learner - instructor engagement through discussion forums,
          <br /> solving doubts and embrace communities.
        </Balancer>
      </p>

      <div className="grid grid-cols-2 gap-4 pt-10 max-sm:grid-cols-1">
        <div className="bg-white p-5 rounded flex flex-col justify-center shadow-xl rounded">
          <div className="flex-1 p-5">
            <h2 className="text-2xl font-bold">Interactive Classrooms</h2>
            <p className="pt-3 font-medium text-fadedBlack text-md">
              With EdisonOS, you can combine the exciting, interactive nature of
              a community with interactive live streams, group chats & events —
              so you can keep your audience well connected.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/interactions.png"
              alt="learning-block"
              height={100}
              width={100}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="bg-white p-5 rounded flex flex-col justify-center shadow-xl rounded">
          <div className="flex-1 p-5">
            <h2 className="text-2xl font-bold">Q&A Discussions</h2>
            <p className="pt-3 font-medium text-fadedBlack text-md">
              A customizable forum for creating a scalable Q&A repository. Keep
              your learner discussions organized with community-based Q&A
              spaces. Finding questions and contributing answers has never been
              this easier.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c50c66eb94a8a48bda9d_Engage%20screen%203.svg"
              alt="learning-block"
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

export default Engage;
