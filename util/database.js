const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://user1:nWyWzsOk4ks7Kd9F@cluster0.yhsnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
      console.log('Connected!');
      callback(client);
    }).catch(err => {
      console.log(err);
  });
};

module.exports = mongoConnect;
