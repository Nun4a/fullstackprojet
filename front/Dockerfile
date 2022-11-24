FROM node:16.18-alpine AS build
COPY . /front
WORKDIR /front
RUN ls -al
RUN npm install
RUN npm run build --prod

FROM nginx:alpine AS final
COPY --from=build /front/dist/covid /usr/share/nginx/html
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
