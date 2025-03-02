import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Utlity from "@/components/Utlity";
import React from "react";

const page = () => {
  return (
    <main
      className="flex flex-col md:w-[85%] xl:flex-row xl:w-full   
    mx-auto"
    >
      <Intro />
      <section className="flex flex-col gap-2 xl:w-1/2 xl:ml-auto my-3 xl:px-2">
        <Utlity/>
        <Contact />
      </section>
    </main>
  );
};

export default page;