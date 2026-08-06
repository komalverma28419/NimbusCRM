import React from "react";
import { Check } from "lucide-react";
import Button from "../../ui/Button";

const PricingCard = ({ plan }) => {
  const isHighlighted = plan.title === "Growth";

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-500
        hover:-translate-y-2 hover:shadow-2xl
        ${
          isHighlighted
            ? "border-transparent bg-linear-to-br from-violet-600 via-violet-700 to-blue-700 shadow-[0_25px_60px_rgba(109,40,217,0.35)]"
            : "border-gray-200 bg-white hover:border-violet-300 hover:shadow-violet-100"
        }`}>
        <div
            className={`absolute left-0 top-0 h-1 bg-linear-to-r from-fuchsia-500 via-violet-500
            to-blue-500 transition-all duration-500
            ${isHighlighted ? "w-full" : "w-0 group-hover:w-full"}`}
        />

        {isHighlighted && (
            <div className=" absolute -top-20 -right-16 h-52 w-52 rounded-full  bg-white/10 blur-3xl "/>
        )}

        <h3 className={`text-center text-2xl font-bold ${isHighlighted ? "text-white" : "text-gray-900"}`}>
            {plan.title}
        </h3>

        <div className="mt-4 text-center">
            <span className={`text-4xl font-bold ${isHighlighted ? "text-white" : "text-violet-600"}`}>
                {plan.price}
            </span>
            <span className={`ml-1 text-lg ${isHighlighted ? "text-violet-100" : "text-gray-500"}`}>
                /mo
            </span>
        </div>

        <ul className="mt-8 space-y-4">
            {plan.features.map((feature) => (
            <li key={feature.name} className="flex items-center gap-3">
                <div
                className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
                    isHighlighted ? "bg-white/20 text-white" : "bg-violet-100 text-violet-600"}`}>
                <Check size={14} />
                </div>
                <span className={`${ isHighlighted ? "text-white/90" : "text-gray-700"}`}>
                    {feature.name}
                </span>
            </li>
            ))}
        </ul>

        <Button text="Start Free Trial" variant={isHighlighted ? "tertiary" : "primary"}
        className="mt-10 w-full justify-center"/>
    </div>
  )
}
export default PricingCard;
