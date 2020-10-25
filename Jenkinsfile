def app_version = '0.0.0'

pipeline {
    agent any

    options {
        buildDiscarder(logRotator(daysToKeepStr: '30', numToKeepStr: '5'))
        disableConcurrentBuilds()
        skipDefaultCheckout(true)
        timeout(time: 15, unit: 'MINUTES')
        timestamps()
    }

    environment {
        GIT_URL = 'git@github.com:setry14/peachtree-bank.git'
    }

    stages {
        stage('GIT Checkout') {
            steps {
                slackSend color: '#2081c5', message: "Build Started: ${env.BUILD_URL}"
                sh 'printenv'
                sh "git config --global user.email ${env.GIT_CREDENTIALS_EMAIL}"
                sh "git config --global user.name ${env.GIT_CREDENTIALS_USERNAME}"
                git credentialsId: "${env.GIT_CREDENTIALS_ID}", url: "${env.GIT_URL}", branch: "${env.BITBUCKET_TARGET_BRANCH}"
            }
        }

        stage('Install Node Modules') {
            steps {
                sh 'npm install'
            }
        }

        stage('Linting Tests') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'sonar-scanner -Dsonar.projectKey=app -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=1ee9c0a8d12e42dce862432ccaff285471546923'
            }
        }

        stage('Package Application') {
            steps {
                sh 'npm run build -prod'
            }
        }

        stage('Archive Artifact') {
            steps {
                script {
                    app_version = sh(returnStdout: true, script: 'npm run version --silent').trim()
                }
                sh 'source /etc/profile'
                sh "curl -u${env.JFROG_ARTIFACTORY_JENKINS_USER}:${env.JFROG_ARTIFACTORY_JENKINS_PASSWORD} -T ./dist/provisioning-packages/app.zip '${env.JFROG_ARTIFACTORY_SERVER}/app/${app_version}/${env.BUILD_NUMBER}/app.zip'"
            }
        }

        stage('Deploy Application') {
            steps {
                sh "${env.JENKINS_BB_IMPORT_PATH} package ./dist/app/app.zip --portal-host ${env.PORTAL_HOST_ENVIRONMENT_DEVELOPMENT} --portal-port ${env.PORTAL_PORT_ENVIRONMENT_DEVELOPMENT} --portal-version ${env.PORTAL_VERSION_ENVIRONMENT_DEVELOPMENT} --portal-protocol ${env.PORTAL_PROTOCOL_ENVIRONMENT_DEVELOPMENT} --portal-context ${env.PORTAL_CONTEXT_ENVIRONMENT_DEVELOPMENT} --portal-auth-path ${env.PORTAL_AUTH_PATH_ENVIRONMENT_DEVELOPMENT} --portal-username ${env.PORTAL_USERNAME_ENVIRONMENT_DEVELOPMENT} --portal-password ${env.PORTAL_PASSWORD_ENVIRONMENT_DEVELOPMENT} --auth-type ${env.AUTH_TYPE} --ropc-identity-provider ${env.ROPC_IDENTITY_PROVIDER} --ropc-client-id ${env.ROPC_CLIENT_ID}"
            }
        }

        stage('GIT Tag') {
            steps {
                sh "git tag -a v${app_version}-${env.BUILD_NUMBER} -m 'Tag generated from CICD pipeline build # ${env.BUILD_NUMBER}'"
                sh "git push origin v${app_version}-${env.BUILD_NUMBER}"
            }
        }
    }

    post {
        always {
			deleteDir()
		}
        success {
            slackSend color: '#00802b', message: "Build Success: ${env.BUILD_URL}"
        }
        failure {
            slackSend color: '#990000', message: "Build Failed: ${env.BUILD_URL}"
        }
    }
}
