import React, { Fragment } from "react";
import Spacemed from "../Images/Logo SpaceMed.png";

const Footer = () => {
  return (
    <div className="bg-blue-50 rounded-lg shadow md:px-6 md:py-2 dark:bg-blue-50">
      <div id="contact" className="mt-5 sm:justify-end">
        <h6 className="md:mt-3  md:mb-3 text-center uppercase font-semibold flex justify-center md:justify-center">
          Contact
        </h6>
      </div>
      <div className="sm:flex sm:items-center sm:justify-center pt-2">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-2">
          <p className="flex items-center justify-center md:justify-start mb-4">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="home"
              className="w-4 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path>
            </svg>
            Jl. Catur Warga No.29, Mataram
          </p>
          <p className="flex items-center justify-center md:justify-center mb-2">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="phone"
              className="w-4 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
              ></path>
            </svg>
            +62 831-2945-1977
          </p>
          <p className="flex items-center justify-center md:justify-right">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="phone"
              className="w-4 mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
              ></path>
            </svg>
            +62 898-3264-797
          </p>
        </div>
      </div>
      <div className="mt-5 sm:justify-end">
        <h6 className="md:mt-3  md:mb-3 text-center uppercase font-semibold flex justify-center md:justify-center">
          Media partner
        </h6>
      </div>
      <div className="sm:flex sm:items-center sm:justify-center pt-2">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-12">
          <p></p>
          <a
            className="flex justify-center items-center"
            href="https://www.instagram.com/spacemed.id/"
          >
            <img className="sm:h-12" src={Spacemed} alt="SpaceMed" />
          </a>
          <p></p>
        </div>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 py-1">
        © 2022{" "}
        <a
          href="https://www.instagram.com/spacemed.id/?hl=id"
          className="hover:underline"
        >
          Developed by SpaceMed.
        </a>
         {" "}All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
