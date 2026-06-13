# J2FX Tecnologia

Site institucional da J2FX Tecnologia, com foco em infraestrutura de TI, cloud, segurança, suporte gerenciado, produtos digitais e automações.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Netlify Forms

## Requisitos

- Node.js
- npm

## Instalação

```sh
npm install
```

## Desenvolvimento

```sh
npm run dev
```

Por padrão, o Vite roda em `http://localhost:8080`.

## Build

```sh
npm run build
```

## Lint

```sh
npm run lint
```

## Formulários

O formulário principal usa Netlify Forms. A definição estática fica em:

- `public/__forms.html`

Campos principais:

- `interest`
- `name`
- `email`
- `phone`
- `company`
- `role`
- `message`
- `newsletter`

## Estrutura Principal

- `src/pages/Index.tsx`: homepage
- `src/pages/BotImobiliarioFranca.tsx`: landing page do chatbot imobiliário
- `src/components/Hero.tsx`: primeira dobra
- `src/components/Services.tsx`: soluções de TI
- `src/components/ProductSolutions.tsx`: produtos e automações
- `src/components/WorkProcess.tsx`: processo de trabalho
- `src/components/UseCases.tsx`: cenários comuns
- `src/components/FAQ.tsx`: perguntas frequentes
- `src/components/CallToAction.tsx`: formulário de contato

## Deploy

O projeto está preparado para deploy estático na Netlify.

Configuração:

- `netlify.toml`
- build command: `npm run build`
- publish directory: `dist`
