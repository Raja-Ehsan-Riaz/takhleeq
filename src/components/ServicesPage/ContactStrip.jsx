import Link from "next/link";

const ContactStrip = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center py-16 px-[10%] justify-between">
      <p className="text-4xl font-bold uppercase">
        like what you see?{" "}
        Let&apos;s work
      </p>
      <Link href="/contact-us">
            <button className="relative  bg-transparent px-12 py-5 bg-white border border-black text-black font-bold text-sm transition-colors overflow-hidden before:absolute before:-right-[100%] before:top-0 before:z-10 before:h-[100rem] before:w-[200%] before:origin-top-right before:rotate-[15deg] before:hover:rotate-0 before:scale-x-50 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
              <div className="relative z-20">Contact Us</div>
            </button>
          </Link>
    </div>
  );
};

export default ContactStrip;
