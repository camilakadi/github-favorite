import { useSearch } from "@/contexts/SearchContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

const Search = () => {
  const { setSearch, resetSearch } = useSearch();
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    resetSearch();
    setSearch(searchInput);
  };

  return (
    <form className="ml-6 max-w-[668px] relative" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Buscar usuário"
        className="py-[10px] px-4 border border-border-line-color rounded-[4px] w-full"
        onChange={handleInputChange}
        value={searchInput}
      />
      <button
        type="submit"
        className="absolute bottom-1/2 translate-y-2/4 right-5"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
      </button>
    </form>
  );
};

export default Search;
