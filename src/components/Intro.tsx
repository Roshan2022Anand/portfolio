import Image from "next/image";
import React from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaHandPeace, FaReact, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

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
        <section className="flex  items-center ">
          <h1 className="font-bold">˗ˏˋ</h1>
          <h1>roshan anand</h1>
          <h1 className="font-bold">ˎ</h1>
          <FaHandPeace className="icon-lg text-accent-1 rotate-12" />
        </section>
      </figure>

      <figure className="w-full">
        <h3>
          {"< "}
          <span className="text-accent-1">Backend first</span>
          {" >"}
        </h3>
        <section className="w-[80%] ml-10 flex gap-2 flex-wrap">
          <SiMongodb className="size-[20%] rounded-lg" />
          <SiExpress className="size-[20%] rounded-lg" />
          <FaReact className="size-[20%] rounded-lg" />
          <IoLogoNodejs className="size-[20%] rounded-lg" />
          <SiTypescript className="size-[20%] rounded-lg" />
          <RiNextjsFill className="size-[20%] rounded-lg" />
          <BiLogoPostgresql className="size-[20%] rounded-lg" />
          <RiTailwindCssFill className="size-[20%] rounded-lg" />
        </section>
        <h3>
          {"< "}
          <span className="text-accent-1">Fullstack Dev</span>
          {" />"}
        </h3>
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
