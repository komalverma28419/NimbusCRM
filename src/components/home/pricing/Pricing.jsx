import React from "react";
import Title from "../../ui/Title";
import { plans } from "../../../data/pricingData";
import PricingCard from "./PricingCard";


const Pricing = () => {
  return (
    <section id="pricing" className="py-6 md:py-10 xl:py-14 relative overflow-hidden ">
<div className="absolute inset-0 -z-20
    bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%),linear-gradient(to_bottom,#ffffff,#f8fafc,#ffffff)]"/>      <div className=" max-w-7xl mx-auto px-6 lg:px-12 " >

       <Title text="Everything you need to manage your leads"/>
        <div
          className="mt-12 grid lg:grid-cols-3 gap-6 ">
          {plans.map((plan) =>(
            <PricingCard key={plan.title} plan={plan}/>
          ))}
        </div>

      </div>
    </section>
  )
}
export default Pricing;