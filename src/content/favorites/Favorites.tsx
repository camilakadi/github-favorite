import Repository from '@/components/Repository';
import Header from '@/content/header/Header';
import { useUser } from '@/contexts/UserContext';

const Favorites = () => {
  const { starredRepositories } = useUser();

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-4 lg:px-0 pt-6 max-w-[896px]">
          <h1 className="text-primary-color mb-6 text-center">Meus favoritos</h1>

          {starredRepositories.map(starred => (
            <Repository key={starred.id} repository={starred} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Favorites;
