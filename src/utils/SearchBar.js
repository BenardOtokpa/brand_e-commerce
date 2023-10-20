import React, { useState } from "react";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleSearch = () => {
    // Perform search functionality here
   alert(`Searching for ${searchTerm} in category ${selectedCategory}`);
  };

  return (
    <div className="flex justify-between w-[500px] items-center rounded-lg border-2 border-blue-500 bg-white">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-[279px] rounded-lg p-2 focus:outline-none"
      />
      <div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="h-10 border-l-2 border-blue-500 bg-transparent px-2 outline-none cursor-pointer"
        >
          <option value="All Categories">All Categories</option>
          <option value="Phones">Phones</option>
          <option value="Laptops">Laptops</option>
          <option value="Accessoriess">Accessoriess</option>
        </select>
        <button
          onClick={handleSearch}
          className=" bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
