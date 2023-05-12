import React from "react";
import { GlobalContext } from "../Context/Context";

export default function Features() {
  const { open, setOpen } = GlobalContext();
  return (
    <>
      <div className={`cardContainer mb-4 grid grid-cols-3 gap-5 `}>
        {/* card 1 */}
        <a
          href="#"
          className="block  max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow hover:bg-gray-100 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-800 ">
              Revenue
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold"> $245</div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center">-11.5</h1>
              <i class="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p>Compared to last month</p>
          </div>
        </a>

        {/* card 2 */}

        <a
          href="#"
          className="block max-w-xs p-4 bg-white border border-gray-200 rounded-md shadow hover:bg-gray-100 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-800 ">
              Revenue
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold"> $245</div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center">-11.5</h1>
              <i class="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p>Compared to last month</p>
          </div>
        </a>

        {/* card 3 */}

        <a
          href="#"
          className="block max-w-xs p-4 bg-white border border-gray-200 rounded-md shadow hover:bg-gray-100 "
        >
          <div className="cardTop text-center">
            <h1 className="mb-2 text-2xl font-bold self-center text-gray-800 ">
              Revenue
            </h1>
          </div>

          <div className="cardMid mb-2 flex gap-x-5 justify-center">
            <div className="cardMidLeft text-3xl font-bold"> $245</div>
            <div className="cardMidRight flex gap-x-2 self-center">
              <h1 className="self-center">-11.5</h1>
              <i class="ri-arrow-up-line self-center font-semibold text-xl text-green-600"></i>
            </div>
          </div>

          <div className="cardBottom mb-2 text-center self-center">
            <p>Compared to last month</p>
          </div>
        </a>
      </div>
    </>
  );
}
