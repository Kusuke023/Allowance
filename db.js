var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (error, client) => {
    var db = client.db("sample1");

    db.createCollection("test", (error, collection) => {
        client.close();
    });

});