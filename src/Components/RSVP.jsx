import React, { Fragment, useState } from "react";
import { newUser } from "../api/userCollection";

const formValidation = {
  nama: (value) => {
    if (value === "" || value === null || value === undefined) {
      return "Please input your username";
    }

    return null;
  },

  whatsapp: (value) => {
    if (value === "" || value === null || value === undefined) {
      return "Please input your whatsapp number";
    }

    if (value.match(/[a-zA-Z]/g)) {
      return "Whatsapp number is invalid";
    }

    return null;
  },

  jumlah: (value) => {
    if (value < 1 && value > 5) {
      return "Please input a valid number";
    }

    return null;
  },

  pesan: (value) => {},
  hadir: (value) => {},
};

const RSVP = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    jumlah: 1,
    pesan: "",
    hadir: true,
  });

  const [formErrors, setFormErrors] = useState({
    nama: null,
    whatsapp: null,
    jumlah: null,
    pesan: null,
    hadir: null,
  });

  function onFormChange(key, value) {
    setFormErrors({
      ...formErrors,
      [key]: formValidation[key](value),
    });

    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit() {
    setFormErrors({
      nama: formValidation.nama(formData.nama),
      whatsapp: formValidation.whatsapp(formData.whatsapp),
      jumlah: formValidation.jumlah(formData.jumlah),
    });

    let isHasError = false;
    Object.keys(formErrors).map((value) => {
      if (formErrors[value] !== null) {
        isHasError = true;
      }
    });

    if (!isHasError) {
      newUser(formData).then((res) => {
        setFormData({
          nama: "",
          whatsapp: "",
          jumlah: 1,
          pesan: "",
          hadir: true,
        });

        setIsSuccess(true);

        setTimeout(() => setIsSuccess(false), 3000);
      });
    }
  }

  return (
    <section id="rsvp" className=" md:grid lg:grid-cols-2 bg-gray-100">
      <div className="w-full md:w-full md:max-w-full md:mx-w-full ">
        <h1 className="pt-6 flex justify-center font-bold text-3xl">RSVP</h1>
        <p className="mt-5 text-center">
          Please Confirm Your Attendance in Our Event
        </p>
        <div className="p-6 border border-transparent">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {/* name */}
            <label className="block mb-6">
              <span className="text-black">Your Name</span>
              <input
                value={formData.nama}
                onChange={(e) => {
                  onFormChange("nama", e.target.value);
                }}
                type="text"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Your Awesome Name Here"
              />
              {formErrors.nama && (
                <span className="text-orange-700">{formErrors.nama}</span>
              )}
            </label>

            {/* whatsapp number */}
            <label className="block mb-6">
              <span className="text-black">Your WhatsApp Number</span>
              <input
                onChange={(e) => {
                  onFormChange("whatsapp", e.target.value);
                }}
                value={formData.whatsapp}
                type="tel"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="+62 831-2945-1977"
              />
              {formErrors.whatsapp && (
                <span className="text-orange-700">{formErrors.whatsapp}</span>
              )}
            </label>

            {/* number of ppl */}
            <label className="block mb-6">
              <span className="text-black">Total Number of People</span>
              <input
                disabled
                min={1}
                max={5}
                onChange={(e) => {
                  onFormChange("jumlah", e.target.value);
                }}
                value={formData.jumlah}
                defaultValue={1}
                name="people"
                type="number"
                className="
                disabled:bg-gray-100
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="1"
              />
              {formErrors.jumlah && (
                <span className="text-orange-700">{formErrors.jumlah}</span>
              )}
              <p className="text-xs text-yellow-600">*Invitation is only valid for 1 person</p>
            </label>

            {/* pesan */}
            <label className="block mb-6">
              <span className="text-black">Additional Message</span>
              <textarea
                onChange={(e) => {
                  onFormChange("pesan", e.target.value);
                }}
                value={formData.pesan}
                placeholder="Optional Additional Message Here"
                name="message"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
              ></textarea>
            </label>
            <div className="mb-6">
              <span className="text-black">Confirm Your Attendance</span>
              <div className="mt-2">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      name="season"
                      value="summer"
                      type="radio"
                      className="
                  text-blue-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-blue-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-blue-200
                  focus:ring-opacity-50
                "
                      onClick={(e) => {
                        onFormChange("hadir", e.target.checked);
                      }}
                      checked={formData.hadir}
                    />
                    <span className="text-black ml-2">I Present</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      name="season"
                      value="winter"
                      type="radio"
                      className="
                  text-blue-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-blue-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-blue-200
                  focus:ring-opacity-50
                "
                      onClick={(e) => {
                        onFormChange("hadir", !e.target.checked);
                      }}
                      checked={!formData.hadir}
                    />
                    <span className="text-black ml-2">I'm Not Present</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="
            h-10
            px-5
            text-blue-100
            bg-blue-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-blue-800
          "
              >
                Submit RSVP
              </button>
            </div>

            <div>
              {isSuccess && (
                <div className="border-sky-700 bg-sky-200 rounded-lg p-5 text-sky-900">
                  You have been registred
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className=" w-full md:w-full">
        <h1 className="mb-5 pt-6 flex justify-center font-bold text-3xl">
          Location
        </h1>
        <p className="mb-5 text-center md:text">Check Our Event Location</p>
        <iframe
          style={{ width: "100%", height: "650px" }}
          src="https://maps.google.com/maps?q=lombok%20raya&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </section>
  );
};

export default RSVP;
