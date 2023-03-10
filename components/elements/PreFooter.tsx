import React from "react";
import { Container } from "components";

function PreFooter() {
  return (
    <div className="bg-fadedLightBlack py-10">
      <Container>
        <div className="flex justify-between items-center max-md:flex-col gap-12">
          <p className="text-3xl text-white font-bold max-md:text-center">
            Want to see EdisonOS in action?
          </p>
          <a
            href="#"
            className="bg-transparent text-white border border-2xl border-bg-white hover:bg-white hover:text-fadedBlack  hover:border-2xl hover:border-white px-16 py-4 text-md font-semibold rounded tracking-wider"
          >
            Book a Free Demo
          </a>
        </div>
      </Container>
    </div>
  );
}

export default PreFooter;
