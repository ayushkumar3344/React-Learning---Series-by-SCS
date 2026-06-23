import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold">
        1
      </h2>
      <div>
        <p className="leading-normal text-white mb-10 text-shadow-md loose">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          harum dolore deleniti quasi atque vero.
        </p>
        <div className="flex justify-between ">
          <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full  ">
            Saticfied
          </button>
          <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
