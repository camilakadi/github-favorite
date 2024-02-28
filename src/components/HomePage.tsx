import { useSearch } from "@/contexts/SearchContext";
import { useUser } from "@/contexts/UserContext";
import EmptyStatus from "./EmptyStatus";
import FindStatus from "./FindStatus";
import NotFindStatus from "./NotFindStatus";

const HomePage = () => {
  const { search } = useSearch();
  const { user, notFound, repositories } = useUser();

  return (
    <>
      {user && <FindStatus user={user} repositories={repositories} />}

      {!user && (
        <>
          {!search && <EmptyStatus />}
          {search && notFound && <NotFindStatus search={search} />}
        </>
      )}
    </>
  );
};

export default HomePage;
