import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="flex bg-four rounded-lg p-2">
      <figure className="flex-1">
        <h3 className="font-bold text-center">Get in touch</h3>
       
      </figure>
      <form className="w-2/3 flex flex-col gap-3">
        <input
          type="text"
          name="name"
          className="input-field h-[50px]"
          placeholder="name"
        />
        <input
          type="email"
          name="email"
          className="input-field h-[50px]"
          placeholder="email"
        />
        <textarea
          name=""
          id=""
          className="input-field "
          rows={10}
          placeholder="your message"
        ></textarea>
        <button
          type="button"
          className="bg-accent w-fit p-2  flex gap-2 items-center"
        >
          <h3>Send</h3>
          <FaPaperPlane className="icon-lg" />
        </button>
      </form>
    </footer>
  );
};

export default Contact;
