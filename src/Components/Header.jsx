import React from "react";

function Header() {
  return (
    <div className="min-h-16 w-[90vw] smd:w-[60vw] bg-white/80 backdrop-blur-md px-4 border py-4 text-black rounded-full translate-x-[-50%] translate-y-[-50%] top-[4rem] left-[50%] fixed flex z-50 justify-between items-center">
      <div>Visits 👁️: {107 + Math.floor(Math.random(10) * 1000)}</div>
      <nav>
        <ul className="md:flex lg:gap-8 hidden  ">
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

      <a href="mailto:md.sharik5012@gmail.com" className="email-button">
        <button className="bg-zinc-900 transition-all hover:bg-zinc-800 px-4 py-4 text-white hidden sm:flex font-semibold text-sm rounded-full">
          Contact Me
        </button>
        <div className="bg-black px-[0.65rem] py-[0.7rem] sm:hidden rounded-full flex items-center justify-center">
          <img
            className="block h-4 w-5 sm:hidden translate-x-[1px]"
            src="https://img.icons8.com/android/96/000000/paper-plane.png"
            alt="c"
          />
        </div>
      </a>
    </div>
  );
}

export default Header;
