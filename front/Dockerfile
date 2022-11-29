FROM node:16.18-alpine AS build
#Récupérer juste les dépendances
COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /front && cp -a /tmp/node_modules /front
#Copier le front
COPY . /front
WORKDIR /front
RUN npm run build --prod

FROM nginx:alpine AS final
COPY --from=build /front/dist/covid /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
