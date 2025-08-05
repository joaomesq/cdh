# CDH | MVP Website

## Descrição

Este projeto visa criar um website funcional para comunidade, o objetivo inicial é apresentar a comunidade, divulgar eventos, servir como blog, atrair/convidar membros e criar um local de participação ativa(posts, comentários)

---
## Funcionalidades

Inicialmente o website deve cobrir as seguintes funcionalidades:
- Apresentar a missão e os valores da comunidade
- Divulgar eventos
- Permitir a publicação de artigos
- Atrair membros
- Permitir realizar busca em eventos e blog's

---
## Tecnologias Utilizadas

- **Gerador Estático**: Astro
- **Front-end**: React
- **Style**: TailwindCSS
- **Blog**: Markdown CMS
- **Gestão**: GitHub Projects
- **Hospedagem**: Vercel
- **Busca**: Fuse.js 

---
## Estrutura de pastas
// mais tarde

---
## Organização

O gerenciamento do projeto está atualmente a ser feito com o **GitHub Projects**. A estrutura do board:
- `Backlog´: Ideias, sugestões e planos
- `To Do´: tarefas aprovadas e prontas para entrar em execução
- `In Progress´: tarefas em desenvolvimento
- `Review´: Tarefas sendo revisadas
- `Done´: Taregas concluídas

### Epics

Cada funcionalidade principal, grupos de funcionalidades, está agrupada em **epics** (issues com label `epic´) que possuem subtarefas (são dividas em subissues).

---
## Instalação local

### Requisitos
- Node.js (recomendado: versão 18+)
- npm
- Editor

### Passos

- 1.Clone o repositório:
```bash
git clone https://github.com/cdh-community-ao/Cdh-website-v0.1.git 
cd Cdh-website-v0.1
```
- 2.Instale as dependências:
```bash
npm install
```
- 3.Inicie o servidor de desenvolvimento
```bash
npm run dev
```
- Acesse em: https://localhost:4321

---
## Contribuindo

Leia [regras-de-contribuição](/docs/diretrizes/contribuicao.md) antes de começar a contribuir

- 1. Crie uma branch: git checkout -b feature/minha-feature
- 2. Commit: git commit -m 'feat: nova funcionalidade'
- 3. push: git push origin feature/minha-feature
- 4. Abra um **Pull Request**

---
## Licença
MIT