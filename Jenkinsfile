pipeline{
    
    agent any
    stages{
        stage('pull'){
            steps{
              git poll: false, url: 'https://github.com/Peeppers/fullstackprojet'
            }
        }

        stage('build'){
            steps{
                sh '''
                    RUN 'Début dockerfile build'
                    WORKDIR "/front"
                    RUN npm install
                    RUN npm start
                    docker build -t test
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