const { MongoClient } = require('mongodb');

const connectionString = 'mongodb://localhost:27017/';
start();

async function start(){
    const connection = new MongoClient(connectionString, {
        useUnifiedTopology: true
    })
    
    await connection.connect();
    console.log('Database connected');

    const db = connection.db('testdb');
    const data = await db.collection('people').find({}).toArray();
    console.log(data)
}