import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="w-full flex items-center border border-[#6A4EB8] p-4 rounded">
      <input type="text" className="w-full focus:outline-none" placeholder="Search" />
      <FaSearch size={20} className="text-[#6A4EB8] cursor-pointer" />
    </div>
  );
};

export default SearchBar;
