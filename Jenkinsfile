pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/NaveenDuraisaamy/PlaywrightPipeline.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Use --reporter=list for console output only
                bat 'npx playwright test --reporter=list'
            }
        }

        stage('Publish Test Report') {
            steps {
                echo 'Generating Playwright HTML Report...'
                bat 'npx playwright show-report'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'

            // Kill leftover Node/Playwright processes if any
            bat 'taskkill /IM node.exe /F || exit /b 0'
        }
    }
}
