
pipeline{
    agent any
    stages{
        stage('pull'){
            steps{
              git poll: false, url: 'https://github.com/jredel/jenkins-helloworld.git'
            }
        }
        stage('build'){
            steps {
                // On génère le dockerfile à la volé pour le test, il faudrait qu'il soit dans le dépôt
              sh '''
                RUN 'Début dockerfile build'
                COPY /front /front
                
                RUN npm install
                RUN npm start
                docker build -t test
            '''
            }
        }
        stage('run'){
            steps {
                sh 'docker run helloworld'
            }
        }
    }
}