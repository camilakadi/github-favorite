import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Header from './Header';

jest.mock('next/router');
jest.mock('@/src/components/search/Search', () => ({
  __esModule: true,
  default: () => <div data-testid="search-component">Search</div>,
}));

describe('Header', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/',
      push: jest.fn(),
    });
  });

  it('should renders the search component', () => {
    render(<Header />);

    const searchComponent = screen.getByTestId('search-component');
    expect(searchComponent).toBeInTheDocument();
  });

  it('should renders the "Favoritos" button when route is "/', () => {
    render(<Header />);

    const favoritosButton = screen.getByText('Favoritos');
    expect(favoritosButton).toBeInTheDocument();
  });

  it('should render the "Buscar" button when route is "/favoritos"', () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/favoritos',
      push: jest.fn(),
    });

    render(<Header />);

    const buscarButton = screen.getByText('Buscar');
    expect(buscarButton).toBeInTheDocument();
  });

  it('should navigate to the favorites page when clicking on the "Favoritos" button', () => {
    render(<Header />);

    const favoritesButton = screen.getByTestId('favorites-link');
    expect(favoritesButton).toHaveAttribute('href', '/favoritos');
  });

  it('should navigate to the search page when clicking on the "Buscar" button', () => {
    const pushMock = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/favoritos',
      push: pushMock,
    });

    render(<Header />);

    const searchButton = screen.getByTestId('search-link');
    expect(searchButton).toHaveAttribute('href', '/');
  });
});
