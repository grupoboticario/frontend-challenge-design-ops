# Frontend Challenge - Design Ops

## Desafio

Consiste em construir uma aplicação de notícias usando a API https://newsapi.org/ de forma whitelabel, usando o País como "tema". (Brasil, Portugal, Estados Unidos)

Seguindo o layout https://www.figma.com/file/CgTFC9deqfFX6vSf0JyDVp/GrupoBoticarioDesignOps?node-id=56%3A42184

Ao criar uma conta no News API, você receberá um TOKEN, que será usado pra fazer as requisições a essa API

- [Criar conta](https://newsapi.org/register)
- [News API - Endpoints](https://newsapi.org/docs/endpoints)

## Sobre

Esse monorepo contem dois pacotes, o `design-system` e `news-app`

#### `@design-ops/design-system`

Pacote simulando a geração de Design Tokens [Links](https://brasil.uxdesign.cc/o-que-s%C3%A3o-design-tokens-cd408431727d) Usando a ferramenta do [Style Dictionary](https://amzn.github.io/style-dictionary/#/) Que permite que seja definido os tokens das marcas em um único formato (JSON) para que seja distribuído em várias plataformas e formatos de arquivos (JS, CSS, SCSS, DART).

Nesse pacote vai encontrar a pasta `themes` que usamos para separar os tokens por tema. Aqui deve ser criado os temas que encontrará no Figma.

#### `@design-ops/news-app`

Onde deverá ser desenvolvido a aplicação como no Layout. Já preparado com o Framework Next.js.

## Tecnologias

Algumas tecnologias que usamos aqui. Mas fique a vontade pra desenvolver com o que estiver mais familiarizado.

- Git
  - git-cz
  - semantic commit
- JS
  - [Next](https://nextjs.org)
  - [TurboRepo](https://turborepo.org/)
  - [Stitches](https://stitches.dev)
  - [radix-ui.com](https://radix-ui.com)
  - [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
  - [SWR](https://swr.vercel.app/)

## Comandos

`yarn run bootstrap` Para preparar o projeto, instalar e fazer o link das dependências

`yarn run dev` Para rodar a aplicação Next.js em `dev`

`yarn pkg <package-name> <command>` Rodar um comando em um pacote específico

## Como entregar?

Crie um novo fork e branch com seu nome-sobrenome e faça um pull request quando estiver pronto. Iremos fazer code review.

> 🎉 Se possível entregar uma URL em algum serviço de hospedagem (Vercel, Netlify)
