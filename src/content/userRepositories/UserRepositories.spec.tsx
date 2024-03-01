import { useSearch } from '@/contexts/SearchContext';
import { useUser } from '@/contexts/UserContext';
import { IUser } from '@/types/User';
import { render, screen } from '@testing-library/react';
import UserRepositories from './UserRepositories';

jest.mock('@/src/contexts/SearchContext', () => ({
  useSearch: jest.fn().mockReturnValue({ search: '' }),
}));

jest.mock('@/src/contexts/UserContext', () => ({
  useUser: jest.fn(),
}));

jest.mock('@/src/components/Repository', () => ({
  __esModule: true,
  default: () => <div data-testid="repository">Repository</div>,
}));

jest.mock('@/src/content/emptyStatus/EmptyStatus', () => ({
  __esModule: true,
  default: () => <div data-testid="empty-status">EmptyStatus</div>,
}));

jest.mock('@/src/content/header/Header', () => ({
  __esModule: true,
  default: () => <div data-testid="header">Header</div>,
}));

jest.mock('@/src/content/notFoundStatus/NotFoundStatus', () => ({
  __esModule: true,
  default: () => <div data-testid="not-found-status">NotFoundStatus</div>,
}));

jest.mock('@/src/components/User', () => ({
  __esModule: true,
  default: () => <div data-testid="user">User</div>,
}));

describe('Repositories', () => {
  const userMock = {
    id: 1,
    login: 'user',
    avatar_url: 'avatar_url',
    name: 'User Name',
    bio: 'User Bio',
  } as IUser;

  it('should render the header', () => {
    (useUser as jest.Mock).mockReturnValue({ user: null, notFound: false, repositories: [] });

    render(<UserRepositories />);

    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('should render the user component', () => {
    (useUser as jest.Mock).mockReturnValue({ user: userMock, notFound: false, repositories: [] });

    render(<UserRepositories />);

    const user = screen.getByTestId('user');
    expect(user).toBeInTheDocument();
  });

  it('should render the repositories', () => {
    (useUser as jest.Mock).mockReturnValue({
      user: userMock,
      notFound: false,
      repositories: [{ id: 1, name: 'repository' }],
    });

    render(<UserRepositories />);

    const repository = screen.getByTestId('repository');
    expect(repository).toBeInTheDocument();
  });

  it('should render the empty status', () => {
    (useUser as jest.Mock).mockReturnValue({ user: null, notFound: false, repositories: [] });

    render(<UserRepositories />);

    const emptyStatus = screen.getByTestId('empty-status');
    expect(emptyStatus).toBeInTheDocument();
  });

  it('should render the not found status', () => {
    (useSearch as jest.Mock).mockReturnValue({ search: 'search' });
    (useUser as jest.Mock).mockReturnValue({ user: null, notFound: true, repositories: [] });

    render(<UserRepositories />);

    const notFoundStatus = screen.getByTestId('not-found-status');
    expect(notFoundStatus).toBeInTheDocument();
  });
});
