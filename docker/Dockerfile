# Usa uma imagem leve do Node.js
FROM node:lts-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os ficheiros de dependências primeiro (otimiza o cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto dos ficheiros (opcional se usares volumes, mas bom para fallback)
COPY . .

# Expõe a porta padrão do Astro
EXPOSE 4321

# Comando para rodar o servidor de dev (o --host é obrigatório no Docker)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
