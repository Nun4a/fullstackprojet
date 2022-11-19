FROM gradle:7.5.1-jdk17-alpine AS build
COPY . /app/api
WORKDIR /app/api
RUN gradle build -x test --no-daemon #pas de test

FROM openjdk:17
COPY --from=build /app/api/build/libs/covid-api-0.0.1-SNAPSHOT.jar /app/
WORKDIR /app
EXPOSE 9797
ENTRYPOINT ["java","-jar","covid-api-0.0.1-SNAPSHOT.jar"]
