"use client";

import Image from "next/image";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

import logo from "../../public/logo.png";
import footer from "../utils/footer";

const Footer = () => {
  return (
    <div className="relative z-10 px-40 pt-20 bg-[#111111] border-t border-[#424242]">
      <nav className="flex justify-between gap-20">
        <div className="flex flex-col gap-8 w-[50%]">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="logo" width={36} height={36} />
            <h2 className="font-semibold">NFTi</h2>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Subscribe here..."
              className="px-4 py-2 rounded-lg bg-[#161616] border border-[#424242] w-[800px]"
            />
            <button className="absolute bg-transparent -right-6 bottom-[0.6rem]">
              &#8594;
            </button>
          </div>

          <p className="text-sm">
            Create, Sell And Collect Truly Rare Digital Artworks. Powered By
            Blockchain Technology.
          </p>
          <div className="flex items-center space-x-10 text-3xl">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-2">
          {footer.map((item: any, index: number) => {
            return (
              <div key={index}>
                <h4 className="mb-6 text-xl font-semibold">{item.title}</h4>
                <ul>
                  {item.links.map((text: any, index: number) => {
                    return (
                      <li className="mb-4" key={index}>
                        <a
                          className="text-base transition-all hover:text-white"
                          href=""
                        >
                          {text.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
      <p className="flex items-center justify-between py-10 mt-10 border-t border-[#424242]">
        <a href="">©2023 NFTi. All rights reserved.</a>
        <a href="">Privacy Policy | Terms of Service</a>
      </p>
    </div>
  );
};

export default Footer;
