const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB Server.');

     db.collection('Todo').insertOne({
        text:'Something to do',
        completed:false 
     }, (err, result) => {
        if(err) return console.log('Unable to insert todo',err);
        console.log(JSON.stringify(result.ops, undefined, 2));
     })

    db.collection('Users').insertOne({
        name: 'Udayaditya Singh',
        age: 28,
        location:'Pune'
    }, (err, result) => {
        if (err) return console.log('Unable to insert todo', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
        
    })

    db.close();
})