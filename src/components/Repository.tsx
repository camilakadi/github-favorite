import { useUser } from '@/contexts/UserContext';
import { IRepository } from '@/types/Repository';
import FavoriteButton from './FavoriteButton';

interface RepositoryProps {
  repository: IRepository;
}

const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  const { starredRepositories } = useUser();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const months = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const languageColors = (language: string) => {
    const result = (language || '').replace(/\s/g, '-');
    return result;
  };

  return (
    <div className="border border-border-line-color rounded-[4px] p-4 grid grid-cols-1 lg:grid-cols-3 mb-4">
      <div className="col-span-2 order-2 lg:order-none">
        <h2 className="mb-[6px]">{repository.name}</h2>

        <p className="text-placeholder-color mb-4">{repository.description || 'Sem descrição'}</p>

        <div className="grid lg:grid-cols-4 grid-rows-2 lg:grid-rows-none gap-3">
          <div className="flex items-center lg:col-span-1">
            <span
              className={'w-4 h-4 rounded-full mr-2 block ' + languageColors(repository.language)}
            ></span>

            <p>{repository.language}</p>
          </div>

          <p className="lg:col-span-3" data-testid="updated-at">
            Updated on {formatDate(repository.updated_at)}
          </p>
        </div>
      </div>

      <FavoriteButton
        isStarred={starredRepositories.some(
          starredRepository => starredRepository.id === repository.id,
        )}
        repository={repository}
      />
    </div>
  );
};

export default Repository;
