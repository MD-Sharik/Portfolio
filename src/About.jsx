import React from "react";

function About() {
  return (
    <div>
      <div className="flex justify-between md:w-[60vw] h-[20rem] m-auto md:mt-24 ">
        <div className="w-[58%] bg-white rounded-2xl px-14 py-8">
          <h2 className="text-3xl font-semibold">Professional Experience</h2>
          <p className="md:w-[50ch] mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quos
            temporibus eum ea, recusandae dolor doloribus repellat rem excepturi
            tempora, inventore dolorem neque odio? Fugiat illum quaerat nesciunt
            animi eaque. Sapiente culpa maiores incidunt dolorum consequatur
            voluptatem amet consectetur explicabo voluptas sequi,
          </p>
          <div className="mt-4">
            <button className="bg-black text-white px-5 rounded-full py-3">
              Contact Me ~ Its Free
            </button>
          </div>
        </div>
        <div className="w-[39%] bg-zinc-900 rounded-2xl p-5 text-white">
          <h2 className="text-2xl font-medium px-10 py-4">About Nouvous.</h2>
          <p className="md:w-[40ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi,
            nobis, at placeat accusamus voluptatem eum unde alias cumque
            voluptates, natus molestias vitae nulla quo quidem doloremque
            debitis repellat quia.
          </p>
          <button className="text-white bg-zinc-800 mt-9 p-4 rounded-full px-6">
            Checkout ↗
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
