import React from "react";
import Button from "./../Buttons/Button";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import Avatar from "../Avatar/Avatar";
import react3dicon from "../../../public/icons/3D/floating/reacticon.png"
import express3dicon from "../../../public/icons/3D/floating/expressicon.png"
import git3dicon from "../../../public/icons/3D/floating/giticon.png"
import js3dicon from "../../../public/icons/3D/floating/javascripticon.png"
import node3dicon from "../../../public/icons/3D/floating/nodejsicon.png"
import tailwind3dicon from "../../../public/icons/3D/floating/tailwindicon.png"
import ts3dicon from "../../../public/icons/3D/floating/typescripticon.png"


const Hero = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <div className="content flex flex-col gap-5 justify-baseline">
          <span className="text-secondary text-xs">
            INDEPENDENT DEVELOPER / CREATIVE MIND
          </span>
          <div className="status flex gap-2 items-center">
            <div className="bg-accent w-1.5 h-1.5 rounded-4xl"></div>
            <span className="text-accent text-sm font-mono">
              Available for freelance
            </span>
          </div>
          <div className="name flex flex-col font-bold text-9xl font-heading">
            <span className="px-0.5">AMMAR</span>
            <span>MESHAAL</span>
          </div>
          <div className="title font-heading text-xl">
            <span>Freelancer & Software Developer</span>
          </div>
          <div className="text-secondary w-90">
            <span>
              I turn ambitious ideas into distinctive digital experiences.
              Thoughtful interfaces. Serious craft.
            </span>
          </div>
          <div className="flex gap-3">
            <Button accent>
              Explore My Work <GoArrowUpRight />
            </Button>
            <Button>
              let's build somthing
              <GoArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="relative illustration w-full flex justify-center items-center">
          <Avatar className="z-100"/>
          <img src={react3dicon} className='absolute top-0 left-70 w-35 rotate-12' />
          <img src={express3dicon} className='absolute top-110 left-85 w-35' />
          <img src={git3dicon} className='absolute top-50 left-170 w-25 z-0' />
          <img src={tailwind3dicon} className='absolute top-30 left-55 w-35' />
          <img src={node3dicon} className='absolute top-0 left-160 w-35' />
          <img src={ts3dicon} className='absolute top-85 left-170 w-35 rotate-12' />
          <img src={js3dicon} className='absolute top-75 left-60 w-35 rotate-12' />
        </div>
      </div>
      <div className="flex justify-between items-center font-mono text-xs text-secondary">
        <span>DESIGN-LED. ENGINEERED TO WORK.</span>
        <span>01 / CONCEPT CHARACTER</span>
      </div>
      <div className="flex justify-between items-center text-xs border-t border-t-border py-7">
        <span>FRONTEND DEVELOPMENT</span>
        <span className="text-secondary">REACT / TYPESCRIPT / TAILWIND CSS</span>
        <span className="flex items-center gap-2 text-secondary">SCROLL TO EXPLORE <GoArrowDown/></span>
      </div>
    </div>
  );
};

export default Hero;
