# Shopping List App 🛒

Este é um projeto simples de uma lista de compras, desenvolvido com **React**. Ele permite que os usuários adicionem e removam produtos de uma lista de maneira intuitiva. O projeto utiliza `useRef` e `useState` para gerenciar a entrada de dados e a manipulação da lista de produtos, garantindo uma experiência de usuário fluida e responsiva.

## Funcionalidades ✨

- **Adicionar produtos:** Insira o nome do produto na caixa de texto e clique no botão "Add" para adicioná-lo à lista.
- **Deletar produtos:** Cada produto na lista possui um ícone de lixeira (🗑️) que, ao ser clicado, remove o produto da lista.
- **Interface simples e responsiva:** O layout foi estilizado utilizando **styled-components**, oferecendo um design limpo e intuitivo.

## Tecnologias Utilizadas 🚀

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **UUID (v4)**: Gera identificadores únicos para cada produto adicionado à lista.
- **Styled-components**: Biblioteca para estilização de componentes no React com CSS-in-JS.

## Como rodar o projeto 🔧

1. Clone o repositório:

   ```bash
   git clone https://github.com/Boris-Zaidan/Shopping-List.git



   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd shopping-list

   ```

3. instale as dependências:

   ```bash
   npm install

   ```

4. Inicie o projeto:
   ```bash
   npm run dev
   ```

5.Acesse o projeto no navegador:

```bash
http://localhost:3000



```

Estrutura do projeto 📂
Home.jsx: Componente principal onde a lógica de adicionar e remover produtos é implementada.
style.js: Arquivo onde estão definidos os componentes estilizados utilizando styled-components.
