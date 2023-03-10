import React, { useState } from "react";
import Image from "next/image";
import { logoData } from "./data";

function Clientele() {
  return (
    <div className="pt-5">
      <h1 className="text-lg font-medium text-center pb-5">Trusted By</h1>
      <div className="flex gap-8 justify-center max-sm:flex-wrap">
        {logoData.map((img, i) => (
          <LogoHelper blacknwhite={img.blacknwhite} color={img.color} key={i} />
        ))}
      </div>
    </div>
  );
}

interface LogoProps {
  blacknwhite: string;
  color: string;
}

function LogoHelper(props: LogoProps) {
  const [hover, setHover] = useState(false);

  return (
    <React.Fragment>
      <div className="relative">
        <Image
          src={props.blacknwhite}
          alt="logo"
          height={30}
          width={100}
          className={`${
            hover ? "opacity-0" : "opacity-100"
          } relative z-10 cursor-pointer`}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
        <Image
          src={props.color}
          alt="logo"
          height={30}
          width={100}
          className={`absolute top-0 left-0 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </React.Fragment>
  );
}

export default Clientele;
