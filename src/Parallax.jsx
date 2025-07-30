import { useEffect, useState } from "react";

const ParallaxBackground = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/backdrop.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundPosition: `center ${offsetY * 0.4}px`, // efek parallax
        transition: "background-position 0.05s ease-out",
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxBackground;
