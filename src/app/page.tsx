import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import React from "react";

const page = () => {
  return (
    <main
      className="flex flex-col md:w-[85%] xl:flex-row xl:w-full   
    mx-auto"
    >
      <Intro />
      <section className="xl:w-1/2 xl:ml-auto h-[150vh]">
        <Contact />
      </section>
    </main>
  );
};

export default page;
