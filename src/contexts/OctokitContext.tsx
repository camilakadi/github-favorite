import { Octokit } from "@octokit/core";
import React, { createContext, useContext, useEffect } from "react";

const OctokitContext = createContext<Octokit | null>(null);

export const OctokitProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [octokit, setOctokit] = React.useState<Octokit | null>(null);

  useEffect(() => {
    setOctokit(
      new Octokit({
        auth: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
      })
    );
  }, []);

  return (
    <OctokitContext.Provider value={octokit}>
      {children}
    </OctokitContext.Provider>
  );
};

export const useOctokit = () => useContext(OctokitContext);
