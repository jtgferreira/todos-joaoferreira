FROM openjdk:21

WORKDIR /app

RUN microdnf install findutils
COPY gradle gradle
COPY gradlew build.gradle.kts gradle.properties ./
COPY src ./src

RUN ./gradlew clean build -x test

CMD ["./gradlew", "run", "-t"]