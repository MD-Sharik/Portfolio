import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon, FaLink, FaRegEye, FaEyeDropper, FaBullseye } from "react-icons/fa";
import { FaEye, FaEyeLowVision, FaPeopleArrows, FaPeopleGroup, FaPeopleLine, FaPerson } from "react-icons/fa6";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/hit/sharikdev.live/visits');
        const data = await response.json();
        setVisits(data.value);
      } catch (error) {
        console.error('Error fetching visit count:', error);
        setVisits(0);
      }
    };

    fetchVisits();
  }, []);

  return (
    <div className={`min-h-16 w-[90vw] smd:w-[60vw] ${isDarkMode ? 'bg-[#27272A]/80 text-white' : 'bg-white/80 text-black'} backdrop-blur-md px-4 border py-4 rounded-full translate-x-[-50%] translate-y-[-50%] top-[4rem] left-[50%] fixed flex z-50 justify-between items-center`}>
      <div className="flex gap-1 items-center"><FaEye/>: {visits}</div>
      <nav>
        <ul className="md:flex lg:gap-8 hidden">
          <a href="#about">
            <li className="cursor-pointer">About</li>
          </a>
          <a href="#projects">
            <li className="cursor-pointer">Projects</li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer">Contact</li>
          </a>
          <a href="#testimonial">
            <li className="cursor-pointer">Testimonial</li>
          </a>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-[#27272A] text-white' : 'bg-gray-100 text-black'}`}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        <a href="https://api.whatsapp.com/send/?phone=%2B919582375386&text=Hello,%20Sharik&type=phone_number&app_absent=1">
          <button className={`${isDarkMode ? 'bg-[#18181B] hover:bg-[#27272A]' : 'bg-zinc-900 hover:bg-zinc-800'} transition-all px-4 py-4 text-white hidden sm:flex font-semibold text-sm rounded-full`}>
            Contact Me
          </button>
          <div className={`${isDarkMode ? 'bg-[#18181B]' : 'bg-black'} px-[0.65rem] py-[0.7rem] sm:hidden rounded-full flex items-center justify-center`}>
            <img
              className="block h-4 w-5 sm:hidden translate-x-[1px]"
              src="https://img.icons8.com/android/96/000000/paper-plane.png"
              alt="c"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Header;
