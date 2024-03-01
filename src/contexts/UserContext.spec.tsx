import { render, screen } from '@testing-library/react';
import { useOctokit } from './OctokitContext';
import { UserProvider } from './UserContext';

jest.mock('./SearchContext', () => ({
  useSearch: jest.fn().mockReturnValue({
    search: 'test',
  }),
}));

jest.mock('./OctokitContext', () => ({
  useOctokit: jest.fn().mockReturnValue({
    request: jest.fn(),
  }),
}));

jest.mock('@/src/mappers/userMapper', () => ({
  userMapper: jest.fn(),
}));

jest.mock('@/src/mappers/repositoriesMapper', () => ({
  repositoriesMapper: jest.fn(),
}));

console.error = jest.fn();

describe('UserProvider', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render children', () => {
    render(
      <UserProvider>
        <div>Mock Children</div>
      </UserProvider>,
    );

    expect(screen.getByText('Mock Children')).toBeInTheDocument();
  });

  it('should fetch user and repositories when search is provided', async () => {
    render(
      <UserProvider>
        <div>Mock Children</div>
      </UserProvider>,
    );

    expect(useOctokit()?.request).toHaveBeenCalledWith('GET /users/{username}', {
      username: 'test',
    });
    expect(useOctokit()?.request).toHaveBeenCalledWith('GET /users/{username}/repos', {
      username: 'test',
    });

    expect(screen.getByText('Mock Children')).toBeInTheDocument();
  });

  it('should fetch starred repositories when octokit is available', async () => {
    render(
      <UserProvider>
        <div>Mock Children</div>
      </UserProvider>,
    );

    expect(useOctokit()?.request).toHaveBeenCalledWith('GET /user/starred', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    expect(screen.getByText('Mock Children')).toBeInTheDocument();
  });
});
