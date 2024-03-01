import { IRepository } from '@/types/Repository';
import { render, screen } from '@testing-library/react';
import Repository from './Repository';

jest.mock('@/src/contexts/UserContext', () => ({
  useUser: () => ({
    starredRepositories: [],
  }),
}));

jest.mock('../favoriteButton/FavoriteButton', () => ({
  __esModule: true,
  default: () => <button data-testid="favorite">Favorite</button>,
}));

describe('Repository', () => {
  const repository = {
    id: 12345,
    name: 'example-repo',
    ownerName: 'example-owner',
    description: 'Example repository',
    language: 'TypeScript',
    updated_at: '2022-01-01T00:00:00Z',
  } as IRepository;

  it('should render the repository name', () => {
    render(<Repository repository={repository} />);

    const repoName = screen.getByText(repository.name);
    expect(repoName).toBeInTheDocument();
  });

  it('should render the repository description', () => {
    render(<Repository repository={repository} />);

    const repoDescription = screen.getByText(repository.description);
    expect(repoDescription).toBeInTheDocument();
  });

  it('should render the repository language', () => {
    render(<Repository repository={repository} />);

    const repoLanguage = screen.getByText(repository.language);
    expect(repoLanguage).toBeInTheDocument();
  });

  it('should render the repository updated date', () => {
    render(<Repository repository={repository} />);

    const repoUpdatedDate = screen.getByTestId('updated-at');
    expect(repoUpdatedDate).toBeInTheDocument();
  });

  it('should render the favorite button', () => {
    render(<Repository repository={repository} />);

    const favoriteButton = screen.getByTestId('favorite');
    expect(favoriteButton).toBeInTheDocument();
  });
});
