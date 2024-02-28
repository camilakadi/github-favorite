import { useOctokit } from "@/contexts/OctokitContext";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface FavoriteButtonProps {
  isStarred: boolean;
  owner: string;
  repository: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isStarred: isStarredProp,
  owner,
  repository,
}) => {
  const [isStarred, setIsStarred] = useState(isStarredProp);
  const octokit = useOctokit();

  const handleStarClick = () => {
    octokit?.request("PUT /user/starred/{owner}/{repo}", {
      owner: owner,
      repo: repository,
    });
    setIsStarred(true);
  };

  const handleUnstarClick = () => {
    octokit?.request("DELETE /user/starred/{owner}/{repo}", {
      owner: owner,
      repo: repository,
    });
    setIsStarred(false);
  };

  return (
    <div className="flex justify-end order-1 lg:order-none">
      {isStarred ? (
        <button
          className="border border-primary-color rounded-full w-10 h-10 flex items-center justify-center"
          onClick={handleUnstarClick}
        >
          <FontAwesomeIcon
            icon={solidFaHeart}
            className="text-[18px] text-primary-color w-[18px]"
          />
        </button>
      ) : (
        <button
          className="border border-white-background-matte-color bg-white-background-matte-color rounded-full w-10 h-10 flex items-center justify-center"
          onClick={handleStarClick}
        >
          <FontAwesomeIcon icon={faHeart} className="text-[18px] w-[18px]" />
        </button>
      )}
    </div>
  );
};

export default FavoriteButton;
