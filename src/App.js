import { useRef, useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import { ReactComponent as FlowerHomeIcon } from "./svg/flowerHome.svg";

function App() {
  const [activeComponent, setActiveComponent] = useState("home");


  const homeRef = useRef();
  const aboutRef = useRef();
  const projRef = useRef();
  const contactRef = useRef();

  const handleNavClick = (i) => {
    switch (i) {
      case 1:
        homeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveComponent("home");
        break;
      case 2:
        aboutRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveComponent("about");
        break;
      case 3:
        projRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveComponent("project");
        break;
      case 4:
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveComponent("contact");
    }
  };

  // const cursorRounded = document.querySelector('.myCursor');
  // const moveCursor = (e)=> {
  //   const mouseY = e.clientY;
  //   const mouseX = e.clientX;

  //   cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  // }
  // window.addEventListener("mousemove", moveCursor);
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
        setActiveComponent("home");
      } else if (
        homeRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
        projRef.current.offsetTop - window.scrollY >= window.innerHeight / 2 
      ) {
        setActiveComponent("about");

      } else if (
        aboutRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
        contactRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
      ) {
        setActiveComponent("project");
      } else {
        setActiveComponent("contact");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" w-full  h-screen">
      {/* <div className="myCursor"><span className="mouseBall"></span></div> */}

        <div className="fixed top-[2rem] px-[2rem] z-[9999] w-screen">
          <nav className="sticky top-0 flex justify-center  min-[490px]:justify-between w-full ">
            <div className="hidden min-[490px]:block tracking-widest text-[1.2rem] sm:text-[1.5rem] menu-text font-medium">
              H<span className={`inline-block ${activeComponent === "home" ? '' : 'rotateC' }`}>C</span>
            </div>
            <div className={` hidden sm:block font-medium tracking-widest text-[1.2rem] transition-opacity duration-500 ease-linear ${activeComponent === "home" ? 'sm:block sm:opacity-100' : 'sm:opacity-0'}`}>
              HOSOO CHA
            </div>
            <ul className="font-semibold menu-text md:text-[1.2rem] sm:text-[1rem] text-[1rem] sm:text-right text-center flex gap-x-[0.7rem] gap-y-[0.3rem] sm:flex-col justify-items-end sm:items-end items-center">
              <li
                className={`cursor-pointer  w-fit px-[3px] relative before:absolute before:left-0 before:z-[-1]  before:h-full  before:duration-[300ms] before:delay-100 before:ease-linear before:bg-my-yellow before:rounded ${
                  activeComponent === "home"
                    ? "before:transition-[width] before:w-full "
                    : "before:transition-none before:w-0 "
                } `}
                onClick={() => handleNavClick(1)}
              >
                <FlowerHomeIcon className="w-[2.2rem] h-[2.2rem] sm:w-[3.5rem] sm:h-[3.5rem] py-[5px] hover:rotate-[270deg] transition-transform duration-700 ease-in-out" />
              </li>
              <li
                className={`cursor-pointer  w-fit px-[4px] relative before:absolute before:left-0 before:z-[-1]  before:h-full before:duration-[300ms] before:delay-100 before:ease-linear before:bg-my-yellow before:rounded ${
                  activeComponent === "about"
                    ? "before:transition-[width] before:w-full"
                    : "before:transition-none before:w-0 "
                } `}
                onClick={() => handleNavClick(2)}
              >
                ABOUT
              </li>
              <li
                className={`cursor-pointer  w-fit px-[4px] relative before:absolute before:left-0 before:z-[-1]  before:h-full before:duration-[300ms] before:delay-100 before:ease-linear before:bg-my-yellow before:rounded ${
                  activeComponent === "project"
                    ? "before:transition-[width] before:w-full"
                    : "before:transition-none before:w-0 "
                } `}
                onClick={() => handleNavClick(3)}
              >
                PROJECTS
              </li>
              <li
                className={`cursor-pointer  w-fit px-[4px] relative before:absolute before:left-0 before:z-[-1]  before:h-full before:duration-[300ms] before:delay-100 before:ease-linear before:bg-my-yellow before:rounded ${
                  activeComponent === "contact"
                    ? "before:transition-[width] before:w-full"
                    : "before:transition-none before:w-0 "
                } `}
                onClick={() => handleNavClick(4)}
              >
                CONTACT
              </li>
            </ul>
          </nav>
        </div>


        <Home ref={homeRef} activeComponent={activeComponent} />
        <About ref={aboutRef} />
        <Projects ref={projRef} />
        <Contact ref={contactRef} />



    </div>
  );
}

export default App;
