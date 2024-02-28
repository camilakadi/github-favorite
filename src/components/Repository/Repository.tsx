import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RepositoryProps {
  repository: any;
}

const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const months = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }

  const languageColors = (language: "") => {
    const result = (language || "").replace(/\s/g, "-");
    return result;
  };

  return (
    <div className="border border-border-line-color rounded-[4px] p-4 grid grid-cols-1 lg:grid-cols-3 mb-4">
      <div className="col-span-2 order-2 lg:order-none">
        <h2 className="mb-[6px]">{repository.name}</h2>

        <p className="text-placeholder-color mb-4">
          {repository.description || "Sem descrição"}
        </p>

        <div className="grid lg:grid-cols-4 grid-rows-2 lg:grid-rows-none gap-3">
          <div className="flex items-center lg:col-span-1">
            <span
              className={
                "w-4 h-4 rounded-full mr-2 block " +
                languageColors(repository.language)
              }
            ></span>

            <p>{repository.language}</p>
          </div>

          <p className="lg:col-span-3">
            Updated on {formatDate(repository.updated_at)}
          </p>
        </div>
      </div>

      <div className="flex justify-end order-1 lg:order-none">
        <button className="border border-primary-color rounded-full w-10 h-10 flex items-center justify-center">
          <FontAwesomeIcon
            icon={solidFaHeart}
            className="text-[18px] text-primary-color w-[18px]"
          />
        </button>

        <button className="border border-white-background-matte-color bg-white-background-matte-color rounded-full w-10 h-10 flex items-center justify-center">
          <FontAwesomeIcon icon={faHeart} className="text-[18px] w-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default Repository;
