import { IRepository } from "@/types/Repository";
import Repository from "../Repository/Repository";
import User from "../User/User";

interface FindStatusProps {
  user: any;
  repositories: IRepository[];
}

const FindStatus: React.FC<FindStatusProps> = ({ user, repositories }) => {
  return (
    <div className="grid lg:grid-cols-3 p-6 gap-12">
      <section className="lg:col-span-1 col-span-2 border border-border-line-color rounded-[4px] py-10 px-6 text-center xs:w-full h-fit">
        <User user={user} />
      </section>

      <section className="col-span-2">
        <h2 className="text-primary-color mb-4 text-[21px]">Repositórios</h2>

        {repositories.map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </section>
    </div>
  );
};

export default FindStatus;
