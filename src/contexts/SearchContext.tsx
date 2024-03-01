import React, { PropsWithChildren, createContext, useContext, useState } from 'react';

interface SearchContextProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextProps>({
  search: '',
  setSearch: () => {},
});

export const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
