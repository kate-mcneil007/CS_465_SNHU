const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
// const host = 'localhost:27017'
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline');

mongoose.set('useUnifiedTopology', true);
console.log("here")
console.log(dbURI);

//`mongodb://${host}:27017/travlr` was where dburi is
console.log("connect fool");
const connect = () => {
  setTimeout(() => mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }), 1000);
}
console.log("connected?");

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

console.log("hullo");
//const readLine = require ('readline');
if (process.platform === 'win32'){
  const rl = readLine.createInterface ({
    input: process.stdin,
    output: process.stdout
  });
  rl.on ('SIGINT', () => {
    process.emit ("SIGINT");
  });
}

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts                                 
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

connect();
console.log("hmm");
require('./travlr');