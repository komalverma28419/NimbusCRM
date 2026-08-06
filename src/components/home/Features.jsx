import React from "react";
import { features } from "../../data/featureData";
import Title from "../ui/Title";

const Features = () => {
  return (
    <section id="features"className="py-6 md:py-10 xl:py-14  bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <Title text="Everything you need to manage your leads"/>

        <div className=" mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className=" group relative overflow-hidden rounded-3xl border border-secondary/25 bg-white
                p-7 transition-all duration-500 hover:-translate-y-3 hover:border-violet-300 
                hover:shadow-2xl  hover:shadow-violet-100 ">

                {/* Animated Top Border */}
                <div className=" absolute left-0 top-0 h-0.5 sm:h-1 w-0 bg-linear-to-r from-violet-600
                  to-blue-600 transition-all duration-500 group-hover:w-full "/>

                <div className=" relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-xl border
                  border-violet-100 bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1
                  group-hover:border-violet-300 group-hover:shadow-xl group-hover:shadow-violet-200/40">

                  <div className="absolute inset-0 rounded-xl bg-linear-to-br from-violet-600
                    to-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                    <Icon className="text-primary w-5 h-6 sm:w-7 sm:h-7"/>
                </div>

                <h3
                  className="mt-3 text-lg font-semibold text-gray-800 transition-colors duration-300
                  group-hover:text-violet-700">
                  {feature.title}
                </h3>

                <p className="mt-1 text-gray-600 md:text-base text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )}
export default Features;





