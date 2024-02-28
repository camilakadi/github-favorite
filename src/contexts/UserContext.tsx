import { IRepository } from "@/types/Repository";
import { IUser } from "@/types/User";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSearch } from "./SearchContext";

interface UserContextProps {
  user: IUser | null;
  notFound: boolean;
  repositories: IRepository[];
}

const UserContext = createContext<UserContextProps>({
  user: null,
  notFound: false,
  repositories: [],
});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { search } = useSearch();
  const [user, setUser] = useState<IUser | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await axios
          .get(`https://api.github.com/users/${search}`)
          .then((response) => response.data);

        setNotFound(false);
        setUser(data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);

        setNotFound(true);
        setUser(null);
      }
    };

    const fetchRepositories = async () => {
      try {
        const data = await axios
          .get(`https://api.github.com/users/${search}/repos`)
          .then((response) => response.data);

        console.log(data);

        setRepositories(data);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    if (search) {
      fetchUser();
      fetchRepositories();
    }
  }, [search]);

  return (
    <UserContext.Provider value={{ user, notFound, repositories }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
