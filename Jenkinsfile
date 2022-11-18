pipeline{
    agent any
    stages{
        stage('pull'){
            steps{
              git poll: false, url: 'https://github.com/Peeppers/fullstackprojet'
            }
        }
        stage('build'){
            steps {
                // On génère le dockerfile à la volé pour le test, il faudrait qu'il soit dans le dépôt
              sh '''
                echo 'COPY /front /front
                RUN echo $(ls -1)
                RUN npm install
                RUN npm start' > Dockerfile
                echo '---'
                cat Dockerfile
                echo '---'
                docker build -t test .
            '''
            }
        }
        stage('run'){
            steps {
                sh 'docker run test'
            }
        }
    }
}

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
