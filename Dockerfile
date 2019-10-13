FROM node:alpine
WORKDIR /app
ADD . /app
RUN npm install -g nodemon
RUN npm install
ENTRYPOINT ["node"]
CMD ["server.js"]