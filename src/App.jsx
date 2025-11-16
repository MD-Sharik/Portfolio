import { useState } from "react";
import "./App.css";
import testimonialsData from "./Components/test.js";
import Footer from "./Components/Footer.jsx";
import { useTheme } from "./context/ThemeContext";
import { FaFileDownload } from "react-icons/fa";

function App() {
  const testimonials = testimonialsData();
  const { isDarkMode } = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
const groups = [
    {
      title: "FRONTEND",
      items: [
        "React",
        "React Native",
        "Next.js",
        "Redux",
        "Tailwind",
        "JoyUI",
        "AntD",
        "MUI",
        "Shadcn",
        "Bootstrap",
      ],
    },
    {
      title: "BACKEND & DB",
      items: [
        "Node.js",
        "Express",
        "REST APIs",
        "GraphQL",
        "Redis",
        "BullMQ",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "JWT",
        "Zod",
      ],
    },
    {
      title: "DEVOPS & INFRA",
      items: [
        "Git",
        "Docker",
        "AWS EC2",
        "Azure VM",
        "Nginx",
        "Linux",
        "Azure Blob Storage",
        "Ngrok",
        "LDAPjs",
        "Entra ID / Microsoft AD",
      ],
    },
    {
      title: "AI / TOOLS / MISC",
      items: [
        "Generative AI",
        "Gemini",
        "React Native",
        "JoyUI",
        "Shadcn",
        "Jwt",
        "Ngrok",
      ],
    },
    {
      title: "Languages",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "Java",
        
      ],
    },
  ];

