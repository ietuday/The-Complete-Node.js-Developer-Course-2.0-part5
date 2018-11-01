var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test' ) {
  var config = require('./config.json');
  var envConfig = config[env];


  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}else if(env == 'production'){
  process.env.MONGODB_URI = 'mongodb://uday:uday123456@ds145043.mlab.com:45043/node-app';
  process.env.JWT_SECRET = 'dfsdfgshjfggjshbnxxvsddbhfzmxmfsnfjdsndfjdfbns'
}