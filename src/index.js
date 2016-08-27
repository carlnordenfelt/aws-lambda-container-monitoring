'use strict';

var putMetrics = require('./put-metrics');
var getStatistics = require('./get-statistics');

var options = {
    cloudWatchMetricNamespace: 'Lambda/ContainerMonitoring',
    metricName: 'ActiveContainers',
    activeLambdaOffsetMillis: 10 * 60 * 1000
};

exports.handler = function(event, context) {
    console.log('Collecting Lambda container metrics');
    getStatistics(options, function (error, lambdaStatistics) {
        if (error) {
            return context.done(error);
        }
        putMetrics(options, lambdaStatistics, function (error) {
            if (error) {
                return context.done(error);
            }
            context.done(null, 'Done');
        });
    });
};
