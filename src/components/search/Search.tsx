import { useSearch } from '@/contexts/SearchContext';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

import { useState } from 'react';

const Search = () => {
  const router = useRouter();
  const { search, setSearch } = useSearch();
  const [searchInput, setSearchInput] = useState(search);

  const handleInputChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (router.pathname === '/favorites') {
      router.push('/');
    }

    setSearch(searchInput);
  };

  return (
    <form
      className="ml-6 max-w-[668px] relative"
      onSubmit={handleFormSubmit}
      data-testid="search-component"
    >
      <input
        type="text"
        placeholder="Buscar usuário"
        className="py-[10px] px-4 border border-border-line-color rounded-[4px] w-full"
        onChange={handleInputChange}
        value={searchInput}
        data-testid="search-input"
      />
      <button
        type="submit"
        className="absolute bottom-1/2 translate-y-2/4 right-5"
        data-testid="search-button"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
      </button>
    </form>
  );
};

export default Search;
