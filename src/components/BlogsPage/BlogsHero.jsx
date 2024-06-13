import Image from "next/image";
const BlogsHero = () => {
    return (
      <div className="flex h-[70vh] relative overflow-hidden bg-gray-900/70 p-2 ">
        <Image
          fill={true}
          style={{ objectFit: "cover" }}
          src="/Images/Heros/blogs.jpg"
          className=" absolute -z-10"
        />
        <h1 className="text-[#8838D3] pop text-center mx-auto text-4xl md:text-5xl uppercase font-bold mb-10 mt-auto">
          News &  {" "}
          <span className="text-white ">
            Blogs
          </span>
        </h1>
      </div>
    );
  };
  
  export default BlogsHero;