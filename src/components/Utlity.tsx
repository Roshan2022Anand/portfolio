"use client";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Utlity = () => {
  const handleResumeOpen = () => {
    window.open("/resume-new.pdf", "_blank", "noopener,noreferrer");
  };
  return (
    <section className="flex rounded-lg justify-between">
      <figure className="bg-three [&>*:hover]:text-accent w-1/2 grid grid-cols-3 [&>*]:mx-auto">
        <h3 className="col-span-2">Active</h3>
        <Link href="https://github.com/Roshan2022Anand">
          <FaGithubSquare className="icon-lg" />
        </Link>

        <Link href="https://www.linkedin.com/in/roshan-anand-a92b1a23a/">
          <FaLinkedin className="icon-lg" />
        </Link>
        <h3>ON</h3>

        <Link href="https://x.com/R0SHAN_ANAND">
          <FaSquareXTwitter className="icon-lg" />
        </Link>
      </figure>

      <button
        className="flex size-fit items-center bg-accent px-3 py-1 "
        onClick={handleResumeOpen}
      >
        <h3>Resume</h3>
        <FaFileAlt className="icon-lg" />
      </button>
    </section>
  );
};

export default Utlity;
