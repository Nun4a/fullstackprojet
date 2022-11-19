FROM gradle:7.5.1-jdk17-alpine AS build
COPY . /api/
WORKDIR /api/

# Only copy dependency-related files
COPY build.gradle gradle.properties settings.gradle /api/

# Only download dependencies
# Eat the expected build failure since no source code has been copied yet
RUN gradle clean build --no-daemon > /dev/null 2>&1 || true

# Copy all files
COPY ./ /api/

#Do the actual build
RUN gradle clean build -x test --no-daemon #no test, no daemon

FROM openjdk:17 AS final
COPY --from=build /api/build/libs/covid-api-0.0.1-SNAPSHOT.jar /app/
WORKDIR /api
EXPOSE 9797
ENTRYPOINT ["java","-jar","covid-api-0.0.1-SNAPSHOT.jar"]
