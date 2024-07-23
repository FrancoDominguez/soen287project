FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4173

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]