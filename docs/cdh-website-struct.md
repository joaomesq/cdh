# Estrutura Cdh-Website

## Visão geral

Queremos criar um site estático, moderno e leve que sirva de apresentação e porta de entrada
para **CDH**. O site terá como objectivos :

- Apresentar a missão e os valores da comunidade
- Divulgar eventos
- Permitir a publicação de artigos
- "Oferecer área de recursos (inks, aritgos, repositórios)"
- Convidar/Atrair novos membros

Em fase inicial deverá conter as seguintes páginas:
- Página Inicial(landing)
- Página da comunidade(apresentação, missão, valores...)
- Página de eventos(lista de eventos, inicialmente 5 eventos estáticos)
- Blog(posts técnicos - content, tutoriais)
- Contato(formulário via serviço externo)

Escopo: primeira fase somente páginas estáticas geradas no build: nenhuma
funcionalidade dinânima

---
## Público-alvo
// acabei por encontrar algumas debilidades em definir as pressas - depois volto!

---
## REQUISITOS

### FUNCIONAIS

- RF-01: Home"Sobre - Página de apresentação da comunidade"
É necessário que o site consiga de forma simples e envolvente explicar quem somos, nossa missão, nossos valores, o que fazemos...

- RF-02: Agenda de eventos
Deve apresentar aos usuários  os eventos realizados ou que serão realizados pela comunidade.
"Deve página para listar próximos eventos(card por evento)".

- RF-03 Blog/Artigos
Deve permitir a criação e listagem de posts técnicos(Markdown) que inicalmente servirão como blog da comunidade.

- RF-04 "junte-se"
Call-to-action com link para formulário externo(google forms - é negociável).

- RF-05 Busca rápida
Deve permitir aos usuários buscar dinamicamente por eventos e posts.

### NÃO FUNCIONAIS
- RNF-01: Performance
O site deve carregar em até 1,7s em 4G.

- RNF-02: Acessibilidade
Garantir acessibilidade para diferentes dispositivos e usuários, considerar usuários com
diferentes condições e característica.

- RNF-03: SEO
Os metadados do site devem estar automatizados e perfeitamente estruturados para melhorar ranking nos mecanismos de busca.

- RNF-04: Responsividade
O site deve proporcionar experiência de navegação agradavél em diferentes tamanhos de telas sem necessidades ajustes/zoom por parte do usuário.
Focar no padrão de desenvolvimento mobile-first, breakpoints 768px e 1280px.

- RNF-05: CI/CD
Automatizar  deploy no merge para main de modo a agilizar releases. branch main -> deploy em vercel

---
## STACKS
- Front-end: Gerador estático - Astro
- Estilização: Tailwind CSS
- Markdown CMS - repóstiorio Git(docs em /content)
- Hospedagem: Vercel
- Controle de versão: Git + GitHub
- Forms: Forms
- Gestão: GitHub projets( trocaremos o kanban pelo SCRUM/Ideia de migrar completamente para o Trello)
- Busca: Fuse.js(busca local)

---
## RESPONSABILIDADES
### Dev master + Dev Front-end
- Estrutura o projeto Astro
- Implementa layout
- Implementa responsividade
- Conecta os formulários com Fromspree
- Fazer o deploy inical

### Designer/Desenvolvedor com experiência em UI                                                                                                                                                
- Cria os wireframes simples(esboços/figma)
- Define paleta, logo e estilo visual minimalista
- Ajuda a pensar em responsabilidade

#### Redator/Criador de Conteúdo + Dev Front-end
- Escreve os conteúdos em .md
- Gera os primeiros posts do blog
- Escreve o conteúdo das páginas fixas

### Gestor
- Coordena as entregas
- Valida conteúdo e organização
- Pode conectar Goooogle Analytics, criar roadmap...

## Backlog inicial
//Serão preciso dados extras (habilidades, pessoal disponivél...)

## Duração
4 semanas contando a partir da data de aceitação.
