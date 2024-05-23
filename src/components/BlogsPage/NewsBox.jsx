import Link from "next/link";
const NewsBox = ({ blogs ,title }) => {
  return (
    <div className="flex flex-col w-full rounded-md overflow-hidden">
      <div className="font-bold bg-[#b09edd] p-4 text-xl">Recent News</div>
      {blogs.filter((blog)=>(blog.title!=title)).slice(0, 3).map((blog, index) => {
        return (
          <Link key={index} href={`blog/${blog.title}`}>
            <div
              className={`${
                index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
              }  p-4 `}
            >
              <div className="font-semibold ">{blog.title}</div>
              <div className="italic">{blog.date}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NewsBox;
