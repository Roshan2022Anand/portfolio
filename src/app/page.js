"use client"
import React from 'react'
import IntroSection from '@/components/sections/IntroSection'
import ContactSection from '@/components/sections/ContactSection'
import TechSection from '@/components/sections/TechSection'
import ExperienceSection from "@/components/sections/ExperienceSection"
import ResumeSection from '@/components/sections/ResumeSection'
import ThemeSection from '@/components/sections/ThemeSection'
import ProjectSection from '@/components/sections/ProjectSection'
const page = () => {


  // const initAnimation = () => {
  //   gsap.from('.intro-section', {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     duration: 3,
  //   })
  //   gsap.from('.tech-section', {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     duration: 3,
  //   })
  //   gsap.from('.profile-section', {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     duration: 3,
  //   })
  //   gsap.from('.nav-section', {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     duration: 3,
  //   })
  // }


  return (
    <main className='main z-[2]'>
      <IntroSection/>
      <ResumeSection/>
      <ThemeSection/>
      <ContactSection />
      <TechSection />
      <ExperienceSection/>
      <ProjectSection/>
    </main>

  )
}

export default page

