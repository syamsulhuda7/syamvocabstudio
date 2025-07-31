import { useEffect, useState } from "react";
import { cardData } from "./file";
import { Popup } from "./popup";
import ParallaxBackground from "./Parallax";

function App() {
  const [isOpen, setIsOpen] = useState("");
  const [allData, setAllData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 5;

  useEffect(() => {
    const titleElement = document.getElementById("title");
    if (titleElement) {
      titleElement.scrollIntoView({ behavior: "smooth" });
    }
    setTotalPage(Math.ceil(cardData.length / itemPerPage));
    setTimeout(() => {
      setAllData(
        cardData.slice(
          itemPerPage * (currentPage - 1),
          itemPerPage * currentPage
        )
      );
    }, 500);
  }, [currentPage]);

  console.log(totalPage);
  return (
    <ParallaxBackground>
      {isOpen.length > 0 && <Popup img={isOpen} setIsOpen={setIsOpen} />}

      {/* Hero Section */}
      <div className="relative w-full">
        {/* 🔴 Layer merah transparan */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-0" />

        {/* 🌫️ Konten dengan blur */}
        <div className="relative z-10 w-full backdrop-blur-[1px] flex flex-col items-center justify-center py-10">
          <img
            className="w-28 lg:w-48 aspect-square mb-5 rounded-full"
            src="/logo.png"
            alt=""
          />
          <div className="text-2xl lg:text-6xl text-white">Welcome to,</div>
          <div className="font-bold text-2xl lg:text-6xl text-white">
            Syam Vocab Studio's Page
          </div>
        </div>
      </div>

      {/* card section */}
      <div className="bg-slate-50 w-full px-10 pb-10 flex flex-col items-center justify-center">
        <div id="title" className="pb-5 pt-10 max-w-[700px]">
          You can download the cards below{" "}
          <i className="fa-regular fa-square-caret-down"></i>
        </div>
        <div className="w-full max-w-[700px] flex flex-col gap-4">
          {allData.map((item, index) => (
            <div
              key={index}
              className="bg-slate-200 shadow-md shadow-slate-400 rounded-xl flex items-center w-full px-2 py-3 cursor-pointer hover:scale-[102%] transition"
              onClick={() => window.open(item.link, "_blank")}
            >
              <p className="px-2 pr-3 font-medium">{item.id}</p>
              <img
                className="w-10 h-fit"
                loading="lazy"
                src={item.image}
                alt={item.id}
              />
              <div className="px-3">
                <p className="font-medium text-lg">{item.title}</p>
                <p>
                  go to link <i className="fa-regular fa-circle-right"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-slate-50 px-10 pb-10 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <div
            onClick={() => {
              currentPage - 1 !== 0 && setCurrentPage(currentPage - 1);
            }}
            className={`${
              currentPage - 1 !== 0
                ? "opacity-100 cursor-pointer hover:scale-[103%] transition"
                : "opacity-50"
            } h-6 w-fit px-2 pb-[2px] bg-black rounded-md flex items-center justify-center`}
          >
            <p className="text-white text-xs">&laquo; Prev</p>
          </div>
          <div
            className={`${
              currentPage - 1 === 0 && "hidden"
            } w-fit px-2 pb-[2px] text-slate-600 rounded-md flex items-center justify-center`}
          >
            {currentPage - 1}
          </div>
          <div className="w-fit px-2 pb-[2px] border-3 border-slate-900 font-semibold text-slate-950 rounded-md flex items-center justify-center">
            {currentPage}
          </div>
          <div
            className={`${
              currentPage + 1 > totalPage && "hidden"
            } w-fit px-2 pb-[2px] text-slate-600 rounded-md flex items-center justify-center`}
          >
            {currentPage + 1}
          </div>
          <div
            onClick={() => {
              currentPage + 1 <= totalPage && setCurrentPage(currentPage + 1);
            }}
            className={`${
              currentPage + 1 <= totalPage
                ? "opacity-100 cursor-pointer hover:scale-[103%] transition"
                : "opacity-50"
            } bg-black h-6 w-fit px-2 pb-[2px] rounded-md flex items-center justify-center`}
          >
            <p className="text-white text-xs">Next &raquo;</p>
          </div>
        </div>
      </div>

      {/* Support me */}
      <div className="bg-slate-50 w-full px-10 pt-5 pb-10 flex flex-col items-center justify-center">
        <div className="text-center text-red-600 pb-3 max-w-[700px]">
          Support us to help you improve your english skill
        </div>
        <div className="w-full max-w-[700px] flex">
          <div className="flex-1 px-5">
            <p className="text-center font-medium text-lg pb-2">Qris</p>
            <img
              className="w-full h-fit shadow shadow-slate-400 cursor-pointer hover:scale-[103%] transition"
              src="/qris.jpg"
              alt="qris"
              onClick={() => setIsOpen("/qris.jpg")}
            />
            <a
              href="/qris.jpg"
              download="qris.jpg"
              className="bg-black text-white px-4 py-2 rounded-lg text-center font-medium mt-2 cursor-pointer hover:scale-[102%] transition block"
            >
              Download Picture
            </a>
          </div>
          <div className="flex-1 px-5">
            <p className="text-center font-medium text-lg pb-2">Saweria</p>
            <div
              className="bg-black text-white px-4 py-2 rounded-lg flex flex-col gap-2 items-center justify-center cursor-pointer hover:scale-[102%] transition"
              onClick={() =>
                window.open("https://saweria.co/syamvocabstudio", "_blank")
              }
            >
              <p className="font-medium text-center">Click Here</p>
              <i className="fa-regular fa-circle-right mb-1"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-50 px-10 text-center pb-5">
        <div className="text-sm font-medium">
          Developed by Syam Vocab Studio &copy;2025
        </div>
      </div>
    </ParallaxBackground>
  );
}

export default App;
