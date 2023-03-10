import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import useMediaMatch from "@/hooks/useMediaMatch";

function Navbar() {
  const match = useMediaMatch("768px");
  const navElements = ["customers", "pricing"];
  const [toggle, setToggle] = useState(false);
  function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className="bg-fadedBlack py-4">
      <Container>
        <div className="flex justify-between items-center">
          <a href="/">
            <Image src="/logo.png" alt="logo" height={30} width={120} />
          </a>
          {!match ? (
            <div className="flex gap-12 items-center">
              {navElements.map((elem: string) => (
                <a
                  href={`/${elem}`}
                  className="no-underline text-white font-bold"
                  key={elem}
                >
                  {capitalize(elem)}
                </a>
              ))}
              <a
                href="app.edisonos.com"
                className="bg-gradient-to-b from-gradientBlueStart to-gradientBlueStop  hover:from-gradientHoverBlue hover:to-gradientHoverBlueStop text-white px-5 py-2 text-md font-semibold rounded tracking-wider	"
              >
                Start Free Trial
              </a>
            </div>
          ) : (
            <>
              <Image
                src="/menu.png"
                alt="hamburger-icon"
                height={20}
                width={20}
                onClick={() => setToggle((tog) => !tog)}
              />
              <div
                className={`flex  origin-top transition-all max-lg:overflow-y-hidden -mt-1 ease-in ${
                  !toggle
                    ? "max-lg:max-h-0 invisible"
                    : `max-lg:max-h-screen visible`
                } absolute max-lg:py-3 left-0  duration-300 lg:flex max-lg:items-start items-center  top-14 w-full px-5  bg-fadedLightBlack flex-col  lg:flex-row lg:h-full lg:static lg:visible ${
                  match ? "h-48 " : ""
                }`}
              >
                {navElements.map((elem) => (
                  <a
                    href={`/${elem}`}
                    className="no-underline mb-4 mt-2 font-bold text-white"
                    key={elem}
                  >
                    {capitalize(elem)}
                  </a>
                ))}
                <a
                  href="app.edisonos.com"
                  className="mt-2 bg-gradient-to-b from-gradientBlueStart to-gradientBlueStop  hover:from-gradientHoverBlue hover:to-gradientHoverBlueStop text-white px-5 py-2 text-md font-semibold rounded tracking-wider	"
                >
                  Start Free Trial
                </a>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
