import { IUser } from "@/types/User";

export const userMapper = (data: any) => {
  return {
    id: data.id,
    login: data.login,
    avatar_url: data.avatar_url,
    name: data.name,
    bio: data.bio,
  } as IUser;
};
