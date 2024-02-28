import Header from "@/components/Header/Header";
import HomePage from "@/components/HomePage/HomePage";
import { OctokitProvider } from "@/contexts/OctokitContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { UserProvider } from "@/contexts/UserContext";

const Home = () => {
  return (
    <OctokitProvider>
      <SearchProvider>
        <UserProvider>
          <Header />
          <main className="h-screen">
            <HomePage />
          </main>
        </UserProvider>
      </SearchProvider>
    </OctokitProvider>
  );
};

export default Home;
