"use client"

import echoLogo from "@/assets/logo-echo.png"
import celestialLogo from "@/assets/logo-celestial.png"
import pulseLogo from "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import acmeLogo from "@/assets/logo-acme.png"
import quantumLogo from "@/assets/logo-quantum.png"
import Image from "next/image"
import { motion } from "framer-motion"

export const LogoTicker = () => {
  return (
    <div className="py-8 bg-white md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14" animate={{translateX: "-50%"}} transition={{duration: 20, repeat: Infinity, ease: "linear", repeatType: "loop"}}>
            <Image src={echoLogo} alt="echo Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={celestialLogo} alt="celestial Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={pulseLogo} alt="pulse Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={apexLogo} alt="apex Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={acmeLogo} alt="acme Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={quantumLogo} alt="quantum Logo"  className="logo-ticker-image" width={200} height={100}/>

            {/* second set of logos for animation */}
            <Image src={echoLogo} alt="echo Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={celestialLogo} alt="celestial Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={pulseLogo} alt="pulse Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={apexLogo} alt="apex Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={acmeLogo} alt="acme Logo"  className="logo-ticker-image" width={200} height={100}/>
            <Image src={quantumLogo} alt="quantum Logo"  className="logo-ticker-image" width={200} height={100}/>
          </motion.div>
        </div>
      </div>
    </div>
  )
};
