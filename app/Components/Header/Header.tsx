"use client";

import { useRef } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Button from "../Button/Button";

import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import Hover3d from "../../utils/hover";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = Hover3d(hero, {
    x: 10,
    y: -40,
    z: 30,
  });

  const imageHover = Hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <header ref={hero}>
      <nav className="flex justify-between px-10 min-h-[10vh] border-b border-[#424242] items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={logo} alt="logo" width={36} height={36} />
          <h2 className="font-semibold">NFTi</h2>
        </div>

        <div className="flex items-center border border-[#424242] rounded-lg bg-[#161616] z-20">
          <input
            type="text"
            className=" px-4 py-2 rounded-lg  bg-[#161616] placeholder:text-[#424242] w-[30vw] "
            placeholder="Search"
          />
        </div>

        <ul className="flex items-center gap-8">
          <li className="li">
            <a href="#">Home</a>
          </li>
          <li className="li">
            <a href="#">Auctions</a>
          </li>
          <li className="li">
            <a href="#">Marketplace</a>
          </li>
          <li className="li">
            <a href="#">About</a>
          </li>

          <Button name="Connect Wallet" icon={<FaWallet />} />
        </ul>
      </nav>

      <div className="flex items-center justify-between gap-16 min-h-[90vh] px-40 pb-20 ">
        <div className="z-30">
          <h1
            className={abril.className}
            style={{
              fontSize: "5rem",
              color: "#f2994a",
              paddingBottom: "1.5rem",
            }}
          >
            Buy, Create and Sell extraordinary NFTs
          </h1>
          <p className="z-30">
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the <br /> highly sought-after
            NFTs, and comprehend the possible advantages and disadvantages of{" "}
            <br />
            acquiring, amassing, and vending these exceptional digital assets.
          </p>
          <div className="z-30 flex gap-4 mt-10 text-base">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>

        <div
          className="border rounded-lg border-[#424242]"
          style={{
            transform: hoverHero.transform,
            transition: hoverHero.transition,
          }}
        >
          <div className="p-4">
            <Image
              src="/images/monkey.png"
              className="rounded-lg "
              style={{
                transform: imageHover.transform,
                // transition: imageHover.transition,
              }}
              alt="Monkey"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
