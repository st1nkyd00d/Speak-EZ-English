const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://AtilioG:HVC0OhkVAXVrUduo@cluster0.jomb2zq.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    connectToDb: (callback) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return callback()
        })
        .catch(err => {
            console.log(err)
            return callback(err)
        })
     },
    getDb: () => dbConnection
}