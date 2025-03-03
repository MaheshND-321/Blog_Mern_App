import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Please do checkout my Portfolio</h2>
        <h3 className="text-2xl text-purple-700 my-1">Mahesh N D</h3>
        <p className="text-gray-500 my-2">Full stack developer</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://maheshdev.me"
            target="_blank"
            rel="nooper noreferrer"
          >
            Click here to explore
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          className="w-full h-72"
          src="https://th.bing.com/th/id/OIP.sYk6wzeP1-JxoFeKvvKErgHaHa?pid=ImgDet&w=192&h=192&c=7&dpr=1.6"
          alt="portfolio_image"
        />
      </div>
    </div>
  );
}
