"use client"
import React, { useState } from 'react'
import { Moon, Sun } from "lucide-react";

const ThemeSection = () => {

  const [theme, settheme] = useState("dark");

  const root = document.documentElement;
  if (theme === "light") {
    root.style.setProperty("--primary-color", "#F5F5F5");
    root.style.setProperty("--sec-color", "#D9D9D9");
    root.style.setProperty("--text-color", "#1A1A1A");
    root.style.setProperty("--accent-one-color", "#B5D331"); // Same as dark theme
    root.style.setProperty("--accent-two-color", "#A1C545"); // Same as dark theme
  } else if (theme === "dark") {
    root.style.setProperty("--primary-color", "#171616");
    root.style.setProperty("--sec-color", "#353232");
    root.style.setProperty("--text-color", "#F5F5F5");
    root.style.setProperty("--accent-one-color", "#E6FF32"); // Same as light theme
    root.style.setProperty("--accent-two-color", "#C6FB51"); // Same as light theme
  }


  return (
    <section className='theme-section flex items-center  p-3'>
      <button className='grow h-full rounded-lg ' onClick={() => { settheme("dark") }}
        style={{
          backgroundColor: theme === "dark" ? "var(--accent-two-color)" : "",
          color: theme === "dark" ? "var(--primary-color)" : ""
        }}><Moon className='mx-auto' /></button>
      <button className='grow h-full rounded-lg ' onClick={() => { settheme("light") }}
        style={{
          backgroundColor: theme === "light" ? "var(--accent-two-color)" : "",
          color: theme === "light" ? "var(--primary-color)" : ""
        }}><Sun className='mx-auto' /></button>
    </section>
  )
}

export default ThemeSection
