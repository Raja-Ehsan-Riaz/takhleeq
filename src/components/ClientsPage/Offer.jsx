import OfferCard from "./OfferCard";

const Offer = () => {
  const offers = [
    {
      title: "Content Creation",
      src: "/Icons&Symbols/offer/content-creation.png",
    },
    {
      title: "Creative Design",
      src: "/Icons&Symbols/offer/creative-design.png",
    },
    {
      title: "Digital Marketing",
      src: "/Icons&Symbols/offer/digital-marketing.png",
    },
    {
      title: "Industrial Design",
      src: "/Icons&Symbols/offer/industrial-factory.png",
    },
    { title: "Media Services", src: "/Icons&Symbols/offer/media-services.png" },
    {
      title: "Web Development",
      src: "/Icons&Symbols/offer/web-development.png",
    },
    { title: "UIUX Design", src: "/Icons&Symbols/offer/uiux-design.png" },
  ];
  return (
    <div className="flex flex-col items-center justify-center px-[5%] py-28  bg-[#8838D3] text-white">
      <h2 className="uppercase text-5xl text-left font-semibold">
        WHAT DO WE <span className="text-black"> OFFER?</span>
      </h2>
      <div className="text-lg mt-4 text-center">
        We specialize in UX/UI design for websites, SaaS, and web/mobile apps,
        blending the latest UI/UX trends with clients&apos; unique goals.
      </div>
      <div className="flex flex-wrap justify-center gap-6 items-center  mt-12">
        {offers.slice(0, 4).map((offer, index) => (
          <OfferCard title={offer.title} src={offer.src} key={index} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 items-center mt-6">
        {offers.slice(4).map((offer, index) => (
          <OfferCard title={offer.title} src={offer.src} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
