import { useUser } from '@/contexts/UserContext';
import { render, screen } from '@testing-library/react';
import Favorites from './favorites';

jest.mock('@/src/components/Repository', () => ({
  __esModule: true,
  default: () => <div data-testid="repository">Repository</div>,
}));

jest.mock('@/src/content/header/Header', () => ({
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
    render(<Favorites />);

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
