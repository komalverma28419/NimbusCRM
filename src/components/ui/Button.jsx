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
  const baseStyle = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold
  whitespace-nowrap select-none cursor-pointer transition-all duration-300 ease-out
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 
  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60`

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm lg:text-base",
    lg: "px-8 py-3.5 text-base",
  }

  const variants = {
    primary: `bg-violet-600 text-white shadow-sm hover:bg-violet-700 hover:-translate-y-0.5`,

    secondary: `bg-white text-gray-900 border border-gray-300 shadow-sm hover:border-secondary
    hover:bg-secondary/90 hover:text-white hover:text-secondary hover:-translate-y-0.5 hover:shadow-md`,
    
    tertiary: `bg-white text-gray-700 hover:bg-gray-100 hover:text-violet-600`,
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${baseStyle} ${sizes[size]} ${variants[variant]} `}
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