import { DiJavascript } from "react-icons/di";
import { SiEthereum } from "react-icons/si";

export default function MyServices() {
  return (
    <div className="xl:w-full lg:w-full flex flex-col items-center xl:items-start lg:items-start space-y-2 mx-8 mt-12 divide-y divide-green/30">
      <div>
        <h2 className="font-oswald font-medium text-white text-xl text-center md:text-2xl xl:text-2xl xl:text-left lg:text-2xl lg:text-left">
          My Services
        </h2>
      </div>

      <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row justify-between md:divide-x md:divide-green/30 xl:divide-x xl:divide-green/30 lg:divide-x lg:divide-green/30">
        <div className="flex flex-col justify-center gap-4 py-6 md:pr-10 xl:pr-10 lg:pr-10">
          <DiJavascript className="text-green border border-green rounded-full text-center p-2 w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12" />
          <h3 className="font-oswald font-normal text-base md:text-lg xl:text-lg lg:text-lg text-white">
            Front End
          </h3>
          <p className="font-oswald font-thin text-white text-sm md:text-base xl:text-base lg:text-base">
            Specializing in front-end development, I create modern, responsive
            websites tailored to your unique requirements. Utilizing
            cutting-edge technologies such as React, Next, Vue and Nuxt, I aim
            to captivate your target audience. My adaptable approach ensures the
            delivery of visually stunning and user-friendly websites, designed
            to leave a lasting impression on both clients and employers.
          </p>
        </div>

        <div className="flex flex-col justify-left gap-4 pt-6 md:pl-10 xl:pl-10 lg:pl-10">
          <SiEthereum className="text-green border border-green rounded-full text-center p-2 w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 lg:w-12 lg:h-12" />
          <h3 className="font-oswald font-normal text-base md:text-lg xl:text-lg lg:text-lg text-white">
            Smart Contracts
          </h3>
          <p className="font-oswald font-thin text-white text-sm md:text-base xl:text-base lg:text-base">
            Unlock the power of secure, tested, and gas-efficient smart
            contracts expertly deployed on your chosen blockchain network. I
            craft smart contracts using industry-leading patterns, fortified
            with rigorously audited libraries and developed within
            state-of-the-art environments. Elevate your blockchain endeavors
            with the assurance of robust and efficient smart contract solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
