// CRUD

const { MongoClient, ObjectId } = require('mongodb');

const ConnectionURL = 'mongodb://127.0.0.1:27017';
const DatabaseName = 'task-manager';
const id = new ObjectId();

MongoClient.connect(
  ConnectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect database');
    }

    const db = client.db(DatabaseName);
    //   db.collection('users').insertOne({
    //     name: "oguz",
    //     age:22
    //   }, (error, result) => {
    //     if (error) {
    //       return console.log("Unable to instert");
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //   {
    //     name: "damlaa",
    //     age:24
    //   },
    //   {
    //     name: "selima",
    //     age:18
    //   }
    // ], (error, result) => {
    //   if (error) {
    //     return console.log('Unable to insert');
    //   }

    //   console.log(result);
    // })

    // db.collection('tasks').insertMany([
    //   {
    //     description: 'Task 1 Description',
    //     completed: true,
    //   },
    //   {
    //     description: 'Task 2 Description',
    //     completed: false,
    //   },
    // ], (error, result) => {
    //   if (error) {
    //     return console.log("Unable to ,nster tasks!");
    //   }
    //   console.log(result);
    // });

    // db.collection('users').findOne({ name: "oguz" }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to fetch");
    //   }
    //   console.log(user);
    // })

    // db.collection('users').find({ age: 22 }).toArray((err , result) => {
    //   console.log(result);
    // })

    // db.collection('tasks').findOne(
    //   {
    //     _id: new ObjectId('61911b692dbd1d09e4b9cd3e'),
    //   },
    //   (error, task) => {
    //     if (error) {
    //       return console.log('Task read error');
    //     }

    //     console.log(task);
    //   }
    // );

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //   if (error) {
    //     return console.log("Error tasks");
    //   }
    //   console.log(tasks);
    // })

    // const updatedUser = db.collection('users').updateOne({
    //   _id: new ObjectId('61911222b83c19b6f9d3e136'),
    // }, {
    //   $set:{
    //     name:"tahaa"
    //   }
    // });

    // updatedUser.then(result => {
    //   console.log("success",result);
    // }).catch(error => {
    //   console.log("error" , error);
    // })



    db.collection('users').updateOne({
       _id: new ObjectId('61911222b83c19b6f9d3e136'),
    }, {
      $set: {
        name:"oguzz"
      }
    }).then((result) => {
      console.log(  "success" , result);
    }).catch((err) => {
      console.log("error", err);
    });

    console.log('Connect Success');
  }
);
