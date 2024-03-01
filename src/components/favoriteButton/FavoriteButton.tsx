import { useOctokit } from '@/contexts/OctokitContext';
import { useUser } from '@/contexts/UserContext';
import { IRepository } from '@/types/Repository';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidFaHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface FavoriteButtonProps {
  isStarred: boolean;
  repository: IRepository;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isStarred: isStarredProp,
  repository,
}) => {
  const { starredRepositories, setStarredRepositories } = useUser();
  const [isStarred, setIsStarred] = useState(isStarredProp);
  const octokit = useOctokit();

  const handleStarClick = () => {
    octokit?.request('PUT /user/starred/{owner}/{repo}', {
      owner: repository.ownerName,
      repo: repository.name,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    setIsStarred(true);
    setStarredRepositories([...starredRepositories, repository]);
  };

  const handleUnstarClick = () => {
    octokit?.request('DELETE /user/starred/{owner}/{repo}', {
      owner: repository.ownerName,
      repo: repository.name,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    setIsStarred(false);
    setStarredRepositories(starredRepositories.filter(repo => repo.id !== repository.id));
  };

  return (
    <div className="flex justify-end order-1 lg:order-none">
      {isStarred ? (
        <button
          className="border border-primary-color rounded-full w-10 h-10 flex items-center justify-center"
          onClick={handleUnstarClick}
        >
          <FontAwesomeIcon
            data-testid="starred"
            icon={solidFaHeart}
            className="text-[18px] text-primary-color w-[18px]"
          />
        </button>
      ) : (
        <button
          className="border border-white-background-matte-color bg-white-background-matte-color rounded-full w-10 h-10 flex items-center justify-center"
          onClick={handleStarClick}
        >
          <FontAwesomeIcon
            data-testid="unstarred"
            icon={faHeart}
            className="text-[18px] w-[18px]"
          />
        </button>
      )}
    </div>
  );
};

export default FavoriteButton;
