pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'develop',
                credentialsId: 'gitea-jenkins',
                url: 'http://x.x.x.x:3000/TestRepo'
            }
        }

        stage('Install') {
            steps {
                npm install
            }
        }
    }
}