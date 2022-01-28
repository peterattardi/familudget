import React from "react";
import { BiWorld } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" w-full flex flex-col gap-12 items-center justify-between text-center bg-black text-white py-10 px-8">
      <p className="text-xl">Pietro Attardi © All rights reserved</p>
      <div className="flex items-center gap-20 justify-between">
        <a target="_blank" href="https://www.pietroattardi.com">
          <BiWorld size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/pietro-attardi-b27814223/"
          target="_blank"
        >
          <BsLinkedin size={40} />
        </a>
        <a href="https://www.github.com/peterattardi" target="_blank">
          <BsGithub size={40} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
