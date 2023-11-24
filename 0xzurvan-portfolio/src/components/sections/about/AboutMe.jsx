export default function AboutMe() {
  return (
    <div className="xl:w-full lg:w-full flex flex-col items-center xl:items-start lg:items-start space-y-2 mx-8 my-4 divide-y divide-green/30">
      <div className="flex flex-col">
        <h2 className="font-oswald font-medium text-white text-xl text-left md:text-2xl xl:text-2xl xl:text-left lg:text-2xl lg:text-left">
          About me
        </h2>
      </div>
      <div className="flex flex-col flex-wrap space-y-2 pt-6">
        <p className="font-oswald font-normal text-white text-base md:text-lg xl:text-lg lg:text-lg">
          Greetings! I'm 0xZurvan
        </p>
        <p className="xl:w-[590px] lg:w-[580px] font-oswald font-thin text-white text-sm md:text-base xl:text-base lg:text-base pb-4">
          A seasoned self-taught Smart Contract and Front-End developer with a
          fervor for pioneering dApps. I am on the lookout for stimulating job
          opportunities that allow me to explore new technologies and tackle
          intricate challenges while bringing innovative concepts to life.
          Flourishing in collaborative and inventive settings, I am eager to
          contribute my skills to a team that shares similar values. Let's
          embark on the journey to shape the future of the decentralized web
          together!
        </p>
        <ul className="grid grid-cols-2 place-content-evenly gap-2">
          <li className="font-oswald font-thin text-white text-[10px] md:text-base xl:text-base lg:text-base">
            EXPERIENCE - 3 Years
          </li>
          <li className="font-oswald font-thin text-white text-[10px] md:text-base xl:text-base lg:text-base">
            FULL TIME JOB - Available
          </li>
          <li className="font-oswald font-thin text-white text-[10px] md:text-base xl:text-base lg:text-base">
            FREELANCE - Available
          </li>
          <li className="font-oswald font-thin text-white text-[10px] md:text-base xl:text-base lg:text-base">
            RESIDENCE - Dominican Republic
          </li>
        </ul>
      </div>
    </div>
  );
}
