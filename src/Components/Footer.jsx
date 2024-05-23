import React from "react";

function Footer() {
  return (
    <div className=" smd:w-full bg-zinc-100 pt-20 flex justify-center p-3 ">
      <div className="bg-white flex justify-between flex-col md:flex-row items-center min-h-28 w-[90vw] smd:w-[60vw] rounded-3xl px-10 py-7">
        <div className=" md:mb-0 mb-8">
          <h2 className="text-center text-zinc-600">Hire Me</h2>
          <a href="mailto:md.sharik5012@gmail.com">
            <h3>md.sharik5012@gmail.com</h3>
          </a>
        </div>
        <div className="cursor-pointer md:mb-0 mb-8 transition-all hover:scale-105 rounded-full border border-zinc-300 min-w-10 min-h-10 font-bold flex items-center justify-center bg-yellow-300  ">
          N.
        </div>
        <div>
          <h2 className="text-zinc-600 text-center ">Follow Me</h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/md-sharik/" target="_blank">
              <div>LinkedIn</div>
            </a>
            <a href="https://github.com/MD-Sharik" target="_blank">
              <div>GitHub</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
