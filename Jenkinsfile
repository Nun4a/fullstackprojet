pipeline{
    environment {
        dockerImage = ''
        imageName = "helloworld"
    }
    
    agent any
    stages{
        
        stage('dockerfile'){
            steps {
                // On génère le dockerfile à la volé pour le test, il faudrait qu'il soit dans le dépôt
              sh '''
                FROM openjdk:8-jdk-alpine
                RUN addgroup -S spring && adduser -S spring -G spring
                USER spring:spring
                ARG DEPENDENCY=buile.gradle
                COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
                COPY ${DEPENDENCY}/META-INF /app/META-INF
                COPY ${DEPENDENCY}/BOOT-INF/classes /app
                ENTRYPOINT ["java","-cp","app:app/lib/*","hello.Application"]
            '''
            }
        }
        
        stage('build'){
            steps {
                script {
                    dockerImage = docker.build imageName
                }
            }
        }

        stage('run'){
            steps {
                sh 'docker run helloworld'
            }
        }
    }
}
