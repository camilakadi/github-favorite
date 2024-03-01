import { useUser } from '@/contexts/UserContext';
import FavoritesPage from '@/pages/favoritos';
import { render, screen } from '@testing-library/react';
import Favorites from './FavoritesContent';

jest.mock('@/src/components/repository/Repository', () => ({
  __esModule: true,
  default: () => <div data-testid="repository">Repository</div>,
}));

jest.mock('@/src/contents/header/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="header">Header</div>,
}));

jest.mock('@/src/contexts/UserContext', () => ({
  useUser: jest.fn(),
}));

describe('Favorites', () => {
  beforeEach(() => {
    (useUser as jest.Mock).mockReturnValue({
      starredRepositories: [
        { id: 1, name: 'repo1' },
        { id: 2, name: 'repo2' },
        { id: 3, name: 'repo3' },
      ],
    });
  });

  it('renders the header', () => {
    render(<FavoritesPage />);

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<Favorites />);

    const title = screen.getByText('Meus favoritos');
    expect(title).toBeInTheDocument();
  });

  it('renders the repositories', () => {
    render(<Favorites />);

    const repositories = screen.getAllByTestId('repository');
    expect(repositories).toHaveLength(3);
  });
});
