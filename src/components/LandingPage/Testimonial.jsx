import Image from "next/image";

const Testimonial = ({ even }) => {
  return (
    <div
      className={`mt-16 mb-4  mx-[10%] h-full relative ${
        even
          ? "bg-gray-300 text-black"
          : "bg-gradient-to-b from-[#6A4EB8] to-[#B418FB] text-white"
      } `}
    >
      <div className="relative w-full h-full z-20 flex flex-col items-start justify-between gap-6 p-8 text-lg">
        <div className="w-full relative">
          <div className="h-32 w-32 rounded-full bg-gray-600 mx-auto overflow-hidden relative">
            <Image
              layout="fill"
              style={{ objectFit: "cover", objectPosition: "20% 0%" }}
              src="/Images/team-dummy.png"
              className="relative"
            />
          </div>
          <Image
            width={80}
            height={80}
            src={`/Icons&Symbols/Quote-Right${even ? "-Dark" : ""}.png`}
            className="absolute left-0 -bottom-5 "
          />
        </div>
        <div className="opacity-80">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
          voluptatem. Quaerat amet veniam accusantium explicabo quo at, ducimus
          quam magnam ut voluptatum
        </div>
        <div className="opacity-80">
          <span className="font-bold">Saqib Malik</span>, CEO Takhleeq
        </div>
      </div>

      <Image
        width={200}
        height={200}
        src={`/Icons&Symbols/Quote-Right${even ? "-Dark" : ""}.png`}
        className="absolute right-10 top-0 z-0"
      />
    </div>
  );
};

export default Testimonial;
