import { render, screen } from '@testing-library/react';
import User from './User';

const mockUser = {
  id: 1,
  name: 'Camila Kadi Garcia',
  login: 'camilakadi',
  avatar_url: 'https://avatars.githubusercontent.com/u/19783887?v=4',
  bio: 'Lorem ipsum dolor sit amet',
};

describe('User', () => {
  it('should renders user information correctly', () => {
    render(<User user={mockUser} />);

    const nameElement = screen.getByText(mockUser.name);
    const loginElement = screen.getByText(`@${mockUser.login}`);
    const bioElement = screen.getByText(mockUser.bio);

    expect(nameElement).toBeInTheDocument();
    expect(loginElement).toBeInTheDocument();
    expect(bioElement).toBeInTheDocument();
  });

  it('should renders user avatar with correct attributes', () => {
    render(<User user={mockUser} />);

    const avatarElement = screen.getByAltText(mockUser.name) as HTMLImageElement;

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement.src).toBe(
      'http://localhost/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19783887%3Fv%3D4&w=640&q=75',
    );
    expect(avatarElement.width).toBe(200);
    expect(avatarElement.height).toBe(200);
    expect(avatarElement.classList.contains('rounded-full')).toBe(true);
    expect(avatarElement.classList.contains('m-auto')).toBe(true);
  });
});
