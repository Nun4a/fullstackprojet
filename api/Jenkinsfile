def imageId = "fullstack/covid-api:1.$BUILD_NUMBER"

pipeline {

    //agent {
    //    label 'docker'  // separate agent (launched as JAR on host machine) to avoid running docker inside docker
    //}
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh "cd api && docker build --target build -t ${imageId} ."
                }
            }
        }
        stage('Image') {
            steps {
                script {
                    sh "cd api && docker build --target final -t ${imageId} ."
                }
            }
        }
    }
}
