pipeline{
    environment {
        dockerImage = ''
        imageName = "test"
    }
    
    agent any
    stages{
        stage('pull'){
            steps{
              git poll: false, url: 'https://github.com/Peeppers/fullstackprojet'
            }
        }
        stage('dockerfile'){
            steps {
                // On génère le dockerfile à la volé pour le test, il faudrait qu'il soit dans le dépôt
              sh '''
                echo 'FROM node:12.18.1
                ENV NODE_ENV=production
                COPY . /app/front
                WORKDIR /app/front
                COPY ["package.json", "package-lock.json*", "./"]
                RUN npm install --production
                COPY . .
                CMD [ "node", "server.js" ]' > Dockerfile
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

// sh '''
//                 echo 'FROM scratch
//                 COPY . /app/front
//                 WORKDIR /app/front
//                 RUN npm install
//                 RUN npm start' > Dockerfile
//                 echo '---'
//                 cat Dockerfile
//                 echo '---'
//             '''

// pipeline{
    
//     agent any
//     stages{
//         stage('pull'){
//             steps{
//               git poll: false, url: 'https://github.com/Peeppers/fullstackprojet'
//             }
//         }

//         stage('build'){
//             steps{
//                 sh '''
//                     RUN 'Début dockerfile build'
//                     WORKDIR "/front"
//                     RUN npm install
//                     RUN npm start
//                     docker build -t test
//                 '''
//             }
//         }

//         stage('run'){
//             steps {
//                 sh 'docker run test'
//             }
//         }
//     }
// }
