import OfferCard from "./OfferCard";

const Offer = () => {
    return (
      <div className="flex flex-col items-center justify-center px-[20%] py-28  bg-[#8838D3] text-white">
        <h2 className="uppercase text-4xl text-left font-semibold">
        WHAT DO WE {" "}
          <span className="text-black"> OFFER?</span>
        </h2>
        <div className="text-lg mt-4 text-center">
          We specialize in UX/UI design for websites, SaaS, and web/mobile apps,
          blending the latest UI/UX trends with clients&apos; unique goals. 
        </div>
        <div className="flex flex-wrap justify-center gap-16 items-center  mt-12">
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
        </div>
      </div>
    );
  };
  
  export default Offer;
  