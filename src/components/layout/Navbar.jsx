import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import { navItems } from "../../data/NavbarData";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleClose = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-12 flex items-center justify-between">
        
        <a href="#hero">
          <img src={logo} alt="NimbusCRM" className="h-10 lg:h-12 object-contain"/>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="font-medium text-gray-700 transition-colors duration-300 hover:text-violet-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button text="Start Free Trial" />
        </nav>

        {/* Mobile Menu */}
        <div className="block md:hidden" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="cursor-pointer"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen
            ? "max-h-96 opacity-100 py-4"
            : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <nav className="px-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  onClick={handleClose}
                  className="block py-2 font-medium text-gray-700 transition-colors duration-300 hover:text-violet-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-5">
            <Button
              text="Start Free Trial"
              className="w-full justify-center"
            />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar