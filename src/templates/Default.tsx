import React from "react";
import ScrollingHeader from "../components/header/header";
interface DefaultLayout {
  label: string;
  onClick: () => void;
}

const DefaultLayout: React.FC<any> = ({ children }) => {
  return (
    <div className="h-screen">
      <header>
        <div className="py-6 h-32 bg-blue-100 blur-md transform"></div>
        <ScrollingHeader />
      </header>
      <main className="flex flex-col justify-center items-center">
        {children}
      </main>
      <footer id="contacts" className="relative lg:pt-48 md:pt-32 pt-8">
        <div className="absolute w-full h-full z-0 bg-gradient-to-r from-white via-yellow to-blue-100 blur-md transform"></div>
        <div className="relative z-10 flex flex-col items-center lg:w-197 w-10/12  mx-auto pb-32 text-center text-base">
          <h2
            className="self-center font-sans mt-4 mb-5 max-w-xl self-start text-left
     text-slate-900 text-2xl lg:text-4xl
      tracking-tight font-bold dark:text-white"
          >
            Please contact me via:
          </h2>
          <p className="mt-5 text-lg sm:text-center text-left">
            I'm Always open for any new opportunities, my inbox is open. Whether
            you have a question or just want to say hi, I'll try my best to get
            back to you!
          </p>

          <div
            className="animate-bounce bg-white dark:bg-slate-800 mt-10 mb-5 p-2 w-10 h-10
           ring-1 ring-slate-900/5 dark:ring-slate-200/20
            shadow-lg rounded-full flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="lightblue"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          <div className="contactInfo">
            <p className="mt-2 text-lg">My Email: staspolivoda2000@gmail.com</p>
            <p className="mt-2 text-lg">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/stas-polivoda/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/stas-polivoda/
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;
