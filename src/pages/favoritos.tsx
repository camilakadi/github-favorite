import Header from "@/components/Header";
import Repository from "@/components/Repository";

const FavoritesPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-4 lg:px-0 pt-6 max-w-[896px]">
          <h1 className="text-primary-color mb-6 text-center">
            Meus favoritos
          </h1>
          <Repository />
        </div>
      </main>
    </>
  );
};

export default FavoritesPage;
