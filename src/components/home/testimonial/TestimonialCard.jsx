import React from "react"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

const TestimonialCard = ({ item, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
    className="group relative rounded-3xl p-0.5 border border-gray-200 overflow-hidden">
      
      {/* Animated Border */}
      <div className="wave-border absolute inset-[-50%]"></div>

      <div className="relative z-10 rounded-3xl bg-white p-6 transition-all duration-300 flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br
         from-violet-100 to-blue-100 text-violet-600">
          <Quote size={24}/>
        </div>

        <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-700 text-center">
          "{item.quote}"
        </p>

        <div className="mt-2 text-center">
          <h3 className="font-semibold text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-500">
            {item.role}
          </p>
        </div>

      </div>

    </motion.div>
  )
}

export default TestimonialCard;