import FindStatus from "@/components/FindStatus/FindStatus";
import Header from "@/components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="h-screen">
        <FindStatus />
      </main>
    </>
  );
};

export default Home;
