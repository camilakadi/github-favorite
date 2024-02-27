import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "../types/User";
import { useSearch } from "./SearchContext";

interface UserContextProps {
  user: IUser | null;
  notFound: boolean;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  notFound: false,
});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { search } = useSearch();
  const [user, setUser] = useState<IUser | null>(null);
  const [notFound, setNotFound] = useState(false);

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

    if (search) {
      fetchUser();
    }
  }, [search]);

  return (
    <UserContext.Provider value={{ user, notFound }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
