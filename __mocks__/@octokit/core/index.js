const Octokit = jest.fn(() => ({
  request: jest.fn(),
}));

module.exports = Octokit;
