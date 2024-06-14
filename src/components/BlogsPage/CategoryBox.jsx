const CategoryBox = ({ categories }) => {
  return (
    <div className="flex flex-col w-full rounded-md overflow-hidden">
      <div className="font-bold bg-[#b09edd] p-4 text-xl">Categories</div>
      {categories.map((blog, index) => {
        return (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
            }   p-4 `}
          >
            <div className="font-bold  flex items-center gap-4">
              {" "}
              <div>Ed-Tech</div> <div className="font-normal text-sm"> (7)</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryBox;
