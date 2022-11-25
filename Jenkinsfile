pipeline{
    environment {
        dockerImage = ''
        imageName = "test"
    }
    
    agent any
    stages{
        stage('dockerfile'){
            steps {
                // On génère le dockerfile à la volé pour le test, il faudrait qu'il soit dans le dépôt
              sh '''
                echo 'FROM node:16.17
                COPY . /app
                WORKDIR /app/front
                RUN ls -al
                RUN npm install
                CMD [ "npm", "start"]'> Dockerfile
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
        
        stage('run'){
            steps {
                sh 'docker run test'
            }
        }
    }
}
