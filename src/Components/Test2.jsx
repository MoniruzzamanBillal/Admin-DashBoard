import React, { PureComponent } from "react";
import { GlobalContext } from "../Context/Context";

export default function Test2() {
  const { open, setOpen } = GlobalContext();

  return (
    <>
      <div className="homeNewUserInfo w-full p-4 mb-5 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100">
        <div className="userInfoContainer border border-black bg-blue-300 grid grid-cols-5 gap-4">
          {/* left container starts  */}
          <div className="userInfoLeft bg-white border border-gray-200 rounded-sm shadow p-3 col-span-2 ">
            {/* left top starts  */}
            <div className="leftContainerTop mb-3">
              <h1 className="text-xl font-semibold">New Join Members</h1>
            </div>
            {/* left top ends  */}

            {/* left bottom starts  */}
            <div className="leftContainerBottom bg-cyan-500 border border-black grid grid-cols-12 gap-1">
              <div className="bottomLeftAvatar border border-black self-center col-span-2">
                <img
                  className="w-10 h-10 m-auto rounded-full"
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                  alt="Rounded avatar"
                />
              </div>
              <div className="bottomMid border border-black self-center ml-2 col-span-7">
                <div className="bottomMidContainer">
                  <h2>Noob Billal</h2>
                  <h2>Web developer</h2>
                </div>
              </div>
              <div className="bottomRight m-auto border border-black self-center col-span-3">
                <button className="py-2 px-4  text-sm font-medium text-gray-900 outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ">
                  Display
                </button>
              </div>
            </div>
            {/* left bottom ends  */}
          </div>
          {/* left container Ends  */}

          {/* right container starts  */}
          <div className="userInfoRight p-3 col-span-3 bg-green-400 border border-black">
            right
          </div>
          {/* right container ends  */}
        </div>
      </div>
    </>
  );
}
