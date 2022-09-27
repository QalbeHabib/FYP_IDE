import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";
import c from "../images/c.png";
import cpp from "../images/cpp.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import HeroImg from "../images/cpp.svg";
import Sec2 from "../images/sec2.svg";
import Sec2n from "../images/sec2n.svg";
import Sec3 from "../images/sec3.svg";
import Sec3n from "../images/sec3n.svg";
import Sec4 from "../images/sec4.svg";
const Firstpage = () => {
  return (
    <div>
      {/* <Grid container> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-content-center place-items-start bg-[#032337] h-[100vh]  p-10 md:p-20">
        <div className="space-y-5 text-center md:text-start  place-self-center md:place-self-start">
          <h2
            className="text-2xl md:text-[3vw] font-bold capitalize leading-tight
          "
          >
            Let's have some Coding live, <br /> Code and run on the <br /> Spot.
          </h2>
          <p style={{ fontSize: "2vw", color: "white" }}>
            Create, Edit and Save Web, C/CPP Apps
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <Link to="/web">
              <button className="bg-[#6C63FF] px-[3vw] hover:ring-1  ring-offset-2 ring-offset-white active:scale-100  py-[1.5vh] rounded font-bold shadow hover:scale-105 transition ease">
                Code Web
              </button>
            </Link>
            <Link to="/c_cpp">
              <button className="bg-[#6C63FF] px-[3vw] hover:ring-1  ring-offset-2 ring-offset-white active:scale-100  py-[1.5vh] rounded font-bold shadow hover:scale-105 transition ease">
                Code C++
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-[450px] h-auto place-self-center">
          <img src={HeroImg} alt="some" />
        </div>
      </div>
      <section>
        <section className="text-white body-font bg-[#032337] ">
          <div className="container mx-auto  px-5 pt-24 md:flex-row flex-col items-center grid grid-cols-1 md:grid-cols-2 ">
            <div className="mb-10 md:mb-0 place-self-center max-w-[500px] h-auto">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={Sec2n}
              />
            </div>
            <div className="lg:flex-grow p-10  flex flex-col md:items-start md:text-left items-center text-center space-y-8 mb-36">
              <h1 className="font-bold sm:text-4xl text-3xl mb-4  text-white">
                Did not need to setup on your computer, It's here.
              </h1>
              <p className="mb-8 leading-relaxed text-lg max-w-lg ">
                You can write your complete web application on the browser, It
                very hard and time consuming to setup Web development
                Environment. Just Click and start
              </p>
              <div className="flex justify-center">
                <Link to="/web">
                  <button className="bg-[#6C63FF] px-[3vw] hover:ring-1  ring-offset-2 ring-offset-white active:scale-100  py-[1.5vh] rounded font-bold shadow hover:scale-105 transition ease">
                    Code Web
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <section className="text-gray-600 body-font  bg-[#032337]">
          <div className="max-w-[1400px] mx-auto px-5 py-24  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
              <div className=" p-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className=" title-font text-sm text-white font-bold mb-1 tracking-wider">
                      STEP 1
                    </h2>
                    <p className="leading-relaxed">
                      Open your browser and go to the domain,provided by Online
                      IDE
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className=" title-font text-sm text-white font-bold mb-1 tracking-wider">
                      STEP 2
                    </h2>
                    <p className="leading-relaxed">
                      Visit the complete site and follow the instruction
                      provided here.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx={12} cy={5} r={3} />
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className=" title-font text-sm text-white font-bold mb-1 tracking-wider">
                      STEP 3
                    </h2>
                    <p className="leading-relaxed">
                      Chose your IDE that you would like to work, weather it a
                      Web App or C++ compiler, just click and nevigate to the
                      IDE
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className=" title-font text-sm text-white font-bold mb-1 tracking-wider">
                      STEP 4
                    </h2>
                    <p className="leading-relaxed">
                      Login to your account or registor a new account on the top
                      right of header.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className=" title-font text-sm text-white font-bold mb-1 tracking-wider">
                      FINISH
                    </h2>
                    <p className="leading-relaxed">Start codeing 😎</p>
                  </div>
                </div>
              </div>
              <div className=" place-self-center ">
                <img
                  className=" object-cover object-center rounded-lg md:mt-0 mt-12"
                  src={Sec3n}
                  alt="step"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <section className="text-white body-font bg-[#032337] ">
          <div className="container mx-auto  px-5 pt-24 md:flex-row flex-col items-center grid grid-cols-1 md:grid-cols-2 ">
            <div className="mb-10 md:mb-0 place-self-center max-w-[500px] h-auto">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={Sec4}
              />
            </div>
            <div className="lg:flex-grow p-10  flex flex-col md:items-start md:text-left items-center text-center space-y-8 mb-36">
              <h1 className="font-bold sm:text-4xl text-3xl mb-4 leading-snug text-white">
                Looking for C++ IDE Online??
                <br />
                Here We Go
              </h1>
              <p className="mb-8 leading-relaxed text-lg max-w-lg ">
                You can write your complete C++ Code on the browser, It very
                hard and time consuming to setup DEV C++ development Environment
                on Your System. Just Click and have Fun.
              </p>
              <div className="flex justify-center">
                <Link to="/c_cpp">
                  <button className="bg-[#6C63FF] px-[3vw] hover:ring-1  ring-offset-2 ring-offset-white active:scale-100  py-[1.5vh] rounded font-bold shadow hover:scale-105 transition ease">
                    C ++
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Firstpage;
