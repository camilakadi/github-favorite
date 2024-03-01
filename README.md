### Teste técnico - Front end - Pleno - Casar.com

## Pré-requisitos

Antes de começar, certifique-se de ter Node.js (versão 20 ou superior) e npm instalados em sua máquina.

## Configuração do token

Criar arquivo .env na raiz da aplicação, com o seguinte conteudo:

```
NEXT_PUBLIC_GITHUB_API_KEY={TOKEN}
```

Substituir {TOKEN} pelo token próprio gerado no GitHub.

## Instalação

1. Clone este repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```

Isso iniciará o servidor Next.js e você poderá acessar a aplicação em http://localhost:3000.

## Testes

Este projeto utiliza Jest para testes. Para executar os testes, utilize o seguinte comando:

```bash
npm test
```

Se preferir assistir às alterações e executar os testes automaticamente sempre que um arquivo for modificado, execute o seguinte comando:

```bash
npm run test:watch
```

## Autor

Camila Kadi Garcia - Desenvolvedora Front-end
