"use client"

import ArrowRight from "@/assets/arrow-right.svg"
import starImage from "@/assets/star.png"
import springImage from "@/assets/spring.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150,-150])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip px-24">
      <div className="container">
        <div className="section-header relative">
          <h2 className="title-gradient">Sign up for freen today</h2>
          <p className="section-desc mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motive your efforts.</p>
          <motion.img style={{translateY}} src={starImage.src} alt="Star Image" width={360} className="absolute -left-[350px] -top-[137px]" />
          <motion.img style={{ translateY}} src={springImage.src} alt="Star Image" width={360} className="absolute -right-[331px] -top-[19px]" />
        </div>
        <div className="flex justify-center items-center mt-10 gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
};
