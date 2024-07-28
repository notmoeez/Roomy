import { useState } from "react";
import { BiSearch } from "react-icons/bi"; // Assuming you're using react-icons for the search icon

interface SearchBarProps {
  onSearch: (query: string) => Promise<void>;
}

const KeywordSearch: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keywords, setKeywords] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(event.target.value);
  };

  const handleSearch = async () => {
    await onSearch(keywords);
  };

  return (
    <div>
      <div
        className="
          border-[1px] 
          w-full 
          md:w-auto 
          bg-orange-600
          py-2 
          px-2
          shadow-sm 
          hover:shadow-md 
          hover:bg-white
          transition 
          cursor-pointer
        "
      >
        <div
          className="
            flex 
            flex-row 
            items-center 
            justify-between
          "
        >
          <input
            type="text"
            value={keywords}
            onChange={handleInputChange}
            placeholder="Enter keywords..."
            className="
              text-sm 
              font-semibold 
              px-6 
              w-full
              border-none
              outline-none
              bg-transparent
              placeholder-black
            "
          />
          <div
            className="
              p-2 
              bg-orange-600
              rounded-full 
              text-black
            "
            onClick={handleSearch}
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordSearch;
