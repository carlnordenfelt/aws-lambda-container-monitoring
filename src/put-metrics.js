'use strict';
var aws = require('aws-sdk');
var cloudWatch = new aws.CloudWatch();
var async = require('async');

module.exports = function (options, lambdaStatistics, callback) {
    async.map(lambdaStatistics, function (statistic, asyncCallback) {
        var params = {
            MetricData: [
                {
                    MetricName: options.metricName,
                    Dimensions: [
                        {
                            Name: 'LambdaFunction',
                            Value: statistic.functionName
                        }
                    ],
                    Timestamp: new Date(),
                    Unit: 'Count',
                    Value: statistic.activeContainers
                }
            ],
            Namespace: options.cloudWatchMetricNamespace
        };
        cloudWatch.putMetricData(params, asyncCallback);
    }, callback);
};
