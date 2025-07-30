import { useState } from "react";
import { cardData } from "./file";
import { Popup } from "./popup";

function App() {
  const [isOpen, setIsOpen] = useState("");
  return (
    <div
      style={{
        backgroundImage: "url('/backdrop.png')",
        backgroundSize: "contain",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
      }}
      className="w-full min-h-screen scroll-auto flex flex-col items-center justify-start"
    >
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

      {/* Support me */}
      <div className="bg-slate-50 w-full px-10 flex flex-col items-center justify-center py-10">
        <div className="text-center text-red-600 pb-3 max-w-[700px]">
          Support us to help you improve your english skill
        </div>
        <div className="w-full max-w-[700px] flex">
          <div className="flex-1 px-5">
            <p className="text-center font-medium text-lg pb-2">Qris</p>
            <img
              className="w-full h-fit shadow shadow-slate-400 cursor-pointer hover:scale-[103%] transition"
              src="/qris.png"
              alt="qris"
              onClick={() => setIsOpen("/qris.png")}
            />
            <a
              href="/qris.png"
              download="qris.png"
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

      {/* card section */}
      <div className="bg-slate-50 w-full px-10 pb-10 flex flex-col items-center justify-center">
        <div className="pb-5 pt-3 max-w-[700px]">
          You can download the cards below{" "}
          <i className="fa-regular fa-square-caret-down"></i>
        </div>
        <div className="w-full max-w-[700px] flex flex-col gap-4">
          {cardData.map((item, index) => (
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
                  go to link <i class="fa-regular fa-circle-right"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
