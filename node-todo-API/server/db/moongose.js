var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.set('debug', true);
mongoose.plugin(schema => { schema.options.usePushEach = true });
mongoose.connect(process.env.MONGODB_URI, options);
var conn = mongoose.connection; 

conn.on('error', console.error.bind(console, 'connection error:'));  

conn.once('open', () => {
    console.log('Successfully Connected to Database.');
    
});
module.exports = { mongoose };