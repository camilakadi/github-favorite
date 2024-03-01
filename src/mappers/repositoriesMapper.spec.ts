import { repositoriesMapper } from './RepositoriesMapper';

describe('repositoriesMapper', () => {
  it('should map repositories data correctly', () => {
    const data = [
      {
        id: 1,
        name: 'repo1',
        owner: { login: 'user1' },
        description: 'Repository 1',
        language: 'TypeScript',
        updated_at: '2022-01-01',
      },
      {
        id: 2,
        name: 'repo2',
        owner: { login: 'user2' },
        description: 'Repository 2',
        language: 'JavaScript',
        updated_at: '2022-01-02',
      },
    ];

    const expectedOutput = [
      {
        id: 1,
        name: 'repo1',
        ownerName: 'user1',
        description: 'Repository 1',
        language: 'TypeScript',
        updated_at: '2022-01-01',
      },
      {
        id: 2,
        name: 'repo2',
        ownerName: 'user2',
        description: 'Repository 2',
        language: 'JavaScript',
        updated_at: '2022-01-02',
      },
    ];

    const result = repositoriesMapper(data);

    expect(result).toEqual(expectedOutput);
  });
});
