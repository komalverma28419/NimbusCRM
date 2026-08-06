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
  };

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
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-3">

      
        <a href="#hero"><img src={logo} alt="NimbusCRM" className="h-10 lg:h-12 object-contain"/></a>

        <nav className="hidden md:block">
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
        </nav>

        <div className="hidden md:block">
          <a href="#hero"><Button text="Start Free Trial" /></a>
        </div>

        <div className="md:hidden relative" ref={menuRef}>
          <button onClick={toggleMenu}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>

          <div
            className={`absolute right-0 top-14 w-64 rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}`}>
            <nav className="p-5">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      onClick={handleClose}
                      className="block font-medium text-gray-700 hover:text-violet-600"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <a href="#hero" onClick={handleClose}>
                <Button
                  text="Start Free Trial"
                  className="w-full mt-6 justify-center"
                />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;