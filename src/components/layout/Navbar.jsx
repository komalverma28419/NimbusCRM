import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { navItems } from '../../data/NavbarData'
import Button from '../ui/Button'
import { Menu, X } from 'lucide-react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const menuRef = useRef(null)
  const location = useLocation()


  const handleClose = () =>{
    setIsOpen(false)
  }

  useEffect(() =>{
    setIsOpen(false)
  },[location.pathname])

  useEffect(() =>{
    const handleClick = (e) => {
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  },[])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-xl transition-all duration-300">      <div className='max-w-7xl w-full h-full mx-auto  px-7 lg:px-12 xl:px-14 py-3 flex items-center justify-between'>
        <NavLink to='/'>
          <img src={logo} alt="logo" className='h-10 lg:h-14 w-auto object-contain'/>
        </NavLink>

        <nav className='hidden md:flex items-center gap-4 xl:gap-6'>
          <ul className='flex items-center gap-6 xl:gap-8'>
            {navItems.map((item) =>(
            <li key={item.name}>
              <NavLink  to={item.path} className={({isActive}) => ` font-medium text-sm 
              lg:text-base ${isActive ? "text-primary" :"text-gray-900 hover:text-primary"}`}>
                {item.name}
              </NavLink>
            </li>
          ))}
          </ul>
        </nav>
        
        <div className='hidden md:flex'>
            <Link to='/free-trial'><Button text="Start Free Trial" size='md'/></Link>
        </div>

         {/* mobile-menu */}

        <div className='block md:hidden' ref={menuRef} >
            <div className='flex gap-6'>
                <button onClick={toggleMenu}  
                aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}
                className=' cursor-pointer'> {isOpen ? (<X/>) : (<Menu/>)}
                </button>
            </div>
            <div 
                className={`absolute top-full left-0 w-full bg-white transition-all duration-300 
                    ease-in-out shadow-lg border-t border-gray-100 origin-top md:hidden overflow-hidden
                     ${isOpen ? 'max-h-125 opacity-100 py-4 scale-y-100' : 'max-h-0 opacity-0 py-0 scale-y-95'
                }`}
                >
                <nav className='flex flex-col gap-4 px-6'>
                    <ul className='flex flex-col gap-3'>
                    {navItems.map((item) => (
                        <li key={item.name}>
                        <NavLink to={item.path} className={({isActive}) => `font-medium text-sm 
                        ${isActive ? "text-primary" :"text-gray-900 hover:text-primary"}`} >
                            {item.name}
                        </NavLink>
                        </li>
                    ))}
                    </ul>

                    <div className="pt-2">
                    <Link to='/free-trial' className="w-full" >
                        <Button text="Start Free Trial" className='font-bold w-full justify-center' shine
                        onClick={handleClose}/>
                    </Link>
                    </div>

                </nav>
            </div>
      </div>

      </div>    
    </header>
  )
}

export default Navbar
