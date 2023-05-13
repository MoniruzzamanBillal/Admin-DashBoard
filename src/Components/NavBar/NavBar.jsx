import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="navContainer bg-gray-100 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-sm">
        <div className="navWrapper">
          <div className="navWrapperContainer max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            {/* Nav Left starts  */}
            <div className="NavLeft logo">
              <a href="/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            {/* Nav Left Ends  */}

            {/* Nav right Starts  */}
            {/* w-1/6 */}
            <div className="NavRight w-1/2 sm:w-1/3 md:w-1/6 flex justify-evenly ">
              <div className="icon1 relative cursor-pointer self-center ">
                <i class="ri-notification-line text-xl"></i>
                <span className="notificationNumber bg-red-600 text-white rounded-2xl text-center h-5 w-5 absolute -top-2 left-2">
                  2
                </span>
              </div>
              <div className="icon2 relative cursor-pointer self-center">
                <i class="ri-global-line  text-xl"></i>
                <span className="globalNumber bg-red-600 text-white rounded-2xl text-center h-5 w-5 absolute -top-2 left-2">
                  1
                </span>
              </div>
              <div className="icon3 relative cursor-pointer self-center">
                <i class="ri-settings-2-line  text-xl"></i>
              </div>
              <div className="imgIcon cursor-pointer">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                  alt="Rounded avatar"
                />
              </div>
            </div>
            {/* Nav right Ends  */}
          </div>
        </div>
      </div>
    </>
  );
}
