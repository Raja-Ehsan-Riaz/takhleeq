import Link from "next/link";

const ContactStrip = () => {
  return (
    <div className="flex flex-row ietms-center py-16 bg-[#9670FF] px-[10%] justify-between">
      <p className="text-white text-4xl font-light uppercase">
        like what you see?{" "}
        <span className="text-black font-bold">Let&apos;s work</span>
      </p>
      <Link
        href={"#"}
        className="px-8 py-4 bg-white text-black -mt-[10px] font-semibold"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default ContactStrip;
