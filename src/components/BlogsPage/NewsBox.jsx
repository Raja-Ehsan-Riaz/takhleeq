const NewsBox = ({ blogs }) => {
  return (
    <div className="flex flex-col w-full rounded-md overflow-hidden">
      <div className="font-bold bg-[#b09edd] p-4 text-xl">Recent News</div>
      {blogs.slice(0, 3).map((blog,index) => {
        return (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
            }  p-4 `}
          >
            <div className="font-bold ">
              {blog.title}
            </div>
            <div className="italic">{blog.date}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsBox;
