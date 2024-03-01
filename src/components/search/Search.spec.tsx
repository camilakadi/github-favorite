import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Search from './Search';

const setSearch = jest.fn();

jest.mock('next/router');
jest.mock('@/src/contexts/SearchContext', () => ({
  useSearch: () => ({
    search: '',
    setSearch: setSearch,
  }),
}));

describe('Search', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/',
      push: jest.fn(),
    });
  });

  it('renders the search component', () => {
    render(<Search />);

    const searchComponent = screen.getByTestId('search-component');
    expect(searchComponent).toBeInTheDocument();
  });

  it('updates the search input value', () => {
    render(<Search />);
    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect((searchInput as any).value).toBe('test');
  });

  it('submits the form and updates the search', () => {
    render(<Search />);

    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-button');

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(searchButton);

    expect(setSearch).toHaveBeenCalledWith('test');
  });

  it('navigates to home page if on favorites page', () => {
    const pushMock = jest.fn();

    (useRouter as jest.Mock).mockReturnValueOnce({
      pathname: '/favorites',
      push: pushMock,
    });

    render(<Search />);
    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);

    expect(pushMock).toHaveBeenCalledWith('/');
  });

  it('navigate to the favorites page if on home page', () => {
    const pushMock = jest.fn();

    (useRouter as jest.Mock).mockReturnValueOnce({
      pathname: '/',
      push: pushMock,
    });

    render(<Search />);
    const searchButton = screen.getByTestId('search-button');
    fireEvent.click(searchButton);

    expect(pushMock).not.toHaveBeenCalled();
  });
});
