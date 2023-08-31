import React, { forwardRef } from "react";
import Typed from "react-typed";

const Home = forwardRef((props, ref) => {
  const hellos = [
    "안녕하세요",
    "今日は",
    "你好",
    "Bonjour",
    "Hola",
    "Guten Tag",
    "नमस्ते",
    "مرحبًا",
    "สวัสดี",
    "Kamusta",
    "Xin chào",
    "Hello",
  ];
  return (
    <div
      ref={ref}
      className="w-full h-screen bg-my-white flex flex-col md:items-center justify-center gap-[2rem] px-[2rem] relative"
    >
      <div className="flex items-center h-[4.5rem]">
        <Typed
          className="  tracking-widest font-medium h-max hello-text"
          strings={[
            "HELLO",
            "안녕하세요",
            "今日は",
            "你好",
            "BONJOUR",
            "HOLA",
            "GUTEN TAG",
            "नमस्ते",
            "مرحبًا",
            "สวัสดี",
            "KAMUSTA",
            "XIN CHÁO",
          ]}
          typeSpeed={200}
          backSpeed={150}
          loop
          showCursor={false}
        />
        <div className=" w-[5px] md:h-[4.5rem] bg-black cursor-animation"></div>
      </div>

      <h1 className="hello-text tracking-widest font-medium">
        I'm <span className="inline-block min-w-fit ">HOSOO CHA.</span>
      </h1>
      <div className="absolute bottom-[2rem] left-0 w-full flex justify-center">
        <span className="w-[25px] h-[50px] border border-gray-300 rounded-[20px] flex">
          <span className="block w-[10px] h-[10px] mouse-scroll"></span>
        </span>
      </div>
    </div>
  );
});

export default Home;
