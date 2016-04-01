var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '07-mongo'
    },
    port: 3000,
    db: 'mongodb://localhost/miBaseDeDatosMongo'
  },

  test: {
    root: rootPath,
    app: {
      name: '07-mongo'
    },
    port: 3000,
    db: 'mongodb://localhost/07-mongo-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '07-mongo'
    },
    port: 3000,
    db: 'mongodb://localhost/07-mongo-production'
  }
};

module.exports = config[env];
