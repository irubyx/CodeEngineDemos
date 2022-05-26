# Imagen de node
FROM node:alpine

# Set del directorio de trabajo
WORKDIR /usr/src/app

# Copiamos los package al directorio de trabajo
COPY package*.json ./

# Instalamos dependencias de node
RUN npm install

# Copiamos los archivos al contenedor
COPY . .

# Comando para correr el programa
CMD [ "node", "/src/app.js" ]