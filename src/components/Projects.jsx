import React, { useState, forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import ProjectHoverItem from "./ProjectHoverItem";
import gaVideo from "../media/ga-video1.mp4";
import gaPoster from "../imgs/ga-poster.PNG";
import todoVideo from "../media/todo-video.mp4";
import todoPoster from "../imgs/todo-poster.PNG";
import myWebVideo from "../media/myWeb-video.mp4";
import myWebPoster from "../imgs/myWeb-poster.PNG";
import ProjectItemModal from "./ProjectItemModal";
import onlyTheVibezVideo from "../media/onlythevibez.mp4";
import onlyTheVibezPoster from "../imgs/onlythevibez-poster.PNG";
import kanbanVideoTN from "../media/kanban-videoTN.mp4";
import kanbanVideoLong from "../media/kanban-videoLong.mp4";
import kanbanPoster from "../imgs/kanban.PNG";
import verdantGroveFE from "../imgs/verdant-grove-fe.PNG";
import verdantGroveFEVideo from "../media/verdant-grove-fe.mp4";
import vgFSVideo from "../media/vgfs-video.mp4";
import vgFSPoster from "../imgs/vgfsPoster.PNG";
import smartMenuVideo from "../media/smartMenu.mp4";
import smartMenuPoster from "../imgs/smartMenu.PNG";
import uilabPoster from "../imgs/uilab.PNG";

const Projects = forwardRef((props, ref) => {
  const [toggleProjHover, setToggleProjHover] = useState();
  const [openProjModal, setOpenProjModal] = useState();
  const onMouseOverHoverElement = (i) => {
    setToggleProjHover(i);
  };
  const onMouseOutHoverElement = (e) => {
    setToggleProjHover();
  };
  const toggleModal = (modalID) => {
    setOpenProjModal(modalID);

    document.body.style.overflow = "hidden";
  };
  const closeProjModal = (e) => {
    setOpenProjModal();
    document.body.style.overflow = "unset";
  };
  return (
    <div
      ref={ref}
      className="w-full min-h-screen   px-[1rem] py-[4rem] flex flex-col gap-y-[2.5rem] justify-center bg-[#f9f9f9]"
    >
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        delay={200}
        duration={1}
        animateOnce={true}
      >
        <h1 className="text-[2.2rem] sm:text-[3.5rem] font-semibold text-center text-[#0c2bc7]">
          MY PROJECTS
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        delay={500}
        duration={1.5}
        animateOnce={true}
      >
        <div className="flex flex-row flex-wrap gap-y-[1rem] gap-x-[1.5rem] w-full justify-center">
          {/* <div
            className="col-span-1 border border-[#dcdcdc] rounded-[0.5rem] h-[300px] relative cursor-pointer overflow-hidden w-[520px]"
            onMouseOver={() => onMouseOverHoverElement("1")}
            onMouseLeave={onMouseOutHoverElement}
            onClick={() => toggleModal("modal1")}
          >
            <video
              autoPlay
              loop
              muted
              disablePictureInPicture
              className=" object-cover md:object-fill  h-full w-full"
              poster={gaPoster}
            >
              <source src={gaVideo} type="video/mp4" />
            </video>
            <ProjectHoverItem
              projectName="Game Academy"
              projectDescription="Browse through products and play chess online"
              toggleProjHover={toggleProjHover}
              arrayOfTools={["React", "Tailwind CSS", "JavaScript"]}
              n="1"
            />
          </div> */}

          <div
            className="col-span-1 border border-[#dcdcdc] rounded-[0.5rem]  h-[300px] relative cursor-pointer overflow-hidden w-[520px]"
            onMouseOver={() => onMouseOverHoverElement("1")}
            onMouseLeave={onMouseOutHoverElement}
            onClick={() => toggleModal("modal1")}
          >
            <video
              autoPlay
              loop
              muted
              disablePictureInPicture
              className=" object-cover md:object-fill  h-full w-full"
              poster={myWebPoster}
            >
              <source src={myWebVideo} type="video/mp4" />
            </video>
            <ProjectHoverItem
              projectName="Personal Website"
              projectDescription="Portfolio Website"
              toggleProjHover={toggleProjHover}
              arrayOfTools={["React", "Tailwind CSS", "JavaScript"]}
              n="1"
            />
          </div>
          <div
            className="col-span-1 border border-[#dcdcdc] rounded-[0.5rem]  h-[300px] relative cursor-pointer overflow-hidden w-[520px]"
            onMouseOver={() => onMouseOverHoverElement("2")}
            onMouseLeave={onMouseOutHoverElement}
            onClick={() => toggleModal("modal2")}
          >
            <video
              autoPlay
              loop
              muted
              disablePictureInPicture
              className="object-cover  h-full w-full"
              poster={kanbanPoster}
            >
              <source src={kanbanVideoTN} type="video/mp4" />
            </video>
            <ProjectHoverItem
              projectName="Wave - Productivity App"
              projectDescription="Ride the Wave to Enhanced Productivity."
              toggleProjHover={toggleProjHover}
              arrayOfTools={[
                "React",
                "JavaScript",
                "SCSS",
                "NodeJS",
                "Express",
                "Postgres",
                "JWT",
              ]}
              n="2"
            />
          </div>
          <div
            className="col-span-1 border border-[#dcdcdc] rounded-[0.5rem] h-[300px] relative cursor-pointer overflow-hidden w-[520px]"
            onMouseOver={() => onMouseOverHoverElement("3")}
            onMouseLeave={onMouseOutHoverElement}
            onClick={() => toggleModal("modal3")}
          >
            <video
              autoPlay
              loop
              muted
              disablePictureInPicture
              className=" object-cover md:object-fill  h-full w-full"
              poster={vgFSPoster}
            >
              <source src={vgFSVideo} type="video/mp4" />
            </video>
            <ProjectHoverItem
              projectName="The Verdant Grove"
              projectDescription="E-commerce website selling fruits with a twist!"
              toggleProjHover={toggleProjHover}
              arrayOfTools={[
                "Vite",
                "TypeScript",
                "SCSS",
                "MUI",
                "Express",
                "MongoDB",
                "React Router",
              ]}
              n="3"
            />
          </div>
          <div
            className="col-span-1 border border-[#dcdcdc] rounded-[0.5rem]  h-[300px] relative cursor-pointer overflow-hidden w-[520px]"
            onMouseOver={() => onMouseOverHoverElement("4")}
            onMouseLeave={onMouseOutHoverElement}
            onClick={() => toggleModal("modal4")}
          >
            <video
              autoPlay
              loop
              muted
              disablePictureInPicture
              className="object-cover  h-full w-full"
              poster={onlyTheVibezPoster}
            >
              <source src={onlyTheVibezVideo} type="video/mp4" />
            </video>
            <ProjectHoverItem
              projectName="Only The Vibez"
              projectDescription="Get inspired on where to eat and what to do in Auckland"
              toggleProjHover={toggleProjHover}
              arrayOfTools={[
                "React",
                "TypeScript",
                "SASS/SCSS",
                "Node.js",
                "Express",
                "mySQL",
                "Framer Motion",
              ]}
              n="4"
            />
          </div>
          <div
            className="col-span-1 border border-[#dcdcdc] rounded-[0.5rem]  h-[300px] relative cursor-pointer overflow-hidden w-[520px]"
            onMouseOver={() => onMouseOverHoverElement("5")}
            onMouseLeave={onMouseOutHoverElement}
            onClick={() => toggleModal("modal5")}
          >
            <video
              autoPlay
              loop
              muted
              disablePictureInPicture
              className="object-cover  h-full w-full"
              poster={smartMenuPoster}
            >
              <source src={smartMenuVideo} type="video/mp4" />
            </video>
            <ProjectHoverItem
              projectName="SmartMenu"
              projectDescription="A Smart solution for your restaurants"
              toggleProjHover={toggleProjHover}
              arrayOfTools={[
                "React",
                "TypeScript",
                "TailwindCSS",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Framer Motion",
              ]}
              n="5"
            />
          </div>

          <div
            className="col-span-1 border border-[#dcdcdc] rounded-[0.5rem]  h-[300px] relative cursor-pointer overflow-hidden w-[520px]"
            onMouseOver={() => onMouseOverHoverElement("6")}
            onMouseLeave={onMouseOutHoverElement}
            onClick={() => toggleModal("modal6")}
          >
            <video
              autoPlay
              loop
              muted
              disablePictureInPicture
              className="object-cover  h-full w-full"
              poster={uilabPoster}
            >
              <source src={uilabPoster} type="video/mp4" />
            </video>
            <ProjectHoverItem
              projectName="UiLab"
              projectDescription="A collection of free ui components to elevate your interface."
              toggleProjHover={toggleProjHover}
              arrayOfTools={[
                "React",
                "TypeScript",
                "TailwindCSS",
                "Framer Motion",
              ]}
              n="6"
            />
          </div>

        </div>
      </AnimationOnScroll>
      {/* <div
        className={`fixed top-0 left-0 h-full w-screen flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
          openProjModal === "modal1"
            ? "visible"
            : "invisible transition-color duration-150 delay-300"
        }`}
      >
        <ProjectItemModal
          openProjModal={openProjModal}
          closeProjModal={closeProjModal}
          projName="Game Academy"
          projDescription="Browse through products and play chess online"
          arrayOfTools={[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Drag & Drop API",
          ]}
          projVideo={gaVideo}
          projPoster={gaPoster}
          projAbout={`The Game Academy is a website where users can browse through products and play a game of chess with other registered users through the server.

                      This was a full stack website that was part of my school project that sparked my passion for web development.
                      
                      Integrating live chess matches was very enjoyable as I also enjoy playing chess myself. As a fellow gaming enthusiast, I am excited to expand more classic games to the website!`}
          projWebsite="https://hosoocha20.github.io/game-academy/"
          projGit="https://github.com/hosoocha20/game-academy"
        />
      </div> */}
      <div
        className={`fixed top-0 left-0 h-full w-screen flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
          openProjModal === "modal1"
            ? "visible"
            : "invisible transition-color duration-150 delay-300"
        }`}
      >
        <ProjectItemModal
          openProjModal={openProjModal}
          closeProjModal={closeProjModal}
          projName="Personal Website"
          projDescription="Portfolio Website"
          arrayOfTools={["React", "Tailwind CSS", "JavaScript"]}
          projVideo={myWebVideo}
          projPoster={myWebPoster}
          projAbout={`My e-portfolio showcasing my projects that I have worked on.
          I enjoy creating aesthetic and unique experiences and hoped to express that through my personal website.
          `}
          projWebsite="https://hosoo.dev/"
        />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-screen flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
          openProjModal === "modal2"
            ? "visible"
            : "invisible transition-color duration-150 delay-300"
        }`}
      >
        <ProjectItemModal
          openProjModal={openProjModal}
          closeProjModal={closeProjModal}
          projName="Wave"
          projDescription="Ride the Wave to Enhanced Productivity."
          arrayOfTools={[
            "React",
            "JavaScript",
            "SCSS",
            "NodeJS",
            "Express",
            "Postgres",
            "JWT",
          ]}
          projVideo={kanbanVideoLong}
          projPoster={kanbanPoster}
          projAbout={`
          Wave is more than just a task management website—it's your personalized productivity hub designed to streamline your daily tasks and elevate your efficiency. With Wave, you can jot down your to-dos, organize them effortlessly, and track your progress seamlessly.
          
          By creating an account on Wave, you unlock a world of productivity that's accessible anytime, anywhere. Your tasks are securely stored in our database, ensuring you never miss a beat in your workflow.

          Tailor each task list with unique background themes that resonate with your style and mood. Additionally, the 'My Day' feature enables you to curate a daily list of tasks, helping you maximize your productivity and accomplish more within your day.
          `}
          projGit="https://github.com/hosoocha20/wave"
        />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-screen flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
          openProjModal === "modal3"
            ? "visible"
            : "invisible transition-color duration-150 delay-300"
        }`}
      >
        <ProjectItemModal
          openProjModal={openProjModal}
          closeProjModal={closeProjModal}
          projName="The Verdant Grove"
          projDescription="E-commerce website selling fruits with a twist!"
          arrayOfTools={[
            "Vite",
            "TypeScript",
            "SCSS",
            "MUI",
            "Express",
            "MongoDB",
            "React Router",
          ]}
          projVideo={vgFSVideo}
          projPoster={vgFSPoster}
          projAbout={`The Verdant Grove is an e-commerce website selling fruits with a twist! The twist being - hybrid fruits real and imaginative. This project is built to showcase a user-friendly and unique shopping journey that simulates a fully functional store that follows conventions.
          
                      All fruits and hybrid fruits (both real and imagined) are brought to life using the power of AI. Users can create accounts, log in, search and add products to their carts, manage checkout selections, proceed through payment simulations, update profile and view order history.

                      Additionally, the website boasts a fully responsive design, ensuring a smooth shopping experience across desktops, tablets, and mobile devices.
                      `}
          projWebsite="https://the-verdant-grove.vercel.app"
          projGit="https://github.com/hosoocha20/The-Verdant-Grove"
        />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-screen flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
          openProjModal === "modal4"
            ? "visible"
            : "invisible transition-color duration-150 delay-300"
        }`}
      >
        <ProjectItemModal
          openProjModal={openProjModal}
          closeProjModal={closeProjModal}
          projName="Only The Vibez"
          projDescription="A curation of Auckland's hottest and trendiest places and eateries"
          arrayOfTools={[
            "React",
            "TypeScript",
            "SCSS",
            "Node.js",
            "Express",
            "mySQL",
            "Framer Motion",
          ]}
          projVideo={onlyTheVibezVideo}
          projPoster={onlyTheVibezPoster}
          projAbout={`Only The Vibez shares trendy hotspots in Auckland to help inspire locals and visitors to explore Auckland, New Zealand. 
          
                      Auckland's eateries are popping off lately. As a food lover myself, my aim is to share these wonderful places to those who are curious.
                      `}
          projGit="https://github.com/hosoocha20/onlyTheVibez"
        />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-screen flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
          openProjModal === "modal5"
            ? "visible"
            : "invisible transition-color duration-150 delay-300"
        }`}
      >
        <ProjectItemModal
          openProjModal={openProjModal}
          closeProjModal={closeProjModal}
          projName="SmartMenu"
          projDescription="A Smart solution for your restaurants"
          arrayOfTools={[
            "React",
            "TypeScript",
            "TailwindCSS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Framer Motion",
          ]}
          projVideo={smartMenuVideo}
          projPoster={smartMenuPoster}
          projAbout={`SmartMenu is a user-friendly self-service ordering software designed to enhance the dining experience for both customers and restaurants.
          
                      With SmartMenu, customers can effortlessly browse menus, customize orders, and complete payments without the need for waitstaff interventions.

                      SmartMenu is currently still being developed. Im working to integrate a robust backend system to accomodate the features, then once complete I plan on deploying to the app stores.
                      `}
          projGit="https://github.com/hosoocha20/menu-app"
        />
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-screen flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
          openProjModal === "modal6"
            ? "visible"
            : "invisible transition-color duration-150 delay-300"
        }`}
      >
        <ProjectItemModal
          openProjModal={openProjModal}
          closeProjModal={closeProjModal}
          projName="UiLab"
          projDescription="A collection of free ui components to elevate your interface"
          arrayOfTools={[
            "React",
            "TypeScript",
            "TailwindCSS",
            "Framer Motion",
          ]}
          projVideo={uilabPoster}
          projPoster={uilabPoster}
          projAbout={`UILab is a personal project I'm currently developing initiated to share reusable UI components. 
            
                      It's a collection of pre-built React components designed to accelerate web development. By providing a library of easily accessible UI elements, UILab aims to help developers create visually appealing and user-friendly interfaces with efficiency. 
                      
                      Inspired by modern design trends, the components are crafted with attention to detail and are ready to be integrated into any React project through simple copy and pasting.
                        `}
          projGit="https://github.com/hosoocha20/uilab"
        />
      </div>

    </div>
  );
});

export default Projects;
