import { IRepository } from "@/types/Repository";

export const repositoriesMapper = (data: any) => {
  return data.map((repository: any) => {
    return {
      id: repository.id,
      name: repository.name,
      ownerName: repository.owner.login,
      description: repository.description,
      language: repository.language,
      updated_at: repository.updated_at,
      starred_url: repository.starred_url,
    } as IRepository;
  });
};
