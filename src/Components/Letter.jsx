import React, { Fragment } from "react";

const Letter = () => {
  return (
    <Fragment>
      <section id="letter" className="bg-blue-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Malaysian Week
            </h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              You Are Invited For a Special Gathering
            </p>
            <div className="mt-2 py-4 md:py-14">
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400 md:text-xl">
                We hope that
              </p>
              <h2 className="text-blue-700 mb-4 md:text-3xl font-extrabold leading-tight dark:text-white">
                Awardees and alumni of the Beasiswa NTB to Malaysia.
              </h2>
              <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-xl">
                Can Gather With Us
              </p>
            </div>
          </div>
          <div className="md:gap-20 gap-10 grid md:grid-cols-3 grid-cols-1 md:px-20  lg:px-44">
            <div className="flex flex-col md:items-end items-center">
              <div className=" h-10 w-10 rounded-full bg-blue-100  dark:bg-blue-900">
                <img src="" alt="" />
              </div>
              <h3 className=" mb-2 text-xl font-bold dark:text-white text-blue-700">
                Date
              </h3>
              <p className=" text-gray-500 dark:text-black">Wednesday</p>
              <p className="text-amber-400 text-center mt-2 mb-2 text-5xl font-bold dark:text-black">
                27th
              </p>
              <p className=" text-gray-700 dark:text-black font-bold  mt-2">
                July 2022
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className=" h-10 w-10 rounded-full bg-blue-100  dark:bg-blue-900">
                <img src="" alt="" />
              </div>
              <h3 className=" mb-2 text-xl font-bold dark:text-white text-blue-700">
                Time
              </h3>
              <p className=" text-gray-500 dark:text-black"></p>
              <p className="text-amber-400 mt-4 mb-2  text-7xl font-bold dark:text-black">
                19.30
              </p>
              <p className=" text-gray-700 dark:text-black font-bold">
                July 2022
              </p>
            </div>

            <div className="flex flex-col md:items-start items-center">
              <div className=" h-10 w-10 rounded-full bg-blue-100  dark:bg-blue-900">
                <img src="" alt="" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white text-blue-700">
                Venue
              </h3>
              <div className="flex flex-col gap-0 my-3 text-center md:text-left" >
                <p className="text-amber-400  text-3xl font-bold dark:text-black whitespace-nowrap">
                  Lombok Raya
                </p>
                <p className="text-amber-400  text-3xl font-bold dark:text-black">
                  Hotel
                </p>
              </div>
              <p className="text-gray-700 dark:text-black font-bold">
                Kota Mataram
              </p>
            </div>
          </div>
          <div className="mt-10 py-14 mx-auto max-w-screen-sm text-center">
            <p className="mb-2 font-light text-gray-500 dark:text-gray-400 md:text-xl">
              <i>Dresscode</i>
            </p>
            <h2 className="text-blue-700 md:text-3xl font-extrabold leading-tight dark:text-white">
              Batik
            </h2>
          </div>
          <div className="mt-2 py-1 px-4 mx-auto max-w-screen-xl sm:py-1 lg:px-1">
            <div className="mt-2 mx-auto max-w-screen-sm text-center">
              <a
                href="/#rsvp"
                className="text-3xl align-center mx-auto max-w-screen text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                RSVP
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Letter;
