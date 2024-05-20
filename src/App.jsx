import { useState } from "react";
import "./App.css";
import testimonialsData from "./Components/test.js";
import Spline from "@splinetool/react-spline";

function App() {
  const testimonials = testimonialsData();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="bg-zinc-100 pt-[15rem] relative min-h-screen">
        {/* 3d */}
        <Spline
          className="absolute z-30 -left-24 -top-24 "
          style={{ width: "850px", height: "850px", scale: "0.25" }}
          scene="https://prod.spline.design/HWjSTbL080re0NUk/scene.splinecode"
        />
        <Spline
          className="absolute z-30 -right-24 -top-16 "
          style={{ width: "780px", height: "780px", scale: "0.4" }}
          scene="https://prod.spline.design/xhS-ZgGiuDHZ1Fnb/scene.splinecode"
        />
        {/* NAME */}
        <div className="  w-full h-64 text-center">
          <div className=" flex flex-col items-center">
            <div className=" bg-lime-300 py-6 px-5 rounded-2xl w-fit text-6xl font-medium">
              Hey, I'm Sharik
            </div>
            <div className=" text-6xl font-medium">Full Stack Developer</div>
          </div>
          <div className="md:w-[60ch] font-normal text-2xl m-auto mt-10">
            <p>
              Fullstack enthusiast excelling in crafting user-friendly digital
              landscapes. Relishes solving complex challenges with efficiency
              and flair.
            </p>
          </div>
        </div>
        {/* FULLSTACK */}
        <div className="m-auto bg-white md:mt-[6rem] rounded-2xl font-medium text-3xl flex justify-between md:w-[60vw] items-center py-8 px-10">
          <div>FRONTEND</div>
          <div>BACKEND</div>
          <div>UI/UX</div>
          <div>3D</div>
        </div>
        {/* ABOUT */}
        <div className="flex justify-between md:w-[60vw] h-[20rem] m-auto md:mt-24 ">
          <div className="w-[58%] bg-white rounded-2xl px-14 py-8">
            <h2 className="text-3xl font-semibold">Professional Experience</h2>
            <p className="md:w-[50ch] mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quos
              temporibus eum ea, recusandae dolor doloribus repellat rem
              excepturi tempora, inventore dolorem neque odio? Fugiat illum
              quaerat nesciunt animi eaque. Sapiente culpa maiores incidunt
              dolorum consequatur voluptatem amet consectetur explicabo voluptas
              sequi,
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              quasi, nobis, at placeat accusamus voluptatem eum unde alias
              cumque voluptates, natus molestias vitae nulla quo quidem
              doloremque debitis repellat quia.
            </p>
            <button className="text-white bg-zinc-800 mt-9 p-4 rounded-full px-6">
              Checkout ↗
            </button>
          </div>
        </div>
        {/* Projects */}
        <div>
          <div className="bg-white md:w-[60vw] h-[30rem] m-auto mt-48 rounded-3xl">
            <div className="flex justify-between h-[30%] py-10 px-8 bg ">
              <div className="">
                <div className="text-3xl font-semibold">Carrento</div>
                <div className="text-xl">A car Rental Website</div>
              </div>
              <a href="https://car-rental-chi-tan.vercel.app/" target="_blank">
                <div className="px-7 py-5 border-2 hover:border-black cursor-pointer rounded-full">
                  ↗
                </div>
              </a>
            </div>
            <div className=" px-4 pb-3  flex b h-[70%]  justify-between">
              <div className="bg-zinc-100 -translate-y-4 z-10 flex justify-center items-center rounded-xl w-[55%]">
                <div className="bg-white w-fit h-fit rounded-lg shadow-2xl ">
                  <img
                    width={500}
                    className="rounded-xl "
                    src="https://md-sharik.github.io/assets/Car.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[45%] px-4 -translate-y-4">
                <div>
                  <h2 className="text-3xl font-semibold mb-2">
                    A project about Car Rental
                  </h2>
                  <p className="text-justify">
                    Carrento is a car rental web app developed on the MERN
                    stack. It offers users a seamless experience to browse,
                    compare, and book rental cars effortlessly. With its user
                    friendly interface and robust backend infrastructure,
                    Carrento simplifies the car rental process, providing a wide
                    selection of vehicles, flexible booking options.
                  </p>
                  <div className="flex flex-wrap mt-4 overflow-y-hidden">
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      React
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      MongoDB
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      Node
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      Express
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      JavaScript
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      Jwt
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white md:w-[60vw] h-[30rem] m-auto mt-8 rounded-3xl">
            <div className="flex justify-between h-[30%] py-10 px-8  ">
              <div className="">
                <div className="text-3xl font-semibold">Crypto-256</div>
                <div className="text-xl">A crypto currency wallet</div>
              </div>
              <a href="https://crypto-256.vercel.app/" target="_blank">
                <div className="px-7 py-5 border-2 hover:border-black cursor-pointer transition-all rounded-full">
                  ↗
                </div>
              </a>
            </div>
            <div className=" px-4 pb-3 flex  h-[70%]  justify-between">
              <div className="bg-zinc-100 -translate-y-4 z-10 flex justify-center items-center rounded-xl w-[55%]">
                <div className="bg-white w-fit h-fit rounded-lg shadow-2xl ">
                  <img
                    width={500}
                    className="rounded-xl "
                    src="Img2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[45%] px-4 -translate-y-4">
                <div>
                  <h2 className="text-3xl font-semibold mb-2">
                    A project about Crypto Wallet
                  </h2>
                  <p className="text-justify">
                    Crypto-256 is a crypto wallet web app built on the MERN
                    stack, offering a secure platform to store and manage your
                    cryptocurrency assets. With robust encryption and intuitive
                    user interface, Crypto-256 provides a seamless experience
                    for users to securely store, send, and receive various
                    cryptocurrencies.
                  </p>
                  <div className="flex flex-wrap mt-4 overflow-y-hidden">
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2">
                      React
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2">
                      MongoDB
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2">
                      Node
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2">
                      Express
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2">
                      JavaScript
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2">
                      Jwt
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/MD-Sharik?tab=repositories"
            target="_blank"
          >
            <div className="bg-zinc-900 cursor-pointer hover:bg-zinc-800 transition-all hover:font-semibold mt-10 text-white md:w-[60vw] m-auto rounded-full h-14 flex justify-center items-center">
              See All Work
            </div>
          </a>
        </div>
        {/* Testimonial */}
        <div className="mt-16 m-auto rounded-3xl h-[20rem] md:w-[60vw] bg-white">
          <div className="flex justify-between items-center h-full px-10">
            <button
              onClick={prevTestimonial}
              className="bg-gray-200 rounded-full px-2 hover:bg-gray-300 transition-all"
            >
              {"<"}
            </button>
            <div className="text-center">
              <div className="text-2xl px-4">
                {testimonials[currentIndex].testimonial}
              </div>
              <div className="mt-4 text-xl">
                <strong>{testimonials[currentIndex].name}</strong> -{" "}
                {testimonials[currentIndex].company}
              </div>
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-gray-200 rounded-full px-2 hover:bg-gray-300 transition-all"
            >
              {">"}
            </button>
          </div>
        </div>
        {/* HIRE ME*/}
        <div className="md:w-[60vw] flex justify-center flex-col items-center bg-white min-h-[25rem] rounded-3xl m-auto mt-14">
          <div className="text-5xl font-medium border-2 px-4 py-3 rounded-full">
            Want to Start
          </div>
          <div className="text-5xl font-medium mt-6 border-2 px-4 py-3 rounded-full">
            a Project?
          </div>
          <div className="text-2xl mt-8 bg-lime-300 w-[12rem] cursor-pointer py-2 px-1 rounded-full flex ">
            <div className="flex items-center pl-4 w-[80%] justify-center">
              <div>Lets's Talk</div>
            </div>
            <div className="w-[20%]">
              <div className="rounded-full flex items-start justify-end">
                <div className="bg-white px-2 py-2 transition-all rounded-full">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/circled-right-2.png"
                    alt="circled-right-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
