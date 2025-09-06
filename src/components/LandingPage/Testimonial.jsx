import Image from "next/image";

const Testimonial = ({ even, Name, Designation, Text, Picture }) => {
  return (
    <div
      className={`mt-16 mb-4  mx-[5%]  lg:h-[22rem] relative shadow-lg rounded-3xl transition duration-300 group bg-gray-100 text-black `}
    >
      <div className="relative w-full h-full z-20 flex flex-col items-start justify-center gap-6 p-12 ">
        <div className="">{Text}</div>
        <div className="flex space-x-4 items-center ">
          <div className="h-16 w-16 rounded-full bg-gray-600  overflow-hidden relative">
            <Image
              layout="fill"
              style={{ objectFit: "cover", objectPosition: "20% 0%" }}
              src={Picture}
              className="relative"
            />
          </div>
          <div className="max-w-[16rem] text-sm">
            <span className="font-bold">{Name}</span>, <br /> {Designation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

// hover:bg-gradient-to-b from-[#6A4EB8] to-[#B418FB]
