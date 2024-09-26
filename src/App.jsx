import { useState } from "react";
import "./App.css";
import testimonialsData from "./Components/test.js";
import Spline from "@splinetool/react-spline";
import countapi from "countapi-js";
import { useEffect } from "react";
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

  useEffect(() => {
    countapi
      .visits("sharikdev.live") // Use your namespace directly
      .then((result) => {
        console.log(result.value);
      })
      .catch((error) => {
        console.error("Error fetching visit count:", error.message);
      });
  }, []);

  return (
    <>
      <div className="bg-zinc-100 pt-[8rem] sm:pt-[15rem] relative min-h-screen">
        {/* 3d */}
        <div>
          <Spline
            className="absolute z-30 mxl:-left-72 -top-36 sm:inline-block hidden  md:-left-80 sm:-left-[22rem]  "
            style={{ width: "900px", height: "900px", scale: "0.2" }}
            scene="https://prod.spline.design/HWjSTbL080re0NUk/scene.splinecode"
          />
          <Spline
            className="absolute z-30 mxl:-right-24 top-14 sm:inline-block hidden  xl:-right-24 lg:-right-36 md:-right-40 sm:-right-[10rem] "
            style={{ width: "500px", height: "500px", scale: "0.35" }}
            scene="https://prod.spline.design/xhS-ZgGiuDHZ1Fnb/scene.splinecode"
          />
        </div>

        {/* NAME */}
        <div className="w-full h-64 text-center">
          <div className=" flex flex-col items-center">
            <div className=" bg-lime-300  py-6 px-8 shadow-inner  rounded-2xl w-fit text-4xl sm:text-3xl md:text-4xl xl:text-5xl lxl:text-6xl font-medium mb-4">
              Hey, I'm Sharik
              {/* MD SHARIK */}
            </div>
            <div className="  font-medium text-4xl mt-2 sm:text-3xl md:text-4xl xl:text-5xl lxl:text-6xl">
              A Full Stack Developer
            </div>
          </div>
          <div className="md:w-[60ch] w-[90vw] font-normal xl:text-2xl lxl:text-3xl m-auto mt-10">
            <p>
              Fullstack enthusiast excelling in crafting user-friendly digital
              landscapes. Relishes solving complex challenges with efficiency
              and flair.
            </p>
          </div>
        </div>
        {/* FULLSTACK */}
        <div className="m-auto mt-[6rem] bg-white md:mt-[6rem] rounded-2xl font-medium sm:text-xl sm: w-[90vw] md:text-3xl flex justify-between smd:w-[60vw] items-center py-8 px-10">
          <div>FRONTEND</div>
          <div>BACKEND</div>
          <div>UI/UX</div>
          <div>3D</div>
        </div>
        {/* ABOUT */}
        <div id="about" className="flex justify-center">
          <div className="flex justify-between flex-col sm:items-start sm:ml-0 sm:flex-row sm:w-[90vw] smd:w-[60vw] min-h-[18rem]  sm:mt-24 ">
            <div className="w-[90vw] sm:w-[65%] my-14 flex flex-col justify-between sm:my-0 h-full   md:mb-0 bg-white rounded-2xl px-8 lg:px-14 py-8">
              <h2 className="text-3xl font-semibold">
                Professional Experience
              </h2>
              <h4 className="xl:max-w-[43ch] lxl:min-w-[63ch] overflow-y-hidden text-ellipsis mt-4">
                <div className="list-disc list-inside">
                  <li>Over 10 months of experience at PizeonFly</li>
                  <li>
                    Built multiple scalable and production-ready websites and
                    products
                  </li>
                  <li>Led a team of 4 people</li>
                  <li>
                    Built innovative web solutions and exceptional user
                    experiences
                  </li>
                </div>
              </h4>
              <div className="mt-4">
                <button className="bg-black text-white px-5 rounded-full py-3">
                  Contact Me ~ Its Free
                </button>
              </div>
            </div>
            <div className="w-[90vw] sm:w-[32%] bg-zinc-900  h-full rounded-2xl px-8 lg:px-14 py-8 text-white">
              <h2 className="text-2xl font-medium my-4">Download Resume</h2>
              <p className="xl:max-w-[40ch] text-zinc-400 overflow-ellipsis">
                Want to know more? Download my resume to know more about me.
              </p>
              <a href="MDSHARIK_RESUME.pdf" download>
                <button
                  onClick={() => {
                    console.log("button Clicked");
                  }}
                  className="text-white bg-zinc-800 mt-9  p-4 rounded-full px-6"
                >
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div id="projects">
          {/* PRODHUNT */}
          <div className="bg-white w-[90vw] smd:w-[60vw] min-h-[30rem] smd: m-auto mt-20 rounded-3xl">
            <div className="flex justify-between h-[30%] py-10 px-8 bg ">
              <div className="">
                <div className="text-3xl font-semibold">PRODHUNT</div>
                <div className="text-xl">Chrome Extension</div>
              </div>
              <a
                href="https://chromewebstore.google.com/detail/prodhunt/giopdckkeeonachenpcafdcomeiocelh"
                target="_blank"
              >
                <div className="px-7 py-5 border-2 hover:border-black cursor-pointer rounded-full">
                  ↗
                </div>
              </a>
            </div>
            <div className=" px-4 pb-3 flex flex-col smd:m-auto  xl:flex-row b h-[70%]  justify-between">
              <div className="xl:bg-zinc-100 -translate-y-4 z-10 py-8 flex justify-center m-auto lg:m-0 items-center rounded-xl  xl:w-[55%]">
                <a
                  href="https://chromewebstore.google.com/detail/prodhunt/giopdckkeeonachenpcafdcomeiocelh"
                  target="_blank"
                >
                  <div className="w-full smd:w-fit  smd:h-fit rounded-lg shadow-2xl ">
                    <img
                      width={500}
                      className="rounded-xl "
                      src="PRODHUNT.png"
                      alt="prodhunt"
                    />
                  </div>
                </a>
              </div>
              <div className="w-[98%] mt-8 xl:mt-0 xl:w-[45%] px-4 overflow-y-hidden m-auto xl:m-0 -translate-y-4">
                <div>
                  <h2 className="text-3xl font-semibold mb-2">PRODHUNT</h2>

                  <p className="text-justify truncate smd:text-wrap">
                    prodhunt is a simple and powerful tool that lets you stay
                    updated with the latest and most popular products from
                    Product Hunt. With just one click, you can access the top 50
                    products of the day, complete with their titles,
                    descriptions, categories, and direct links to the
                    ProductHunt page.
                  </p>

                  <div className="flex flex-wrap mt-4 overflow-y-hidden">
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      Cheerio.js
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      Express
                    </span>

                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      Node
                    </span>

                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      JavaScript
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      HTML
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FIC */}
          <div className="bg-white w-[90vw] smd:w-[60vw] min-h-[30rem] smd: m-auto mt-20 rounded-3xl">
            <div className="flex justify-between h-[30%] py-10 px-8 bg ">
              <div className="">
                <div className="text-3xl font-semibold">First India Credit</div>
                <div className="text-xl">A loan management CRM</div>
              </div>
              <a href="https://crm.firstindiacredit.com/" target="_blank">
                <div className="px-7 py-5 border-2 hover:border-black cursor-pointer rounded-full">
                  ↗
                </div>
              </a>
            </div>
            <div className=" px-4 pb-3 flex flex-col smd:m-auto  xl:flex-row b h-[70%]  justify-between">
              <div className="xl:bg-zinc-100 -translate-y-4 z-10 py-8 flex justify-center m-auto lg:m-0 items-center rounded-xl  xl:w-[55%]">
                <a href="https://crm.firstindiacredit.com/" target="_blank">
                  <div className="w-full smd:w-fit  smd:h-fit rounded-lg shadow-2xl ">
                    <img
                      width={500}
                      className="rounded-xl "
                      src="Img3.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div className="w-[98%] mt-8 xl:mt-0 xl:w-[45%] px-4 overflow-y-hidden m-auto xl:m-0 -translate-y-4">
                <div>
                  <h2 className="text-3xl font-semibold mb-2">FIC</h2>

                  <p className="text-justify truncate smd:text-wrap">
                    FIC is a laon management web based CRM app developed on the
                    MERN stack. It offers users a seamless experience to apply
                    for loans, check loan status and get notifications. With its
                    user friendly interface and robust backend infrastructure,
                    FIC simplifies the loan process & provides a wide selection
                    of loans.
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
                      JWT
                    </span>
                    <span className="bg-zinc-100 px-5 py-2 mr-5 rounded-full mb-2 ">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carrento */}
          <div className="bg-white w-[90vw] smd:w-[60vw] min-h-[30rem] smd: m-auto mt-20 rounded-3xl">
            <div className="flex justify-between h-[30%] py-10 px-8 bg ">
              <div className="">
                <div className="text-3xl font-semibold">Carrento</div>
                <div className="text-xl">A car rental web app</div>
              </div>
              <a href="https://car-rental-chi-tan.vercel.app/" target="_blank">
                <div className="px-7 py-5 border-2 hover:border-black cursor-pointer rounded-full">
                  ↗
                </div>
              </a>
            </div>
            <div className=" px-4 pb-3 flex flex-col smd:m-auto  xl:flex-row b h-[70%]  justify-between">
              <div className="xl:bg-zinc-100 py-8 -translate-y-4 z-10 flex justify-center m-auto lg:m-0 items-center rounded-xl  xl:w-[55%]">
                <a
                  href="https://car-rental-chi-tan.vercel.app/"
                  target="_blank"
                >
                  <div className="w-full smd:w-fit  smd:h-fit rounded-lg shadow-2xl ">
                    <img
                      width={500}
                      className="rounded-xl "
                      src="Img.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div className="w-[98%] mt-8 xl:mt-0 xl:w-[45%] px-4 overflow-y-hidden m-auto xl:m-0 -translate-y-4">
                <div>
                  <h2 className="text-3xl font-semibold mb-2">Car Rental</h2>

                  <p className="text-justify truncate smd:text-wrap">
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
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Crypto-256 */}
          <div className="bg-white w-[90vw] smd:w-[60vw] min-h-[30rem] smd: m-auto mt-20 rounded-3xl">
            <div className="flex justify-between h-[30%] py-10 px-8 bg ">
              <div className="">
                <div className="text-3xl font-semibold">Crypto-256</div>
                <div className="text-xl">A crypto wallet web app</div>
              </div>
              <a href="https://crypto-256.vercel.app/" target="_blank">
                <div className="px-7 py-5 border-2 hover:border-black cursor-none rounded-full">
                  ↗
                </div>
              </a>
            </div>
            <div className=" px-4 pb-3 flex flex-col smd:m-auto  xl:flex-row b h-[70%]  justify-between">
              <div className="xl:bg-zinc-100 py-8 -translate-y-4 z-10 flex justify-center m-auto lg:m-0 items-center rounded-xl  xl:w-[55%]">
                <a href="https://crypto-256.vercel.app/" target="_blank">
                  <div className="w-full smd:w-fit  smd:h-fit rounded-lg shadow-2xl ">
                    <img
                      width={500}
                      className="rounded-xl "
                      src="Img2.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <div className="w-[98%] mt-8 xl:mt-0 xl:w-[45%] px-4 overflow-y-hidden m-auto xl:m-0 -translate-y-4">
                <div>
                  <h2 className="text-3xl font-semibold mb-2">Crypto Wallet</h2>

                  <p className="text-justify truncate smd:text-wrap">
                    Crypto-256 is a crypto wallet web app built on the MERN
                    stack, offering a secure platform to store and manage your
                    cryptocurrency assets. With robust encryption and intuitive
                    user interface, Crypto-256 provides a seamless experience
                    for users to securely store, send, and receive various
                    cryptocurrencies.
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
          <a
            href="https://github.com/MD-Sharik?tab=repositories"
            target="_blank"
          >
            <div className="bg-zinc-900 cursor-pointer hover:bg-zinc-800 transition-all hover:font-semibold mt-10 text-white w-[90vw] smd:w-[60vw] m-auto rounded-full h-14 flex justify-center items-center">
              See All Work
            </div>
          </a>
        </div>
        {/* Testimonial */}
        <div
          id="testimonial"
          className="mt-16 m-auto rounded-3xl min-h-[20rem] flex items-center w-[90vw] py-4 smd:py-0 smd:w-[60vw] bg-white"
        >
          <div className="flex justify-between items-center h-full px-2 smd:px-10">
            <button
              onClick={prevTestimonial}
              className="bg-gray-200 rounded-full px-2 hover:bg-gray-300 transition-all"
            >
              {"<"}
            </button>
            <div className="text-center smd:text-center">
              <div className="text-sm smd:text-2xl px-4">
                {testimonials[currentIndex].testimonial}
              </div>
              <div className="mt-4 text-sm smd:text-xl">
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
        <div
          id="contact"
          className="w-[90vw] smd:w-[60vw] flex justify-center flex-col items-center bg-white min-h-[25rem] rounded-3xl m-auto mt-14"
        >
          <div className="text-2xl sm:text-3xl smd:text-5xl font-medium border-2 px-4 py-3 rounded-full">
            Want to Start
          </div>
          <div className="text-2xl sm:text-3xl smd:text-5xl font-medium mt-6 border-2 px-4 py-3 rounded-full">
            a Project?
          </div>
          <a href="mailto:md.sharik5012@gmail.com" className="email-button">
            <div className="text-lg smd:text-2xl mt-8 bg-lime-300 w-[10rem] smd:w-[12rem] cursor-pointer py-2 px-1 rounded-full flex ">
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
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
