import React, { useState, useEffect } from "react";
import countapi from "countapi-js";

function Header() {
  const [view, setView] = useState(0);

  useEffect(() => {
    countapi.visits().then((result) => {
      console.log(result.value);
    });
  }, []);

  return (
    <div className="min-h-16 w-[90vw] smd:w-[60vw] bg-white/30 backdrop-blur-md px-4 border py-4 text-black rounded-full translate-x-[-50%] translate-y-[-50%] top-[4rem] left-[50%] fixed flex z-50 justify-between">
      <div className="h-10 w-40 flex gap-6 items-center">
        <div className="rounded-full border transition-all hover:scale-105 cursor-pointer border-zinc-300 min-w-10 min-h-10 font-bold flex items-center justify-center bg-yellow-300">
          N.
        </div>
        <div className="text-zinc-200">|</div>
        <div className="cursor-pointer">Home</div>
      </div>
      <div className="h-10 min-w-40 gap-3 justify-end sm:gap-14 flex items-center">
        <div>👁️ {105 + Math.floor(Math.random(1) * 1000)}</div>
        <a href="mailto:md.sharik5012@gmail.com" className="email-button">
          <button className="bg-yellow-300 px-4 py-4 hidden sm:flex font-semibold text-sm rounded-full">
            Contact Me ~ Email
          </button>
          <div className="bg-yellow-300 px-[0.65rem] py-[0.7rem] sm:hidden rounded-full flex items-center justify-center">
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
