import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section id="hero" className=" py-6 md:py-10 xl:py-14 relative overflow-hidden">

      {/* Background Gradient */}
      <div className=" absolute inset-0 -z-20 bg-gradient-to-b from-violet-100 via-white to-white"/>


      {/* Main Glow */}
      <div
        className=" absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full
         bg-violet-400/20 blur-3xl -z-10"/>


      {/* Side Glow */}
      <div className=" absolute top-40 -left-32 h-72 w-72 rounded-full  bg-blue-400/20 blur-3xl -z-10"/>


      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
        <div className="text-center ">

          <h1 className=" mt-6 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark">
            Turn WhatsApp chats into{" "}
            <span
              className="bg-linear-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              paying customers
            </span>
          </h1>

          <p className=" mt-2 max-w-2xl mx-auto text-sm md:text-base text-font/80">
            NimbusCRM tracks every lead across WhatsApp,Instagram, and email in one inbox, so nothing
            falls through the cracks.
          </p>

          <div className=" mt-6">
            <Button text="Book a Demo"variant="primary"/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero;