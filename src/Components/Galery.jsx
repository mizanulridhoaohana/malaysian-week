import React from "react";
import Carousel1 from "../Images/Carousel1.jpg";
import img1 from "../Images/IMG_1.jpg";
import img2 from "../Images/IMG_2.jpg";
import img4 from "../Images/IMG_4.jpg";
import img5 from "../Images/IMG_5.jpg";
import img6 from "../Images/IMG_6.jpg";
import img7 from "../Images/IMG_7.jpg";

const Galery = () => {
  return (
    <section className="overflow-hidden text-gray-700">
      <div className="container px-5 py-10 mx-auto lg:pt-50 lg:px-50">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={Carousel1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={img4}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={img5}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={img6}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={img1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={img2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galery;
