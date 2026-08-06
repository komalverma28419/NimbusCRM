import React from "react"
import Button from "../ui/Button"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="hero" className=" py-6 md:py-10 xl:py-14 relative overflow-hidden">

      <div className=" absolute inset-0 -z-20 bg-linear-to-b from-violet-100 via-white to-white"/>
      <div className=" absolute -top-32 left-1/2 -translate-x-1/2 h-125 w-125 rounded-full
         bg-violet-400/20 blur-3xl -z-10"/>
      <div className=" absolute top-40 -left-32 h-72 w-72 rounded-full  bg-blue-400/20 blur-3xl -z-10"/>


      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div className="text-center ">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className=" mt-6 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark">
            Turn WhatsApp chats into{" "}
            <span
              className="bg-linear-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              paying customers
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className=" mt-2 max-w-2xl mx-auto text-sm md:text-base text-font/80">
            NimbusCRM tracks every lead across WhatsApp,Instagram, and email in one inbox, so nothing
            falls through the cracks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center flex-col sm:flex-row  mt-6 gap-4 w-full">
              <Button text="Start Free Trial"variant="primary" className="w-full sm:w-auto"/>
              <Button text="Book a Demo" variant="secondary" className="w-full sm:w-auto"/>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero;