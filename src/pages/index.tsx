import EmptyStatus from "@/components/EmptyStatus";
import FindStatus from "@/components/FindStatus";
import Header from "@/components/Header";
import NotFoundStatus from "@/components/NotFoundStatus";
import { useSearch } from "@/contexts/SearchContext";
import { useUser } from "@/contexts/UserContext";

const Home = () => {
  const { search } = useSearch();
  const { user, notFound, repositories } = useUser();

  return (
    <>
      <Header />
      <main className="h-screen">
        {user && <FindStatus user={user} repositories={repositories} />}

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

export default Home;
