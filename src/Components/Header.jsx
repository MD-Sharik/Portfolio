import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    const selectedPage = event.target.value;
    navigate(selectedPage);
  };

  return (
    <div className="min-h-16 md:w-[60vw] bg-white/30 backdrop-blur-md px-4 border py-4 text-black rounded-full translate-x-[-50%] translate-y-[-50%] top-[4rem] left-[50%] fixed flex z-50 justify-between">
      <div className="h-10 w-40 flex gap-6 items-center">
        <div className="rounded-full border transition-all hover:scale-105 cursor-pointer border-zinc-300 min-w-10 min-h-10 font-bold flex items-center justify-center bg-yellow-300">
          N.
        </div>
        <div className="text-zinc-200">|</div>
        <div className="cursor-pointer">
          <select
            name="pages"
            id="p"
            className="px-4 py-2 bg-transparent"
            onChange={handleNavigation}
          >
            <option value="/" className="bg-transparent">
              Home
            </option>
            <option value="/about" className="bg-transparent">
              About
            </option>
          </select>
        </div>
      </div>
      <div className="h-10 min-w-40 flex gap-14 items-center">
        <div>👁️ 1.2K</div>
        <button className="bg-yellow-300 px-4 py-4 font-semibold text-sm rounded-full">
          Contact Me ~ Email
        </button>
      </div>
    </div>
  );
}

export default Header;