const projectList = [
  {
      title: "Repurpose",
      subtitle: "Turn AI ideas into shorts",
      img: "repurpose.png",
      href: "https://repurpose.nouvous.com",
      desc:
        "Repurpose is a platform that turns AI ideas into engaging short videos quickly and easily.",
      tags: ["AI", "Shadcn", "React", "Express", "Node", "Postgresql", "Redis","BullMQ"],
    },{
      title: "SuperDark",
      subtitle: "Brightness control app for mobile",
      img: "superdark.png",
      href: "https://superdark.nouvous.com",
      desc:
        "Super Dark turns your phone into a midnight ninja. It reduces screen brightness beyond default limits for comfortable night use.",
      tags: ["Kotlin", "Jetpack Compose","Android"],
    },  
   {
      title: "FullCleaner",
      subtitle: "PC Cleaner & antivirus",
      img: "cleaner.png",
      href: "https://cleaner.nouvous.com",
      desc:
        "FullCleaner is a PC cleaner and antivirus software designed to keep your computer running smoothly and securely.",
      tags: ["Python", "Tkinter", "React", "Paypal", "Express", "Node", "Postgresql"],
    },
  // {
  //     title: "AllMytab",
  //     subtitle: "Your browser on steroids",
  //     img: "Allmytab.png",
  //     href: "https://allmytab.com",
  //     desc:
  //       "AllMyTab is a Chrome extension built to enhance the Google experience and help Gen Z interact with the web faster.",
  //     tags: ["AI", "Tailwind", "React", "JavaScript", "Drag & Drop", "Firebase"],
  //   },
    // {
    //   title: "Hisaabkaro",
    //   subtitle: "An expense management & finance tracker",
    //   img: "Allmytab.png",
    //   href: "https://hisaabkaro.com",
    //   desc:
    //     "Hisaabkaro makes expense tracking smooth with a clean UI, fast actions, and mobile-first design.",
    //   tags: ["AI", "Tailwind", "React", "JavaScript", "Firebase"],
    // },
    // {
    //   title: "Cred",
    //   subtitle: "Password Manager",
    //   img: "Cred.png",
    //   href: "https://cred.pizeonfly.com",
    //   desc:
    //     "Cred is a fast, simple and modern password manager designed for seamless daily use.",
    //   tags: ["AI", "Tailwind", "React", "JavaScript", "Firebase"],
    // },
    // {
    //   title: "OneSubClick",
    //   subtitle: "Convert subtitles into all languages",
    //   img: "OneSubClick.png",
    //   href: "https://sub.nouvous.com",
    //   desc:
    //     "Instant subtitle conversion across languages — mobile friendly and blazing fast.",
    //   tags: ["AI", "Tailwind", "React", "JavaScript", "Firebase"],
    // },
    {
      title: "FindPin",
      subtitle: "A zip code finder web app",
      img: "findpin.png",
      href: "https://findpin.nouvous.com",
      desc:
        "FindPin helps users search areas by pincode or find pincodes by area name across USA, India, Canada, and Australia.",
      tags: ["REST API", "React", "Tailwind", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "PRODHUNT",
      subtitle: "Chrome Extension",
      img: "PRODHUNT.png",
      href:
        "https://chromewebstore.google.com/detail/prodhunt/giopdckkeeonachenpcafdcomeiocelh",
      desc:
        "Stay updated with top Product Hunt listings in one click — titles, descriptions, categories, and links included.",
      tags: ["Cheerio.js", "Express", "Node", "JavaScript", "HTML", "CSS"],
    },
    // {
    //   title: "FIC",
    //   subtitle: "Loan management CRM",
    //   img: "Img3.png",
    //   href: "https://crm.firstindiacredit.com/",
    //   desc:
    //     "A full MERN-based CRM for loan management with tracking, status updates and notifications.",
    //   tags: ["React", "MongoDB", "Node", "Express", "JWT", "JavaScript", "Tailwind"],
    // },
    {
      title: "Carrento",
      subtitle: "Car rental web app",
      img: "Img.png",
      href: "https://carrrento.vercel.app/",
      desc:
        "Carrento helps users browse, compare, and book rental cars with a smooth MERN stack experience.",
      tags: ["React", "MongoDB", "Node", "Express", "JavaScript", "Tailwind"],
    },
    {
      title: "Crypto Wallet",
      subtitle: "A crypto wallet web app",
      img: "Img2.png",
      href: "https://crypto-256.vercel.app/",
      desc:
        "A simple crypto wallet with secure asset storage, transfer, and wallet management.",
      tags: ["React", "MongoDB", "Node", "Express", "JWT", "JavaScript", "Tailwind"],
    },
  ];

  return (
    <div className="pt-[8rem] sm:pt-[15rem] relative">
      <div className="w-full h-64 text-center">
        <div className="flex flex-col items-center">
          <div
            className={`${
              isDarkMode ? "bg-[#27272A]" : "bg-zinc-950"
            } text-white py-6 px-12 rounded-2xl w-fit text-4xl sm:text-3xl md:text-4xl xl:text-5xl lxl:text-6xl font-medium mb-4`}
          >
            MD SHARIK
          </div>
          <div
            className={`font-medium text-2xl mt-2 sm:text-3xl md:text-2xl xl:text-5xl lxl:text-4xl ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            SOFTWARE ENGINEER
          </div>
        </div>
        <div
          className={`md:w-[60ch] w-[90vw] xl:text-xl lxl:text-xl m-auto mt-10 ${
            isDarkMode ? "text-gray-300" : "text-black"
          }`}
        >
          <p>
            Fullstack Enthusiast and Indie Hacker, excelling at solving complex
            challenges and love building usefull products.
          </p>
        </div>
      </div>
      {/* FULLSTACK */}
      {/* <div className="m-auto mt-[6rem] bg-white md:mt-[6rem] rounded-xl font-medium sm:text-md sm: w-[90vw] md:text-xl flex justify-between smd:w-[60vw] items-center py-8 px-10">
        <div>FRONTEND</div>
        <div>BACKEND</div>
        <div>DEVOPS</div>
        <div>3D</div>
           <div>FRONTEND</div>
        <div>BACKEND</div>
        <div>DEVOPS</div>
        <div>3D</div>
      </div> */}


<section
      aria-labelledby="tech-skills-heading"
      className={`m-auto mt-24 w-[90vw] sm:w-[60vw] `}
    >
      <h2 className={`text-xl  font-semibold mb-4 text-center ${
            isDarkMode ? "text-white" : "text-black"
          }`}>
        Tech Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="space-y-3">
            <div className={`bg-white rounded-2xl p-4 ${
        isDarkMode ? "bg-zinc-900 text-gray-100" : "bg-white text-gray-900"
      } shadow-md`}>
            <div className="text-sm font-medium uppercase text-center my-6">{g.title}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className={`px-3 py-1 rounded-full text-xs sm:text-sm border ${
                    isDarkMode ? "bg-zinc-800 border-zinc-700" : "bg-zinc-100 border-zinc-200"
                  }`}
                  role="listitem"
                >
                  {it}
                </span>
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>

      {/* ABOUT */}
      <div id="about" className="flex justify-center">
        <div className="flex justify-between flex-col sm:items-start sm:ml-0 sm:flex-row sm:w-[90vw] smd:w-[60vw] min-h-[18rem]  sm:mt-24 ">
          <div className="w-[90vw] sm:w-[65%] my-14 flex flex-col justify-between sm:my-0 h-full   md:mb-0 bg-white rounded-2xl px-8 lg:px-14 py-8">
            <h2 className="text-3xl font-semibold">Professional Experience</h2>
            <h4 className="xl:max-w-[43ch] lxl:min-w-[63ch] overflow-y-hidden text-ellipsis mt-4">
              <div className="list-disc list-inside">
                <li>Over 2 year of industry experience</li>
                <li>Leading a team of smart people</li>
                <li>
                  Built multiple production grade products
                </li>
                <li>
                  Building side projects at <a href="https://nouvous.com"><span className="hover:decoration-wavy underline underline-offset-2 cursor-pointer">Nouvous</span></a>
                </li>
              </div>
            </h4>
            <div className="mt-4">
              <button className="bg-black text-white px-5 rounded-full py-3">
                Contact Me ~ Its Free
              </button>
            </div>
          </div>
          <div className={`w-[90vw] sm:w-[32%] bg-zinc-900  h-full rounded-2xl px-8 lg:px-14 py-8 text-white ${
          isDarkMode ?   "bg-gray-100 text-black":"bg-[#27272A] text-white"
        }`}>
            <h2 className="text-2xl font-medium my-4">My Resume</h2>
            <p className="xl:max-w-[40ch] text-zinc-400 overflow-ellipsis">
              Want to know more? Download my resume to know more about me.
            </p>
            <a href="RESUME_MD_SHARIK.pdf" download>
              <div
                
                className="text-white bg-zinc-800 mt-9  p-4 rounded-full px-6"
              >
                <div className="flex gap-3 items-center">
                  <FaFileDownload />
                  Download Resume
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {projectList.map((p) => (
       <div key={p.title} className="bg-white w-[90vw] smd:w-[60vw] min-h-[30rem] m-auto mt-20 rounded-3xl shadow">
      {/* Header */}
      <div className="flex justify-between py-10 px-8">
        <div>
          <div className="text-3xl font-semibold">{p.title}</div>
          <div className="text-xl">{p.subtitle}</div>
        </div>

        <a href={p.href} target="_blank" rel="noopener noreferrer">
          <div className="px-7 py-5 border-2 hover:border-black cursor-pointer rounded-full">
            ↗
          </div>
        </a>
      </div>

      {/* Body */}
      <div className="px-4 pb-3 flex flex-col xl:flex-row justify-between">
        {/* Preview Image */}
        <div className="xl:bg-zinc-100 -translate-y-4 z-10 py-8 flex justify-center items-center rounded-xl xl:w-[55%]">
          <a href={p.href} target="_blank" rel="noopener noreferrer">
            <div className="w-full smd:w-fit rounded-lg shadow-2xl">
              <img width={500} className="rounded-xl" src={p.img} alt={p.title} />
            </div>
          </a>
        </div>

        {/* Text */}
        <div className="w-[98%] mt-8 xl:mt-0 xl:w-[45%] px-4 -translate-y-4">
          <h2 className="text-3xl font-semibold mb-2">{p.title}</h2>
          <p className="text-justify smd:text-wrap">{p.desc}</p>

          {/* Tags */}
          <div className="flex flex-wrap mt-4">
            {p.tags.map((t) => (
              <span
                key={t}
                className="bg-zinc-100 px-5 py-2 mr-3 mb-2 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
      ))}
      
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
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919582375386&text=Hello,%20Sharik&type=phone_number&app_absent=1"
          target="_blank"
        >
          <div className="text-lg smd:text-2xl mt-8 bg-zinc-300 w-[10rem] smd:w-[12rem] cursor-pointer py-2 px-1 rounded-full flex ">
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
      <Footer />
    </div>
  );
}

export default App;
