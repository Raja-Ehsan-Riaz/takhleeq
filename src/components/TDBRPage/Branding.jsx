import RocketImage from "../../../public/Images/rocket.png"
import Image from "next/image";
const Branding = () => {
  return (
    <div className="flex flex-col lg:flex-row  px-[5%] py-20 gap-16 justify-between items-center overflow-hidden">
      <div className="lg:w-[60%]">
        <h2 className="uppercase text-5xl text-left font-bold">
          Tech-Driven Branding <br />
          <span className="text-[#8838D3]">
            Revolution
          </span>
        </h2>
        <p className="text-lg mt-4">
          At the helm of takhleeq.io&apos;s Tech-Driven Branding Revolution (TDBR) is
          a dynamic team of visionaries, innovators, and trailblazers. Committed
          to pushing the boundaries of creativity and technology, this team
          utilizes the power of cutting-edge tools and methodologies to redefine
          the landscape of branding.{" "}
        </p>
        <div className="text-lg mt-2 lg:mt-6">
          With a relentless focus on research, experimentation, and
          collaboration, they spearhead initiatives that leverage AI, data
          analytics, and emerging technologies to unlock new possibilities and
          drive unprecedented results for clients. Guided by a passion for
          innovation and a dedication to excellence, the team at takhleeq.io is
          pioneering a new era of brand experiences that captivate, inspire, and
          transform.
        </div>
      </div>
      <div className=" h-[35rem] w-[35rem] overflow-hidden rounded-full   relative ">
        <Image
          src={RocketImage}
          alt="people talking about IT"
          style={{objectFit:"cover",objectPosition:"0px 50%"}}
          className="absolute "
          fill

        />
      </div>
    </div>
  );
};

export default Branding;
