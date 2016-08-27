# aws-lambda-container-monitoring
Monitors number of active AWS Lambda containers and reports to CloudWatch as a custom metric.

##Installation
* Create IAM Role (see IAM.policy)
* Install and package zip file with source code
    * npm install && npm package
* Create Lambda function 
    * Runtime: nodejs4.3
    * Timeout: 300
    * Memory 128
    * Attach newly created IAM Role
    * Upload source package
    * Setup 1 minute scheduling
    
##Options

    var options = {
        cloudWatchMetricNamespace: 'Lambda/ContainerMonitoring', // CloudWatch metric namespace
        lambdaFunctionPrefix: '/aws/lambda/', // CloudWatch Logs filter prefix
        metricName: 'ActiveContainers', // CloudWatch metric name
        activeLambdaOffsetMillis: 10 * 60 * 1000 // Time in millis that a container is considerd active
    };
