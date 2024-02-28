import { repositoriesMapper } from "@/mappers/repositoriesMapper";
import { userMapper } from "@/mappers/userMapper";
import { IRepository } from "@/types/Repository";
import { IUser } from "@/types/User";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useOctokit } from "./OctokitContext";
import { useSearch } from "./SearchContext";

interface UserContextProps {
  user: IUser | null;
  notFound: boolean;
  repositories: IRepository[];
  starredRepositories: IRepository[];
}

const UserContext = createContext<UserContextProps>({
  user: null,
  notFound: false,
  repositories: [],
  starredRepositories: [],
});

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const octokit = useOctokit();
  const { search } = useSearch();
  const [user, setUser] = useState<IUser | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [starredRepositories, setStarredRepositories] = useState<any[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await octokit?.request("GET /users/{username}", {
          username: search,
        });

        setNotFound(false);
        setUser(userMapper(result?.data));
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);

        setNotFound(true);
        setUser(null);
      }
    };

    const fetchRepositories = async () => {
      try {
        const result = await octokit?.request("GET /users/{username}/repos", {
          username: search,
        });

        setRepositories(repositoriesMapper(result?.data));
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    if (search) {
      fetchUser();
      fetchRepositories();
    }
  }, [search, octokit]);

  useEffect(() => {
    const fetchStarredRepositories = async () => {
      const result = await octokit?.request("GET /user/starred", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      setStarredRepositories(result?.data);
    };

    if (octokit) fetchStarredRepositories();
  }, [octokit]);

  return (
    <UserContext.Provider
      value={{ user, notFound, repositories, starredRepositories }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
