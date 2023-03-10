import React from "react";
import { Container } from "components";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-fadedBlack">
      <Container>
        <div className="py-10 divide-y divide-white">
          <div className="flex items-start justify-between max-sm:flex-col max-sm:items-center max-md:justify-evenly">
            <div className="pb-5">
              <a href="/" className="flex flex-col decoration-none pb-5">
                <Image
                  src="/logofooter.png"
                  alt="logo"
                  height={40}
                  width={80}
                />
              </a>
              <a href="https://edisonos.com/about ">
                <p className="text-sm max-sm:text-center text-white pb-3">
                  About
                </p>
              </a>
              <a href="https://edisonos.com/pricing ">
                <p className="text-sm max-sm:text-center text-white pb-3">
                  Pricing
                </p>
              </a>
              <a href="https://edisonos.com/customers ">
                <p className="text-sm max-sm:text-center text-white pb-3">
                  Customers
                </p>
              </a>
              <a href="https://edisonos.com/about ">
                <p className="text-sm max-sm:text-center text-white pb-3">
                  Help Center
                </p>
              </a>
            </div>
            <div className="pb-5">
              <h5 className="text-xl text-white font-bold pb-6">
                Get In Touch
              </h5>
              <a href="https://edisonos.com/about ">
                <p className="text-sm max-sm:text-center text-white pb-3">
                  Contact Us
                </p>
              </a>
              <a href="https://edisonos.com/pricing ">
                <p className="text-sm max-sm:text-center text-white pb-3">
                  Talk To Sales
                </p>
              </a>
            </div>
            <div className="pb-5">
              <h5 className="text-xl text-white font-bold pb-6 max-sm:text-center">
                Legal
              </h5>
              <a href="https://edisonos.com/about ">
                <p className="text-sm max-sm:text-center text-white pb-3">
                  Privacy-policy
                </p>
              </a>
              <a href="https://edisonos.com/pricing ">
                <p className="text-sm max-sm:text-center text-white pb-3">
                  Terms & Conditions
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2 pt-5 max-sm:flex-col">
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/theedisonos"
                className="decoration-none"
              >
                <Image
                  src="/icons/facebook.png"
                  alt="social-icons"
                  className="h-5 w-5"
                  height={20}
                  width={20}
                />
              </a>
              <a
                href="https://www.facebook.com/theedisonos"
                className="decoration-none"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="social-icons"
                  className="h-5 w-5"
                  height={20}
                  width={20}
                />
              </a>
              <a
                href="https://www.facebook.com/theedisonos"
                className="decoration-none"
              >
                <Image
                  src="/icons/twitter.png"
                  alt="social-icons"
                  className="h-5 w-5"
                  height={20}
                  width={20}
                />
              </a>
              <a
                href="https://www.facebook.com/theedisonos"
                className="decoration-none"
              >
                <Image
                  src="/icons/youtube.png"
                  alt="social-icons"
                  className="h-5 w-5"
                  height={20}
                  width={20}
                />
              </a>
              <a
                href="https://www.facebook.com/theedisonos"
                className="decoration-none"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="social-icons"
                  className="h-5 w-5"
                  height={20}
                  width={20}
                />
              </a>
            </div>
            <p className="text-white text-sm max-sm:text-center  max-sm:mt-4">
              Copyright © 2022 TeachEdison
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
