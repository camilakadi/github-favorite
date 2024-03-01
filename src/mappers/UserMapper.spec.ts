import { userMapper } from './UserMapper';

describe('userMapper', () => {
  it('should map user data correctly', () => {
    const data = {
      id: 1,
      login: 'user1',
      avatar_url: 'https://example.com/avatar',
      name: 'User 1',
      bio: 'Software Developer',
    };

    const expectedOutput = {
      id: 1,
      login: 'user1',
      avatar_url: 'https://example.com/avatar',
      name: 'User 1',
      bio: 'Software Developer',
    };

    const result = userMapper(data);

    expect(result).toEqual(expectedOutput);
  });
});
