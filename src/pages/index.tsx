import EmptyStatus from "@/components/EmptyStatus/EmptyStatus";
import Header from "@/components/Header/Header";
import NotFindStatus from "@/components/NotFindStatus/NotFindStatus";

const Home = () => {
  return (
    <>
      <Header />
      <main className="h-screen">
        <EmptyStatus />
        <NotFindStatus />
      </main>
    </>
  );
};

export default Home;
