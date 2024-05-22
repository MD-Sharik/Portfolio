import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    const selectedPage = event.target.value;
    navigate(selectedPage);
  };

  return (
    <>
      {clicked && (
        <div className="fixed z-50 top-[6.5rem] py-4 w-[90vw] rounded-t-md text-right px-7">
          <button className="bg-yellow-300 px-5 py-2 rounded-xl shadow-lg">
            Contact Me
          </button>
        </div>
      )}
      <div className="min-h-16 w-[90vw] smd:w-[60vw] bg-white/30 backdrop-blur-md px-4 border py-4 text-black rounded-full translate-x-[-50%] translate-y-[-50%] top-[4rem] left-[50%] fixed flex z-50 justify-between">
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
        <div className="h-10 hidden min-w-40 sm:flex gap-14 items-center">
          <div>👁️ 1.2K</div>
          <a href="mailto:md.sharik5012@gmail.com" className="email-button">
            <button className="bg-yellow-300 px-4 py-4 font-semibold text-sm rounded-full">
              Contact Me ~ Email
            </button>
          </a>
        </div>
        <div
          className="flex items-center mr-5 sm:hidden "
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Header;
