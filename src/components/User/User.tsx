import { IUser } from "@/types/User";
import Image from "next/image";

interface UserProps {
  user: IUser;
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      <div className="mb-6">
        <Image
          src={user.avatar_url}
          alt={user.name}
          width={200}
          height={200}
          className="rounded-full m-auto"
        />
      </div>
      <div>
        <h1>{user.name}</h1>
        <p>{user.login}</p>

        <p className="mt-6">{user.bio}</p>
      </div>
    </>
  );
};

export default User;
