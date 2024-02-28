import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="border-b border-border-line-color flex justify-between items-center">
      <div className="w-full">
        <Search />
      </div>

      <button className="bg-primary-color h-20 w-[145px] text-white-background-light-color ml-6 flex items-center justify-center">
        <FontAwesomeIcon icon={faHeart} className="text-xl mr-2 w-6" />
        <span>Favoritos</span>
      </button>
    </header>
  );
};

export default Header;
