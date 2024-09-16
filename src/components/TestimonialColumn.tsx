"use client"

import { testimonials } from "@/constants"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { Fragment } from 'react'
import { motion } from "framer-motion"

export const firstColumn = testimonials.slice(0, 3)
export const secondColumn = testimonials.slice(3, 6)
export const thirdColumn = testimonials.slice(6, 9)

export const TestimonialColumns = (props: {className?: string; testimonials: typeof testimonials; duration?: number}) => {
    return (
      <div className={props.className}>
        <motion.div animate={{
          translateY: "-50%"
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }} className="flex flex-col gap-6 pb-6">
          {[...new Array(2)].fill(0).map((_,index) =>(
            <Fragment key={index}>
              {props.testimonials?.map(({ text, imageSrc, name, username}) =>(
            <div key={name} className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} className="h-10 w-10 rounded-full" width={200} height={200} />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    )
}