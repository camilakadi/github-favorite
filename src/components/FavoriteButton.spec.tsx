import { IRepository } from '@/types/Repository';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import FavoriteButton from './FavoriteButton';

const requestMock = jest.fn();
const setStarredRepositoriesMock = jest.fn();

jest.mock('@/src/contexts/OctokitContext', () => ({
  useOctokit: jest.fn(() => ({
    request: requestMock,
  })),
}));

jest.mock('@/src/contexts/UserContext', () => ({
  useUser: jest.fn(() => ({
    starredRepositories: [],
    setStarredRepositories: setStarredRepositoriesMock,
  })),
}));

describe('FavoriteButton', () => {
  const repositoryMock = {
    id: 1,
    name: 'repository',
    ownerName: 'owner',
    description: 'description',
    language: 'language',
    updated_at: '2022-01-01',
  } as IRepository;

  it('should render a button with a hollow heart icon when isStarred is false', () => {
    const { container, getByTestId } = render(
      <FavoriteButton isStarred={false} repository={repositoryMock} />,
    );

    const button = container.querySelector('button');
    const icon = getByTestId('unstarred');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should render a button with a solid heart icon when isStarred is true', () => {
    const { container, getByTestId } = render(
      <FavoriteButton isStarred={true} repository={repositoryMock} />,
    );

    const button = container.querySelector('button');
    const icon = getByTestId('starred');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should call ocktokit.request with PUT when isStarred is false', async () => {
    const { container } = render(<FavoriteButton isStarred={false} repository={repositoryMock} />);

    const button = container.querySelector('button');
    await act(() => {
      button?.click();
    });

    expect(requestMock).toHaveBeenCalledWith('PUT /user/starred/{owner}/{repo}', {
      owner: 'owner',
      repo: 'repository',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    expect(setStarredRepositoriesMock).toHaveBeenCalledWith([repositoryMock]);
  });

  it('should call ocktokit.request with DELETE when isStarred is true', async () => {
    const { container } = render(<FavoriteButton isStarred={true} repository={repositoryMock} />);

    const button = container.querySelector('button');

    await act(() => {
      button?.click();
    });

    expect(requestMock).toHaveBeenCalledWith('DELETE /user/starred/{owner}/{repo}', {
      owner: 'owner',
      repo: 'repository',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    expect(setStarredRepositoriesMock).toHaveBeenCalledWith([]);
  });
});
