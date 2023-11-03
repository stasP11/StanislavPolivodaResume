import React, { useState, useEffect, useRef } from "react";
import debounce from "../../helpers/debouncer";

function ScrollingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const aboutScrolsPositions: any = useRef(0);
  const techlistScrolsPositions: any = useRef(0);
  const projectlistScrolsPositions: any = useRef(0);
  const licensesScrolsPositions: any = useRef(0);
  const contactsScrolsPositions: any = useRef(0);

  const scrollsPositionsDictionary: any = {
    about: aboutScrolsPositions,
    techlist: techlistScrolsPositions,
    projectslist: projectlistScrolsPositions,
    licenses: licensesScrolsPositions,
    contacts: contactsScrolsPositions,
  };

  const handleClick = (name: string) => {
    const positionForScroll = scrollsPositionsDictionary[name].current;
    window.scrollTo(0, positionForScroll - positionForScroll * 0.05);
    setTimeout(()=> setActiveSection(name), 50);
  };

  //find positions of all sections
  useEffect(() => {
    const sections = document.querySelectorAll("[id]");
    sections.forEach((section: any) => {
      if (scrollsPositionsDictionary[section.id]) {
        scrollsPositionsDictionary[section.id].current = section.offsetTop;
      }
    });
  }, []);

  //find which section the scroll is on
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");
      const scrollPosition = window.scrollY;
      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop * 0.85  &&
          scrollPosition < (sectionTop + sectionHeight) * 0.76
        ) {
          setActiveSection(section.id);
        }
      });
    };

    const processChange = debounce(() => handleScroll(), 0);
    window.addEventListener("scroll", processChange);

    return () => {
      window.removeEventListener("scroll", processChange);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-30 w-full flex items-center left-1/2 transform -translate-x-1/2
     ${isScrolled ? "w-full" : "md:w-[60%]"} 
     ${isScrolled ? "top-[-5px]" : "top-[35px]"}
     ${isScrolled ? "rounded-none" : "rounded-2xl"}
     ${isScrolled ? "border-b" : "border"}
     p-4 pl-6 pr-6  shadow-sm
     bg-white pr-46 pl-46 border-gray-400 transition-all`}
    >
      <div
        className={`flex flex-wrap justify-between w-full mx-auto lg:text-lg md:text-base sm:text-sm text-xs
      ${isScrolled ? "md:w-[50%]" : "md:w-[85%]"}
      `}
      >
        <span
          onClick={() => handleClick("about")}
          className={`${
            activeSection === "root" || activeSection === "about"
              ? "text-green-400"
              : ""
          } hover:text-green-400"`}
        >
          About
        </span>
        <span
          onClick={() => handleClick("techlist")}
          className={`${
            activeSection === "techlist" ? "text-green-400" : ""
          } hover:text-green-400"`}
        >
          Technologies
        </span>
        <span
          onClick={() => handleClick("projectslist")}
          className={`${
            activeSection === "projectslist" ? "text-green-400" : ""
          } hover:text-green-400"`}
        >
          Projects
        </span>
        <span
          onClick={() => handleClick("licenses")}
          className={`${
            activeSection === "licenses" ? "text-green-400" : ""
          } hover:text-green-400"`}
        >
          Certifications
        </span>
        <span
          onClick={() => handleClick("contacts")}
          className={`${activeSection === "contacts" ? "text-green-400" : ""}`}
        >
          Contacts
        </span>
      </div>
    </div>
  );
}

export default ScrollingHeader;
