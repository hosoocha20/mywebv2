import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projRef = useRef();
  const contactRef = useRef();

  const handleNavClick = (i) => {
    switch (i) {
      case 1:
        homeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 2:
        aboutRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case 3:
        projRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case 4:
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  };
  return (
    <div className=" relative h-screen w-full ">
      <div className="absolute w-full px-[2rem] py-[2rem] h-[400%]">
        <div className="sticky top-[2rem] z-[9999] ">
          <NavBar handleNavClick={handleNavClick} />
        </div>
      </div>

      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
