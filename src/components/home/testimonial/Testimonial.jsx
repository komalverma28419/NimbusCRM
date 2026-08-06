import React from "react";
import Title from "../../ui/Title";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../data/testiMonialData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-6 md:py-10 xl:py-14 relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-cyan-100"/>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 ">
        <Title text="Loved by small business owners"/>

        <div className=" mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item) =>(
            <TestimonialCard key={item.id} item={item}/>
          ))}
        </div>

      </div>
    </section>
  )}
export default Testimonials;