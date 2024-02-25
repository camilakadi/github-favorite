import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <form className="ml-6 max-w-[668px] relative">
      <input
        type="text"
        placeholder="Buscar usuário"
        className="py-[10px] px-4 border border-border-line-color rounded-[4px] w-full"
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
