import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { SearchProvider, useSearch } from './SearchContext';

describe('SearchProvider', () => {
  it('should render children', () => {
    render(
      <SearchProvider>
        <div>Mock Children</div>
      </SearchProvider>,
    );

    expect(screen.getByText('Mock Children')).toBeInTheDocument();
  });
});

describe('useSearch', () => {
  it('should return the search context', () => {
    const TestComponent = () => {
      const context = useSearch();

      return <div data-testid="search">{context.search}</div>;
    };

    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>,
    );

    const search = screen.getByTestId('search');
    expect(search).toHaveTextContent('');
  });

  it('should update the search context', async () => {
    const TestComponent = () => {
      const { search, setSearch } = useSearch();

      return (
        <div>
          <div data-testid="search">{search}</div>
          <button onClick={() => setSearch('new search')}>Set Search</button>
        </div>
      );
    };

    render(
      <SearchProvider>
        <TestComponent />
      </SearchProvider>,
    );

    const search = screen.getByTestId('search');
    const button = screen.getByText('Set Search');

    expect(search).toHaveTextContent('');

    await act(() => {
      button.click();
    });

    expect(search).toHaveTextContent('new search');
  });
});
