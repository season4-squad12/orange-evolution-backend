FROM node:16-alpine
WORKDIR /.
COPY package* ./
RUN npm install
COPY . ./
EXPOSE 3001
CMD ["npm", "build-start"]