# Usando a imagem oficial do Node.js
FROM node:20.10

# Definindo o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiando o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instalando as dependências do projeto
RUN npm install

# Copiando o código fonte da aplicação
COPY . .

# Expondo a porta em que o servidor vai rodar
EXPOSE 3000

# Comando para rodar o servidor
CMD ["npm", "run", "dev"]