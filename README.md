# aws-lambda-container-monitoring
Monitors number of active AWS Lambda containers and reports to CloudWatch as a custom metric.

##Installation
* Create IAM Role (see IAM.policy)
* Install and package zip file with source code
    * `npm install` && `npm run package`
* Create Lambda function 
    * Runtime: nodejs4.3
    * Timeout: 300
    * Memory: 128
    * Handler: src/index.handler
    * Attach newly created IAM Role
    * Upload source package
    * Setup 1 minute scheduling
    
##Options
In src/index.js:

    var options = {
        cloudWatchMetricNamespace: 'Lambda/ContainerMonitoring', // CloudWatch metric namespace
        metricName: 'ActiveContainers', // CloudWatch metric name
        activeLambdaOffsetMillis: 10 * 60 * 1000 // Time in millis that a container is considerd active
    };
