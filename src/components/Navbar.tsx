import React, { useState, useEffect, useRef } from 'react';
import { STYLES } from '../styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const subNavWrapperRef = useRef<HTMLUListElement>(null);
  const closeOpenIconWrapperRef = useRef<HTMLDivElement>(null);
  const navbarToggleHandle = () => {
    setShowNavbar((prev) => !prev);
  };

  useEffect(() => {
    const closeMobileNavHandle = ({ target }: MouseEvent) => {
      if (closeOpenIconWrapperRef.current?.contains(target as Node)) {
        setShowNavbar((prev) => !prev);
        return;
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener('click', closeMobileNavHandle);

    return () => window.removeEventListener('click', closeMobileNavHandle);
  }, []);

  return (
    <nav className="w-full bg-navbarColor sticky top-0 left-0 z-[50]">
      <div
        className={`relative ${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} h-[70px] flex justify-between items-center`}
      >
        <Link to="/">
          <div className="w-[40px] h-[40px] bg-blue-500">
            <h2>SOP</h2>
          </div>
        </Link>
        {/* desktop Navlinks */}
        <ul className={`hidden sm:flex gap-[20px] items-center`}>
          <Link to="/aboutUs">
            <li>
              <p className="font-poppins text-white text-[16px] font-semibold">
                AboutUs
              </p>
            </li>
          </Link>
          <Link to="/classes">
            <li>
              <p className="font-poppins text-white text-[16px] font-semibold">
                Classes
              </p>
            </li>
          </Link>
          <Link to="/aboutUs">
            <li>
              <p className="font-poppins text-white text-[16px] font-semibold">
                Profile
              </p>
            </li>
          </Link>
          <Link to="/aboutUs">
            <li>
              <p className="font-poppins text-white text-[16px] font-semibold">
                Dashboard
              </p>
            </li>
          </Link>
          <button
            className="text-white font-semibold border border-[#C7C0AD] py-[5px] px-[10px] 
          rounded-md text-[#C7C0AD] text-[15px] hover:bg-[#C7C0AD] hover:text-black hover:border-transparent duration-300"
          >
            SignIn
          </button>
        </ul>
        {/* smallScreenNavLinks */}
        <div ref={closeOpenIconWrapperRef} className="cursor-pointer sm:hidden">
          {showNavbar ? (
            <RxCross2 className="w-[30px] h-[30px] text-white" />
          ) : (
            <GiHamburgerMenu className="w-[30px] h-[30px] text-white" />
          )}
        </div>
        <ul
          ref={subNavWrapperRef}
          className={`${
            !showNavbar && 'opacity-0 pointer-events-none'
          } absolute ${
            showNavbar ? 'top-[80px]' : 'top-[50px]'
          } z-50 duration-500 md:right-[15px] right-[20px] w-[250px] 
          bg-green-500 rounded-md p-[10px] bg-navbarColor shadow-lg shadow-indigo-500/50`}
        >
          <Link to="/aboutUs">
            <li className="py-[8px] px-[4px] font-poppins text-white hover:bg-gray-200 rounded-sm duration-200 cursor-pointer hover:text-black">
              About Us
            </li>
          </Link>

          <Link to="/classes">
            <li className="py-[8px] px-[4px] font-poppins text-white hover:bg-gray-200 rounded-sm duration-200 cursor-pointer hover:text-black">
              Classes
            </li>
          </Link>
          <Link to="/profile">
            <li className="py-[8px] px-[4px] font-poppins text-white hover:bg-gray-200 rounded-sm duration-200 cursor-pointer hover:text-black">
              Your Profile
            </li>
          </Link>
          {/* admin Side */}
          <Link to="/adminDashboard">
            <li className="py-[8px] px-[4px] font-poppins text-white hover:bg-gray-200 rounded-sm duration-200 cursor-pointer hover:text-black">
              Admin Dashboard
            </li>
          </Link>

          <button
            className="mt-[10px] w-full text-white font-semibold border border-[#C7C0AD] py-[5px] px-[10px] 
          rounded-md text-[#C7C0AD] text-[15px] hover:bg-[#C7C0AD] hover:text-black hover:border-transparent duration-300"
          >
            SignIn
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
