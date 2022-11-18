pipeline{
    environment {
        dockerImage = ''
        imageName = "helloworld"
    }
    
    agent any
    stages{
        stage('pull'){
            steps{
            }
        }
        stage('dockerfile'){
            steps {
                // On génère le dockerfile à la volé pour le test, il faudrait qu'il soit dans le dépôt
              sh '''
                echo 'FROM eclipse-temurin:17-jdk
                COPY . /app
                WORKDIR /app
                RUN javac src/main/java/org/polytech/covidapi/CovidApiApplication.java
                CMD ["java", "Main"]' > Dockerfile
                echo '---'
                cat Dockerfile
                echo '---'
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

        stage('push'){
            steps {
                script{
                    docker.withRegistry('http://registry:5000','') {
                        dockerImage.push("$BUILD_NUMBER")
                        dockerImage.push('latest')
                    }   
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
