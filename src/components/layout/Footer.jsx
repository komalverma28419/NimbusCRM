import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { footerLinks, socialLinks } from "../../data/footerData";


const Footer = () => {
  return (
    <footer className="py-6 md:py-10 xl:py-14 ">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className=" flex flex-col  gap-4 md:gap-10 md:flex-row md:items-center md:justify-between">

          <NavLink to="/">
            <img src={logo} alt="NimbusCRM logo" className="h-10 mx-auto md:mx-0 object-contain"/>
          </NavLink>

          <nav>
            <ul className=" flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium
             text-gray-600">
              {footerLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors duration-300 hover:text-violet-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.link}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border
                  border-gray-200 bg-white text-gray-500 transition-all duration-300
                  hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-600 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © 2026 NimbusCRM. All rights reserved.
        </div>

      </div>
    </footer>
  )
}


export default Footer;