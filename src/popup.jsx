import React from "react";

export const Popup = ({ img, setIsOpen }) => {
  return (
    <div className="fixed top-0 z-50 h-screen w-full bg-black/30 backdrop-blur-lg p-8 flex flex-col items-center justify-center">
      <img className="w-full h-fit" src={img} alt="" />
      <div
        onClick={() => setIsOpen("")}
        className="w-full bg-black py-3 mt-2 text-center text-white rounded-xl cursor-pointer hover:scale-[103%] transition"
      >
        CLOSE
      </div>
    </div>
  );
};
