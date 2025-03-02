import Image from "next/image";
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHandPeace, FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Intro = () => {
  return (
    <aside className="h-screen xl:fixed xl:w-1/2 xl:p-2 flex flex-col items-center justify-evenly">
      <figure className="flex flex-col items-center">
        <section className="img-lg rounded-full overflow-hidden border-4 border-text">
          <Image
            src="/roshan.jpg"
            alt="profile"
            width="1000"
            height="1000"
            className="size-full object-cover"
          />
        </section>
        <section className="flex items-center">
          <h1 className="font-bold">˗ˏˋ</h1>
          <h1>roshan anand</h1>
          <h1 className="font-bold">ˎ</h1>
          <FaHandPeace className="icon-lg text-accent rotate-12" />
        </section>
      </figure>

      <figure className="w-full bg-[#a3afba] rounded-lg">
        <div className="bg-[#161719] rounded-lg m-[30px] p-2">
          <section className="flex gap-2 [&>div]:size-[10px] mb-2">
            <div className="rounded-full bg-[#ff5f57]"></div>
            <div className="rounded-full bg-[#ffbd2c]"></div>
            <div className="rounded-full bg-[#27c83f]"></div>
          </section>
          <h3 className="ml-10">
            {"< "}
            <span className="text-accent">Backend first</span>
            {" >"}
          </h3>
          <section className="w-[70%] xl:w-[60%] ml-[70px] grid grid-cols-4 xl:gap-4 [&>p]:flex [&>p]:flex-col [&>p]:items-center [&>p]:gap-1">
            <p>
              <SiMongodb className="size-[80%] rounded-lg" />
              <span>MongoDB</span>
            </p>
            <p>
              <SiExpress className="size-[80%] rounded-lg" />
              <span>Express</span>
            </p>
            <p>
              <FaReact className="size-[80%] rounded-lg" />
              <span>React</span>
            </p>
            <p>
              <IoLogoNodejs className="size-[80%] rounded-lg" />
              <span>NodeJS</span>
            </p>
            <p>
              <SiTypescript className="size-[80%] rounded-lg" />
              <span>Typescript</span>
            </p>
            <p>
              <TbBrandNextjs className="size-[80%] rounded-lg" />
              <span>NextJS</span>
            </p>
            <p>
              <BiLogoPostgresql className="size-[80%] rounded-lg" />
              <span>PSQL</span>
            </p>
            <p>
              <RiTailwindCssFill className="size-[80%] rounded-lg" />
              <span>TailwindCSS</span>
            </p>
          </section>
          <h3 className="ml-10">
            {"</ "}
            <span className="text-accent">Fullstack Dev</span>
            {" >"}
          </h3>
        </div>
      </figure>
    </aside>
  );
};
/* 
javascript typescript GO
react nextjs tailwindcss
nodejs expressjs hapijs
mongodb postgresql
*/
export default Intro;
