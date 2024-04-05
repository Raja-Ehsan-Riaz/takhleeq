const Branding = () => {
  return (
    <div className="flex flex-row pl-[5%] py-28 gap-[10%] items-center overflow-hidden">
      <div className="w-[60%]">
        <h2 className="uppercase text-6xl text-left font-bold">
          Tech-Driven Branding <br />
          <span className="text-[#8838D3] border-b-8 border-b-black">
            Revolution
          </span>
        </h2>
        <p className="text-lg mt-12">
          At the helm of takhleeq.io's Tech-Driven Branding Revolution (TDBR) is
          a dynamic team of visionaries, innovators, and trailblazers. Committed
          to pushing the boundaries of creativity and technology, this team
          utilizes the power of cutting-edge tools and methodologies to redefine
          the landscape of branding.{" "}
        </p>
        <div className="text-lg mt-6">
          With a relentless focus on research, experimentation, and
          collaboration, they spearhead initiatives that leverage AI, data
          analytics, and emerging technologies to unlock new possibilities and
          drive unprecedented results for clients. Guided by a passion for
          innovation and a dedication to excellence, the team at takhleeq.io is
          pioneering a new era of brand experiences that captivate, inspire, and
          transform.
        </div>
      </div>
      <div className="w-[45%] h-full ">
        {/* <Image
          src={ITServicesImage}
          alt="people talking about IT"
          className=""
        /> */}
      </div>
    </div>
  );
};

export default Branding;
