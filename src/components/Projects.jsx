import React, { useState, forwardRef } from "react";
import ProjectHoverItem from "./ProjectHoverItem";
import gaVideo from "../media/ga-video1.mp4";
import gaPoster from "../imgs/ga-poster.PNG";
import todoVideo from "../media/todo-video.mp4";
import todoPoster from "../imgs/todo-poster.PNG";
import myWebPoster from "../imgs/myWeb-poster.PNG";
import ProjectItemModal from "./ProjectItemModal";

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
      className="w-full min-h-screen  px-[1rem] py-[4rem] flex flex-col gap-y-[2.5rem] justify-center bg-[#f9f9f9]"
    >
      <h1 className="text-[3.5rem] font-semibold text-center">MY PROJECTS</h1>
      <div className="flex flex-row flex-wrap gap-y-[1rem] gap-x-[1.5rem] w-full justify-center">
        <div
          className="col-span-1 border rounded-[0.5rem] h-[300px] relative cursor-pointer overflow-hidden min-[1426px]:min-w-[483px] w-[450px]"
          onMouseOver={() => onMouseOverHoverElement("1")}
          onMouseLeave={onMouseOutHoverElement}
          onClick={() => toggleModal("modal1")}
        >
          <video autoPlay loop muted id="ga-video" poster={gaPoster}>
            <source src={gaVideo} type="video/mp4" />
          </video>
          <ProjectHoverItem
            projectName="Game Academy"
            projectDescription="Browse through products and play chess online"
            toggleProjHover={toggleProjHover}
            arrayOfTools={["React", "Tailwind CSS", "JavaScript"]}
            n="1"
          />
        </div>

        <div
          className="col-span-1 border rounded-[0.5rem]  h-[300px] relative cursor-pointer overflow-hidden w-[520px]"
          onMouseOver={() => onMouseOverHoverElement("2")}
          onMouseLeave={onMouseOutHoverElement}
          onClick={() => toggleModal("modal2")}
        >
          <img src={myWebPoster} className="md:object-fill  h-full w-full" />
          <ProjectHoverItem
            projectName="Personal Website"
            projectDescription="Portfolio Website"
            toggleProjHover={toggleProjHover}
            arrayOfTools={["React", "Tailwind CSS", "JavaScript"]}
            n="2"
          />
        </div>
        <div
          className="col-span-1 border rounded-[0.5rem]  h-[300px] relative cursor-pointer overflow-hidden min-w-[483px]"
          onMouseOver={() => onMouseOverHoverElement("3")}
          onMouseLeave={onMouseOutHoverElement}
          onClick={() => toggleModal("modal3")}
        >
          <video autoPlay loop muted id="ga-video" poster={todoPoster}>
            <source src={todoVideo} type="video/mp4" />
          </video>
          <ProjectHoverItem
            projectName="My To Do App"
            projectDescription="Make a list of things to do and write notes"
            toggleProjHover={toggleProjHover}
            arrayOfTools={["React", "CSS", "JavaScript"]}
            n="3"
          />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
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
            "Drag and Drop API",
          ]}
          projVideo={gaVideo}
          projPoster={gaPoster}
          projAbout="The Game Academy is a website where users can browse through products and play a game of chess with other registered users through the server."
        />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
          openProjModal === "modal2"
            ? "visible"
            : "invisible transition-color duration-150 delay-300"
        }`}
      >
        <ProjectItemModal
          openProjModal={openProjModal}
          closeProjModal={closeProjModal}
          projName="Personal Website"
          projDescription="Portfolio Website"
          arrayOfTools={[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Framer Motion",
          ]}
          projPoster={myWebPoster}
          projAbout="An e-portfolio showcasing my projects that I have worked on."
        />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full flex items-center justify-center z-[99999] bg-[rgba(31,32,41,.75)] ${
          openProjModal === "modal3"
            ? "visible"
            : "invisible transition-color duration-150 delay-300"
        }`}
      >
        <ProjectItemModal
          openProjModal={openProjModal}
          closeProjModal={closeProjModal}
          projName="My To Do App"
          projDescription="Make a list of things to do and write notes"
          arrayOfTools={["React", "CSS", "JavaScript"]}
          projVideo={todoVideo}
          projPoster={todoPoster}
          projAbout="My To Do App is a productivity app for users to list down tasks, important tasks, get the local weather and write notes."
        />
      </div>
    </div>
  );
});

export default Projects;
