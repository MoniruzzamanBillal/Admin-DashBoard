import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import { GlobalContext } from "../../Context/Context";
import Table from "../Table/Table";

export default function SideBar() {
  const { open, setOpen } = GlobalContext();
  const Menus = [
    {
      title: "Dashboard",
      src: <i class="ri-dashboard-line"></i>,
      link: "Dashboard",
    },
    { title: "Inbox", src: <i class="ri-mail-line"></i>, link: "Inbox" },
    {
      title: "Accounts",
      src: <i class="ri-account-box-line"></i>,
      gap: true,
      link: "home",
    },
    { title: "Schedule ", src: <i class="ri-calendar-line"></i>, link: "home" },
    { title: "Search", src: <i class="ri-search-eye-line"></i>, link: "home" },
    {
      title: "Analytics",
      src: <i class="ri-line-chart-line"></i>,
      link: "home",
    },
    {
      title: "Files ",
      src: <i class="ri-file-paper-line"></i>,
      gap: true,
      link: "home",
    },
    { title: "Setting", src: <i class="ri-settings-line"></i>, link: "home" },
  ];
  return (
    <>
      <div className="sideBarContainer fixed z-20 top-16 left-0 ">
        <div className="flex">
          <div
            className={`mainContainer ${
              open ? "w-52" : "w-20 "
            }  bg-gray-900 h-screen p-5 pt-5 relative duration-300`}
          >
            {/* arrow button starts  */}
            <div
              className={`absolute  text-center cursor-pointer -right-3 top-2 w-8 bg-gray-50
           border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            >
              <i class="ri-arrow-left-s-line text-xl self-center"></i>
            </div>
            {/* arrow button ends  */}

            {/* logo starts  */}
            <div className="flex gap-x-4 items-center">
              <div
                className={`logoIcon cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
              >
                <i class="ri-sun-line text-white text-3xl self-center"></i>
              </div>
              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                Designer
              </h1>
            </div>
            {/* logo ends  */}

            {/* list starts  */}
            <ul className="pt-5">
              {Menus.map((Menu, index) => (
                <>
                  <Link to={Menu.title}>
                    <li
                      key={index}
                      className={`flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-8" : "mt-1"}`}
                    >
                      <div className="icon text-lg">{Menu.src}</div>
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200`}
                      >
                        {Menu.title}
                      </span>
                    </li>
                  </Link>
                </>
              ))}
            </ul>
            {/* list ends  */}
          </div>
        </div>
      </div>
      {/* sidebar ends  */}

      {/* sidebar child components starts */}
      <div
        className={`${
          open ? "ml-52" : "ml-20 "
        } duration-300 h-screen px-4 py-2 mt-16`}
      >
        {/* <HomePage /> */}
        <Table />
      </div>
      {/* sidebar child components ends */}
    </>
  );
}
