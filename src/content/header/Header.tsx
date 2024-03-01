import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from '../../components/Search';

const Header = () => {
  const router = useRouter();

  return (
    <header className="border-b border-border-line-color flex justify-between items-center">
      <div className="w-full">
        <Search />
      </div>

      {router.pathname === '/favorites' && (
        <Link
          href="/"
          className="bg-primary-color h-20 w-[145px] text-white-background-light-color flex items-center justify-center"
          data-testid="search-link"
        >
          <FontAwesomeIcon icon={faSearch} className="text-xl mr-2 w-6" />
          <span>Buscar</span>
        </Link>
      )}

      {router.pathname !== '/favorites' && (
        <Link
          href="/favorites"
          className="bg-primary-color h-20 w-[145px] text-white-background-light-color ml-6 flex items-center justify-center"
          data-testid="favorites-link"
        >
          <FontAwesomeIcon icon={faHeart} className="text-xl mr-2 w-6" />
          <span>Favoritos</span>
        </Link>
      )}
    </header>
  );
};

export default Header;
