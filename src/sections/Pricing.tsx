"use client"

import { pricingTiers } from "@/constants"
import CheckIcon from "@/assets/check.svg"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"

export const Pricing = () => {
  return (
    <section className="py-24 md:flex md:justify-center md:items-center bg-white">
      <div>
        <div className="section-header">
          <h2 className="title-gradient">Pricing</h2>
          <p className="section-desc mt-5 mb-5">Free forever, Upgrade for unlimited task, better security, and exclusive features.</p>
        </div>
        <div className="flex flex-col items-center gap-6 lg:flex lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({title, monthlyPrice, buttonText, popular, inverse, features,}) =>(
            <div key={title} className={twMerge("card", inverse === true && "border-black bg-black text-white/60")}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && "text-white/60")}>{title}</h3>
                {popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20"><motion.span animate={{backgroundPositionX: "100%"}} transition={{duration: 1, repeat: Infinity, ease: "linear", repeatType: "loop"}} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] bg-clip-text text-transparent font-medium">Popular</motion.span></div>
                )}
                
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className="tracking-tight font-bold text-black/50">/month</span>
              </div>
              <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "text-black bg-white")}>{buttonText}</button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};
