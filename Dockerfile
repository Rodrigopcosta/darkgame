# Usar a imagem base do Node.js
FROM node:18

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar arquivos de configuração do npm
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código fonte
COPY . .

# Construir a aplicação
RUN npm run build

# Expor a porta padrão
EXPOSE 3000

# Iniciar a aplicação
CMD ["npm", "start"]
