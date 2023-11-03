import personalInfo from "../../data/aboutMe"
const logo: any = "./images/StasLogo5.jpg";

function AboutMe({id}: any) {
  return (
    <>
      <h1 id={id} className="font-sans mt-4 mb-5 text-left max-w-xl text-slate-900 text-3xl lg:text-6xl tracking-tight font-bold dark:text-white">
        {personalInfo.hello}
      </h1>
      <div className="flex flex-wrap text-left items-center">
        <div className="text md:w-2/3 w-full text-m leading-6 text-slate-500 dark:text-slate-400">
          <div
            className="mt-5 sm:text-lg"
            dangerouslySetInnerHTML={{ __html: personalInfo.description }}
          ></div>
        </div>
        <div className="relative photo lg:w-1/3 md:w-1/3 self-start  md:block hidden">
          <img src={logo} className="absolute top-[-105px] left-[45px] rounded-full" alt="dev" />
        </div>
        <div className="skills w-full"></div>
      </div>
    </>
  );
}

export default AboutMe;
