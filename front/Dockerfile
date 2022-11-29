FROM node:16.18-alpine AS build
#Récupérer juste les dépendances
WORKDIR /front
COPY package.json /front/
RUN npm install
COPY . /front
RUN npm run build -- --configuration production

FROM nginx:alpine AS final
COPY --from=build /front/dist/covid /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
