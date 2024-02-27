import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface SearchContextProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  resetSearch: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState("");

  const resetSearch = () => {
    setSearch("");
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        resetSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch deve ser usado dentro de um SearchProvider");
  }

  return context;
};
