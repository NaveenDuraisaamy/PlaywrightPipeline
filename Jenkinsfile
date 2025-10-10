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
                // Use --reporter=list for console output only
                bat 'npx playwright test --reporter=list'
            }
        }

        stage('Publish Test Report') {
            steps {
                echo 'Generating Playwright HTML Report...'
                // Do NOT open browser, just generate report
                bat 'npx playwright show-report --no-open'
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
