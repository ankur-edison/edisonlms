import React from "react";
import Image from "next/image";
import Clientele from "../home/Clientele";

function CustomersHero() {
  return (
    <div>
      <div className="py-16">
        <h1 className="text-center text-heading font-bold leading-heading max-sm:text-3xl	max-sm:leading-8">
          Creators & Entrepreneurs <br /> of all kinds trust EdisonOs
        </h1>
        <div className="flex justify-center">
          <Image
            src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/639709c14a43b6f895acd488_emoji.gif"
            alt="emojis"
            height={100}
            width={100}
            className="w-80 h-20"
          />
        </div>
        <p className="text-gray text-center text-xl mt-4 leading-8 max-sm:text-base max-sm:leading-6">
          Creators are reacting about EdisonOS
        </p>
        <div className="flex gap-8 py-10 max-md:flex-col">
          <div className="bg-white shadow-custom rounded-xl p-5 flex-1">
            <div className="flex gap-4">
              <Image
                src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c527cba1ed1729eaf505_IMG-20220920-WA0001.jpg"
                alt="Shubhangi"
                height={60}
                width={60}
                className="rounded-full"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg text-fadedBlack font-bold">
                Shubhangi Khedekar
              </h2>
              <h3 className="text-md text-gray font-semibold">
                Astrology Trainer
              </h3>
            </div>
            <p className="pt-4 text-gray font-medium ">
              EdisonOS platform is very easy to handle & much beneficial for
              teachers while better understanding my student.
            </p>
          </div>

          <div className="bg-white shadow-custom rounded-xl p-5 flex-1">
            <div className="flex gap-4">
              <Image
                src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c527cba1edbecbeaf511_Arpit%20PP.jpg"
                alt="Arpit"
                height={60}
                width={60}
                className="rounded-full"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg text-fadedBlack font-bold">
                Arpit Kothari
              </h2>
              <h3 className="text-md text-gray font-semibold">
                Head Of Marketing
              </h3>
            </div>
            <p className="pt-4 text-gray font-medium ">
              EdisonOS is the best platform for the publication of courses and
              good facilities for learners & admins.
            </p>
          </div>

          <div className="bg-white shadow-custom rounded-xl p-5 flex-1">
            <div className="flex gap-4">
              <Image
                src="https://uploads-ssl.webflow.com/63689d99260066d5c6398b47/6368c527cba1edb1e9eaf50b_portrait-caucasian-content-teacher-with-folded-hands.jpg"
                alt="Bhushan"
                height={60}
                width={60}
                className="rounded-full"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg text-fadedBlack font-bold">
                Bhushan Shinde
              </h2>
              <h3 className="text-md text-gray font-semibold">
                Teacher, Mentor
              </h3>
            </div>
            <p className="pt-4 text-gray font-medium ">
              The primary reason we chose EdisonOS over others Is for their
              interactive learning tools.
            </p>
          </div>
        </div>
        <Clientele />
      </div>
    </div>
  );
}

export default CustomersHero;
