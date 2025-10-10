pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/NaveenDuraisaamy/First.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Publish Test Report') {
            steps {
                echo 'Publishing Playwright Test Report...'
                bat 'npx playwright show-report'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
