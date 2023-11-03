import React from "react";
import ProjecstList from "../components/projects/ProjectsList";
import AboutMe from "../components/about-me/AboutMe";
import TechList from "../components/technologies/TechList";
import Licenses from "../components/licenses/LicensesList";

import DefaultLayout from "../templates/Default";

function AppPage() {
  return (
    <DefaultLayout>
      <div className="lg:w-197 w-10/12 lg:mt-24  md:mt-16 mt-4">
        <AboutMe id="about" />
      </div>
      <div className="lg:w-197 w-10/12 lg:mt-48 md:mt-32 mt-8">
        <TechList id="techlist" />
      </div>
      <div className="lg:w-197 w-10/12 lg:mt-48 md:mt-32 mt-8">
        <ProjecstList id="projectslist" />
      </div>
      <div className="lg:w-197 w-10/12 lg:mt-48 md:mt-32 mt-8">
        <Licenses  id="licenses"/>
      </div>
    </DefaultLayout>
  );
}

export default AppPage;
