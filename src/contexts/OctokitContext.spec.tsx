import { Octokit } from '@octokit/core';
import { render } from '@testing-library/react';
import { OctokitProvider } from './OctokitContext';

jest.mock('@octokit/core', () => ({
  Octokit: jest.fn().mockImplementation(() => ({
    request: jest.fn(),
  })),
}));

describe('OctokitProvider', () => {
  it('should set the Octokit instance with the correct auth token', () => {
    const mockChildren = <div>Mock Children</div>;
    const { getByText } = render(<OctokitProvider>{mockChildren}</OctokitProvider>);

    expect(Octokit).toHaveBeenCalledWith({
      auth: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
    });

    expect(getByText('Mock Children')).toBeInTheDocument();
  });
});
