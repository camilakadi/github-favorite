import Header from "@/components/Header/Header";
import HomePage from "@/components/HomePage/HomePage";
import { SearchProvider } from "@/contexts/SearchContext";
import { UserProvider } from "@/contexts/UserContext";

const Home = () => {
  return (
    <SearchProvider>
      <UserProvider>
        <Header />
        <main className="h-screen">
          <HomePage />
        </main>
      </UserProvider>
    </SearchProvider>
  );
};

export default Home;
