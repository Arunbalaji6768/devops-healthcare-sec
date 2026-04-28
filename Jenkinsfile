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
        // We add -v //./pipe/docker_engine://./pipe/docker_engine to let Trivy talk to Windows Docker
                 bat "docker run --rm -v //./pipe/docker_engine://./pipe/docker_engine aquasec/trivy image --severity HIGH,CRITICAL arunbalaji6768/healthcare-app:latest"
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