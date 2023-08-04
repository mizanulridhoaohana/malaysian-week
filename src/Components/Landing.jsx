import React, { Fragment } from "react";
import LPP from "../Images/Logo LPP Hitam.png";
import Gubernur from "../Images/Gubernur.png";
import Emgs from "../Images/Emgs.png";
import Brida from "../Images/Brida.png";
import Spacemed from "../Images/Logo SpaceMed.png";

const Landing = () => {
  return (
    <section>
      <div className="m-0 p-1 bg-[url(https://img.freepik.com/premium-vector/lombok-culture-batik-seamless-pattern-background_3264-484.jpg?w=2000)]">
        <div className="my-10 m-5  bg-white bg-opacity-95 rounded-lg shado-lg lg:p-20 md:p-10 p-5 ">
          <section className="dark:bg-gray-900 ">
            {/* <img src="https://img.freepik.com/premium-vector/lombok-culture-batik-seamless-pattern-background_3264-484.jpg?w=2000" /> */}
            <div className="mt-10 flex flex-col-reverse lg:flex-row gap-10 items-start ">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                  YOU ARE INVITED!
                </h1>
                <p className="max-w-2xl mt-10 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  Welcome awardees and alumni of the Beasiswa NTB to Malaysia.
                  You are invited for a special gathering.
                </p>
                <a
                  href="/#letter"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Open Your Invitation
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="border-b border-gray-300 inline-flex items-end">
                <img
                  src={Gubernur}
                  alt="mockup"
                  className="w-full lg:w-[600px]"
                />
              </div>
            </div>
          </section>
          <section className="dark:bg-gray-900">
            <div className="py-8 lg:py-8 mx-auto max-w-screen-xl px-4">
              <h2 className="mt-20 mb-10 lg:mb-10 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-3xl">
                You’ll be in good company
              </h2>
              <div className="grid grid-cols-2 gap-2 text-gray-500 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 dark:text-gray-400">
                <a href="https://www.lppntb.com/" className="grid">
                  <img className="m-auto" src={LPP} alt="LPP NTB" />
                </a>
                <a href="https://brida.ntbprov.go.id/" className="grid">
                  <img className="m-auto" src={Brida} alt="Brida NTB" />
                </a>
                <a href="https://www.ntbprov.go.id/" className=" grid">
                  <img className="m-auto"
                    src="https://www.ntbprov.go.id/images/logo1.png"
                    alt="Pemprov NTB"
                  />
                </a>
                <a href="https://educationmalaysia.gov.my/" className=" grid">
                  <img className="m-auto h-22 lg:h-32" src={Emgs}  alt="EMGS" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-blue-50 p-8"></div>
    </section>
  );
};

export default Landing;
