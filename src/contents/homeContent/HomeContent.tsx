import Repository from '@/components/repository/Repository';
import User from '@/components/user/User';
import EmptyStatus from '@/contents/emptyStatus/EmptyStatus';
import Header from '@/contents/header/Header';
import NotFoundStatus from '@/contents/notFoundStatus/NotFoundStatus';
import { useSearch } from '@/contexts/SearchContext';
import { useUser } from '@/contexts/UserContext';

const HomeContent = () => {
  const { search } = useSearch();
  const { user, notFound, repositories } = useUser();

  return (
    <>
      <Header />
      <main className="h-screen">
        {user && (
          <div className="grid lg:grid-cols-3 p-6 gap-12">
            <section className="lg:col-span-1 col-span-2 border border-border-line-color rounded-[4px] py-10 px-6 text-center xs:w-full h-fit">
              <User user={user} />
            </section>

            <section className="col-span-2">
              <h2 className="text-primary-color mb-4 text-[21px]">Repositórios</h2>

              {repositories.map(repository => (
                <Repository key={repository.id} repository={repository} />
              ))}
            </section>
          </div>
        )}

        {!user && (
          <>
            {!search && <EmptyStatus />}
            {search && notFound && <NotFoundStatus search={search} />}
          </>
        )}
      </main>
    </>
  );
};

export default HomeContent;
