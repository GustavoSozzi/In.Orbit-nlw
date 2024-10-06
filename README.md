## Tecnologias Utilizadas

# NLW Pocket JS React Frontend - in.orbit


Este repositório contém o frontend da aplicação **NLW Pocket 1.0 - in.orbit**, desenvolvida utilizando React e Tailwind CSS e TypeScript.



[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/docs/getting-started.html)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/docs)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/guide/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat&logo=react-query&logoColor=white)](https://tanstack.com/query/latest/docs/react/overview)
[![react-hook-form](https://img.shields.io/badge/React--Hook--Form-EC5990?style=flat&logo=reacthookform&logoColor=white)](https://react-hook-form.com/get-started)
[![Radix UI](https://img.shields.io/badge/Radix_UI-111827?style=flat&logoColor=white)](https://www.radix-ui.com/)
[![Biome](https://img.shields.io/badge/Biome-FFCC00?style=flat&logoColor=black)](https://biomejs.dev/)
[![Lucide-react](https://img.shields.io/badge/Lucide--react-0C7EFF?style=flat&logo=lucide&logoColor=white)](https://lucide.dev/)
[![Day.js](https://img.shields.io/badge/Day.js-FF5F5F?style=flat&logo=dayjs&logoColor=white)](https://day.js.org/)
[![Zod](https://img.shields.io/badge/Zod-E69F66?style=flat&logo=zod&logoColor=white)](https://zod.dev/)




```bash
cd nlw-pocket-js-react-in.orbit
```

### 3. Instale as dependências:


```bash
npm install
```


## Inicialização


### Frontend


Inicie o servidor de desenvolvimento:


```bash
npm run dev


nlw-pocket-js-react-in.orbit/
├── .vscode/
│   ├── settings.json             # Configurações personalizadas do VSCode
├── node_modules/                 # Dependências instaladas do projeto
├── public/                       # Arquivos estáticos acessíveis publicamente (HTML, imagens)
├── src/
│   ├── assets/
│   │   ├── lets-start-illustration.svg   # Ilustração de introdução
│   │   ├── logo-in-orbit.svg             # Logotipo da aplicação
│   ├── components/
│   │   ├── create-goal.tsx               # Componente para criação de metas
│   │   ├── empty-goals.tsx               # Componente que exibe mensagem de metas vazias
│   │   ├── in-orbit-icon.tsx             # Ícone representativo da aplicação
│   │   ├── pending-goals.tsx             # Componente que mostra as metas pendentes
│   │   ├── summary.tsx                   # Componente de resumo de metas
│   │   ├── ui/                           # Conjunto de componentes reutilizáveis de UI
│   │   │   ├── button.tsx                # Botão customizado reutilizável
│   │   │   ├── dialog.tsx                # Diálogo de confirmação de ações
│   │   │   ├── input.tsx                 # Campo de entrada de dados
│   │   │   ├── label.tsx                 # Rótulo para campos de entrada
│   │   │   ├── outline-button.tsx        # Botão estilizado com contorno
│   │   │   ├── progress-bar.tsx          # Barra de progresso visual
│   │   │   ├── radio-group.tsx           # Grupo de opções (radio) reutilizável
│   │   │   ├── separator.tsx             # Elemento separador visual
│   ├── http/                             # Funções para realizar chamadas HTTP
│   │   ├── create-goal-completion.ts     # Função que marca meta como concluída
│   │   ├── create-goal.ts                # Função para criação de uma nova meta
│   │   ├── get-pending-goals.ts          # Função para listar metas pendentes
│   │   ├── get-summary.ts                # Função que recupera o resumo semanal
│   ├── app.tsx                           # Componente principal da aplicação
│   ├── index.css                         # Estilos globais da aplicação
│   ├── main.tsx                          # Arquivo de inicialização do React
│   ├── vite-env.d.ts                     # Definições de tipos para o Vite
│   ├── index.html                        # Arquivo HTML principal
├── .gitignore                            # Arquivos e pastas que o Git deve ignorar
├── biome.json                            # Arquivo de configuração do Biome
├── package.json                          # Informações de dependências e scripts do projeto
├── package-lock.json                     # Registro das versões exatas das dependências
├── tsconfig.app.json                     # Configurações do TypeScript para o app
├── tsconfig.node.json                    # Configurações do TypeScript para Node.js
├── vite.config.ts                        # Configurações do Vite para build e desenvolvimento
├── tailwind.config.js                    # Configuração personalizada do Tailwind CSS
├── postcss.config.js                     # Configurações do PostCSS
