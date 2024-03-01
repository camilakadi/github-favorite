import { render } from '@testing-library/react';
import EmptyStatus from './EmptyStatus';

describe('EmptyStatus', () => {
  it('should renders the correct text', () => {
    const { getByText } = render(<EmptyStatus />);

    expect(getByText('Procure pelo Nome ou Nome de Usuário')).toBeInTheDocument();

    expect(
      getByText('Encontre os repositórios de algum usuário digitando no campo acima'),
    ).toBeInTheDocument();
  });

  it('should renders the image with the correct attributes', () => {
    const { getByAltText } = render(<EmptyStatus />);
    const image = getByAltText('Pesquisa de pessoa');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/_next/image?url=%2Fpesquisa-pessoa.png&w=640&q=75');
    expect(image).toHaveAttribute('width', '230');
    expect(image).toHaveAttribute('height', '257');
    expect(image).toHaveClass('mt-12 m-auto');
  });
});
