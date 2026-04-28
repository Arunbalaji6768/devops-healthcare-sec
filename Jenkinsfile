pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        APP_IMAGE = "arunbalaji6768/healthcare-app:latest"
    }
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Build Image') {
            steps {
                bat "docker build -t ${APP_IMAGE} ."
            }
        }
        stage('Security Scan (Trivy)') {
            steps {
                echo "Scanning image for vulnerabilities..."
                // This command runs a security scan and only shows high/critical bugs
                bat "docker run --rm aquasec/trivy image --severity HIGH,CRITICAL ${APP_IMAGE}"
            }
        }
        stage('Push to Docker Hub') {
            steps {
                bat "docker login -u ${DOCKERHUB_CREDENTIALS_USR} -p ${DOCKERHUB_CREDENTIALS_PSW}"
                bat "docker push ${APP_IMAGE}"
            }
        }
        stage('Secure Deployment') {
            steps {
                bat "kubectl apply -f deployment.yaml"
                echo "Healthcare App deployed securely to Kubernetes!"
            }
        }
    }
}