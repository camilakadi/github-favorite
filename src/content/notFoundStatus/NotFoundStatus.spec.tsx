import { render, screen } from '@testing-library/react';
import NotFoundStatus from './NotFoundStatus';

describe('NotFoundStatus', () => {
  it('should render the search term', () => {
    const search = 'camilakadi';
    render(<NotFoundStatus search={search} />);

    const searchTerm = screen.getByText(`“${search}”`);
    expect(searchTerm).toBeInTheDocument();
  });

  it('should render the "Nenhum usuário encontrado" message', () => {
    const search = 'poskaposkapokspoa';
    render(<NotFoundStatus search={search} />);

    const notFoundMessage = screen.getByText('Nenhum usuário encontrado');
    expect(notFoundMessage).toBeInTheDocument();
  });

  it('should render the "Verifique se a escrita está correta ou tente novamente" message', () => {
    const search = 'camilakadi';
    render(<NotFoundStatus search={search} />);

    const retryMessage = screen.getByText('Verifique se a escrita está correta ou tente novamente');
    expect(retryMessage).toBeInTheDocument();
  });

  it('should render the image with correct attributes', () => {
    const search = 'camilakadi';
    render(<NotFoundStatus search={search} />);

    const image = screen.getByAltText('Pesquisa de pessoa');
    expect(image).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fpessoa-nao-encontrada.png&w=828&q=75',
    );
    expect(image).toHaveAttribute('width', '399');
    expect(image).toHaveAttribute('height', '438');
  });
});
