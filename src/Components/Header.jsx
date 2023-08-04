import React, { useEffect, useState } from "react";
import LPP from "../Images/Logo LPP Hitam.png";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";
const Header = () => {
  const [shown, setIsShown] = useState(false);

  function toggle() {
    setIsShown(!shown);
  }

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth > 768){
        setIsShown(true)
      }
    }
    window.addEventListener("resize", handleResize);
    return ()=>{window.removeEventListener('resize', handleResize)}
  }, []);

  return (
    <nav
      id="home"
      className="bg-blue-50 border-gray-200 md:px-2 px-4 py-2 rounded dark:bg-gray-900"
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://www.lppntb.com/" className="flex items-center">
          <img src={LPP} className="mr-3 h-10" alt="LPP NTB" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            {/* SpaceMed */}
          </span>
        </a>

        {/* toggle button */}
        <button
          onClick={toggle}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* header items */}
        {shown && (
          <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li id="home">
                <a href="/#home">
                  <button className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                    Home
                  </button>
                </a>
              </li>
              <li>
                <a href="/#letter">
                  <button className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Invitation
                  </button>
                </a>
              </li>
              <li>
                <a href="/#rsvp">
                  <button className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    RSVP
                  </button>
                </a>
              </li>
              <li>
                <a href="/#rsvp">
                  <button className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Location
                  </button>
                </a>
              </li>
              <li>
                <a href="/#contact">
                  <button className="block py-2 pr-4 pl-3 text-gray-700 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="fixed right-10 bottom-10 z-10">
        <a href="/#home">
          <button className="rounded-full p-2 bg-sky-100 text-sky-700 border-sky-600 border hover:bg-sky-200 active:bg-sky-100 transition-all duration-300 ">
            <ArrowCircleUpIcon className="h-10 w-10" />
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Header;
