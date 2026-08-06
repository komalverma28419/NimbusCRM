// import React from "react";

// const Button = ({
//   text,
//   onClick,
//   type = "button",
//   variant = "primary",
//   size = "sm",
//   shine = false,
//   className = "",
//   children,
//   icon,
//   iconPosition = "right",
//   ...props
// }) => {
//   const baseStyle = ` relative overflow-hidden rounded-md inline-flex items-center justify-center gap-2
//     cursor-pointer transition-all duration-300 group`

//   const sizes = {
//     sm: "px-5 py-2.5 text-sm xl:text-[15px]",
//     md: "px-7 py-3 text-base",
//     lg: "lg:px-12 px-8 lg:py-4 py-3 md:text-base text-sm",
//   };

//   const variants = {
//     primary:`bg-primary text-white font-medium hover:opacity-90 hover:-translate-y-[2px] hover:scale-[1.03]`,

//     secondary:`bg-white text-dark border border-[#E5E7EB] font-semibold hover:-translate-y-[2px] hover:scale-[1.03] `,
      
//     tertiary:`bg-white text-primary hover:bg-secondary hover:text-white border border-[#66708533]
//        font-medium hover:-translate-y-[2px] hover:scale-[1.03]`,
//   }

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`${className} ${baseStyle} ${sizes[size]} ${variants[variant]} `}
//       {...props}
//     >
//       {shine && (
//         <span
//           className=" hidden dark:block absolute inset-0 overflow-hidden rounded-md pointer-events-none">
//           <span
//             className=" absolute top-0 -left-[150%] h-full w-14 -skew-x-12 bg-gradient-to-r 
//             from-transparent via-white/70 to-transparent opacity-0 transition-all duration-700
//             group-hover:left-[150%] group-hover:opacity-20"
//           />
//         </span>
//       )}
//       {iconPosition === "left" && icon}

//       <span className="relative z-10">{children || text}</span>

//       {iconPosition === "right" && icon}
//     </button>
//   );
// };

// export default Button;

import React from "react";

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon,
  iconPosition = "right",
  disabled = false,
  ...props
}) => {
  const baseStyle = `
    group
  inline-flex items-center justify-center gap-2
  rounded-full
  font-semibold
  whitespace-nowrap
  select-none
  cursor-pointer
  transition-all duration-300 ease-out
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-violet-500
  focus-visible:ring-offset-2
  disabled:pointer-events-none
  disabled:opacity-60
  `;

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm lg:text-base",
    lg: "px-8 py-3.5 text-base",
  };

  const variants = {
    primary: ` bg-violet-600 text-white shadow-sm hover:bg-violet-700 hover:-translate-y-0.5`,

    secondary: ` bg-white text-gray-900 border border-gray-300 shadow-sm hover:border-secondary
    hover:bg-secondary/90 hover:text-white hover:text-secondary hover:-translate-y-0.5 hover:shadow-md`,
    
    ghost: `bg-transparent text-gray-700 hover:bg-gray-100 hover:text-violet-600`,
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}

      <span>{children || text}</span>

      {icon && iconPosition === "right" && (
        <span className="flex items-center transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;