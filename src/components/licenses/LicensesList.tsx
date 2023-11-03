import { LicensesButton } from "../buttons/tag";
import certificates from "../../data/licenses"

function LicenseCard({ certificate }: any) {
  const { name, href, img, time } = certificate;
  return (
    <div
      className="flex justify-between w-full border border-grey-light bg-white rounded-b
      lg:rounded-b-none lg:rounded-r p-4 leading-normal
      shadow-md"
    >
      <div
        className="icon w-[16%] h-auto"
        style={{
          backgroundImage: `url("${img}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>

      <div className="flex flex-col w-[82%] text-left">
        <h3
          className="font-sans mb-2 max-w-xl self-start text-left
     text-slate-900 text-xl lg:text-2xl
      tracking-tight font-bold dark:text-white"
        >
          {name}
        </h3>
        <div className="flex items-baseline">
          <span>⏰</span>
          <time
            dateTime={time}
            className="block font-mono text-sm leading-6 text-slate-500 dark:text-slate-400"
          >
            Issued: {time}
          </time>
        </div>
        <a
          className="sm:w-80 mt-2"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <LicensesButton />
        </a>
      </div>
    </div>
  );
}

function Licenses({id}: any) {
  return (
    <div id={id} >
      <h2
        className="font-sans mt-4 mb-5 max-w-xl self-start text-left
     text-slate-900 text-2xl lg:text-4xl
      tracking-tight font-bold dark:text-white"
      >
        Licenses & certifications:
      </h2>
      {certificates.map((certificate: any) => (
       <div className="m-5" key={certificate.name}><LicenseCard certificate={certificate} /></div>
      ))}
    </div>
  );
}

export default Licenses;
