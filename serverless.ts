import type { AWS } from '@serverless/typescript';

import clickCell from '@functions/clickCell';
import newGame from '@functions/newGame';
import toogleFlag from '@functions/toogleFlag';
import getGame from '@functions/getGame';

const serverlessConfiguration: AWS = {
  service: 'serverless-api',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    timeout: 15,
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { newGame, clickCell, toogleFlag, getGame },
};

module.exports = serverlessConfiguration;
