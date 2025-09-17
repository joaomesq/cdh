# Padrão do código
[Front-end React]

Aqui está contido o padrão de código usado em em todo projeto{**Reac**}, o objetivo é estabelecer diretrizes claras para a escrita de código consistente e legível em Reac, garantindo que todos os membros do time estejam trablhando de forma harmoniosa e eficiente.

---
## Componentes
- **Nome**: use nomes descritivos e claros, o padrão para nomeação é o PascalCase ( NomeDoComponente )
- **Estrutura**: para organização dos componentes, a estrutura usada será com uma pasta para cada componente e arquivos separados para o componente, estilo e teste(quando começarmos a usar).
*MeuComponente
  + MeuComponente.js
  + MeuComponente.css
  + MeuComponente.teste.js//mais tarde

---
## JSX
- **Indentação**: use 2 espaços para indentação em JSX
- **Atributo**: use atributos de forma consitente, com aspas duplas para valores string.
- **JSX Conciso**: evite lógica complexa dentro do JSX, mantenha conciso e fácil de ler.

---
## Hooks
- Use hooks de forma consistente, seguindo as regras de hooks do React.
- **Nome**: use nomes de hooks descritivos e claros começando com use (useFechtData).

---
## Estilos
- A estilização dos componentes será feita principalmente com TailwindCSS.
- **CSS Modules**: use css modules para estilizar componentes que necessitam de estilos personalizados.
- **Nome de Classes**: use nomes de classes descritivos e claros, o padrão de nomeação é o camelCase (meuEstilo)

---
## Testes
// De momento não usaremos testes