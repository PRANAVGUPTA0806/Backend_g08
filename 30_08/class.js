//Task : find students who have age =22 or marks ==90.
db.student.find({
    $or: [
      { age: 22 },
      { marks: 90 }
    ]
  })
//Task : find students who dont have age =22 or marks ==90.
  db.student.find({
    $nor: [
      { age: 22 },
      { marks: 90 }
    ]
  })
  //Task : find students who dont have age =22 .
  db.student.find({
    "age": { $not: { $eq: 22 } }
});


  chitkara> db.student.find({
         $or: [
           { age: 22 },
           { marks: 90 }
         ]
       })
    [
      {
        _id: ObjectId('66d02d34c6bc7c3766e0e113'),
        name: 'Alice',
        age: 22,
        subject: 'Data Science',
        marks: 90,
        address: 'Chitkara University'
      }
    ]
    chitkara>  db.student.find({
         $not: [
           { age: 22 },
           { marks: 90 }
         ]
       })

  chitkara> db.student.find({
         $nor: [
           { age: 22 },
           { marks: 90 }
         ]
       })
    [
      {
        _id: ObjectId('66ceeeb944dbb8b30664c0a4'),
        name: 'Pranav8',
        age: 19,
        subject: 'Data Science',
        'marks:': 99,
        address: 'Chitkara University',
        grade: 'A++'
      },
      {
        _id: ObjectId('66ceeeb944dbb8b30664c0a5'),
        name: 'Rohan',
        age: 29,
        subject: 'Data Science',
        'marks:': 90,
        address: 'Chitkara University'
      },
      {
        _id: ObjectId('66ceeeb944dbb8b30664c0a6'),
        name: 'Pratham',
        age: 18,
        subject: 'Data Science',
        'marks:': 95,
        address: 'Chitkara University',
        grade: 'A++'
      },
      {
        _id: ObjectId('66ceeeb944dbb8b30664c0a7'),
        name: 'Piyush',
        age: 20,
        subject: 'Data Science',
        'marks:': 98,
        address: 'Chitkara University',
        grade: 'A++'
      },
      {
        _id: ObjectId('66ceeeb944dbb8b30664c0a8'),
        name: 'Rohan',
        age: 21,
        subject: 'Data Science',
        'marks:': 100,
        address: 'Chitkara University',
        grade: 'A++'
      },
      {
        _id: ObjectId('66d02d34c6bc7c3766e0e114'),
        name: 'Bob',
        age: 19,
        subject: 'Data Science',
        marks: 85,
        address: 'Chitkara University'
      },
      {
        _id: ObjectId('66d02d34c6bc7c3766e0e115'),
        name: 'Charlie',
        age: 18,
        subject: 'Data Science',
        marks: 92,
        address: 'Chitkara University'
      },
      {
        _id: ObjectId('66d02d34c6bc7c3766e0e116'),
        name: 'Diana',
        age: 23,
        subject: 'Data Science',
        marks: 78,
        address: 'Chitkara University'
      },
      {
        _id: ObjectId('66d02d34c6bc7c3766e0e117'),
        name: 'Edward',
        age: 20,
        subject: 'Data Science',
        marks: 88,
        address: 'Chitkara University'
      }
    ]
  //task :4
    chitkara> db.student.find({
            grade: { $not: { $exists: true } }
          })
        [
          {
            _id: ObjectId('66ceeeb944dbb8b30664c0a5'),
            name: 'Rohan',
            age: 29,
            subject: 'Data Science',
            'marks:': 90,
            address: 'Chitkara University'
          },
          {
            _id: ObjectId('66d02d34c6bc7c3766e0e113'),
            name: 'Alice',
            age: 22,
            subject: 'Data Science',
            marks: 90,
            address: 'Chitkara University'
          },
          {
            _id: ObjectId('66d02d34c6bc7c3766e0e114'),
            name: 'Bob',
            age: 19,
            subject: 'Data Science',
            marks: 85,
            address: 'Chitkara University'
          },
          {
            _id: ObjectId('66d02d34c6bc7c3766e0e115'),
            name: 'Charlie',
            age: 18,
            subject: 'Data Science',
            marks: 92,
            address: 'Chitkara University'
          },
          {
            _id: ObjectId('66d02d34c6bc7c3766e0e116'),
            name: 'Diana',
            age: 23,
            subject: 'Data Science',
            marks: 78,
            address: 'Chitkara University'
          },
          {
            _id: ObjectId('66d02d34c6bc7c3766e0e117'),
            name: 'Edward',
            age: 20,
            subject: 'Data Science',
            marks: 88,
            address: 'Chitkara University'
          }
        ]
        //task 5:
        chitkara> db.student.find({
          marks: { $not: { $type: "int" } }
        })
        [
          {
            _id: ObjectId('66ceeeb944dbb8b30664c0a4'),
            name: 'Pranav8',
            age: 19,
            subject: 'Data Science',
            'marks:': 99,
            address: 'Chitkara University',
            grade: 'A++'
          },
          {
            _id: ObjectId('66ceeeb944dbb8b30664c0a5'),
            name: 'Rohan',
            age: 29,
            subject: 'Data Science',
            'marks:': 90,
            address: 'Chitkara University'
          },
          {
            _id: ObjectId('66ceeeb944dbb8b30664c0a6'),
            name: 'Pratham',
            age: 18,
            subject: 'Data Science',
            'marks:': 95,
            address: 'Chitkara University',
            grade: 'A++'
          },
          {
            _id: ObjectId('66ceeeb944dbb8b30664c0a7'),
            name: 'Piyush',
            age: 20,
            subject: 'Data Science',
            'marks:': 98,
            address: 'Chitkara University',
            grade: 'A++'
          },
          {
            _id: ObjectId('66ceeeb944dbb8b30664c0a8'),
            name: 'Rohan',
            age: 21,
            subject: 'Data Science',
            'marks:': 100,
            address: 'Chitkara University',
            grade: 'A++'
          }
        ]



        //Task6
        db.student.find({
                "marks:": { $exists: true, $gte: 90 }
            });
            [
              {
                _id: ObjectId('66ceeeb944dbb8b30664c0a4'),
                name: 'Pranav8',
                age: 19,
                subject: 'Data Science',
                'marks:': 99,
                address: 'Chitkara University',
                grade: 'A++'
              },
              {
                _id: ObjectId('66ceeeb944dbb8b30664c0a5'),
                name: 'Rohan',
                age: 29,
                subject: 'Data Science',
                'marks:': 90,
                address: 'Chitkara University'
              },
              {
                _id: ObjectId('66ceeeb944dbb8b30664c0a6'),
                name: 'Pratham',
                age: 18,
                subject: 'Data Science',
                'marks:': 95,
                address: 'Chitkara University',
                grade: 'A++'
              },
              {
                _id: ObjectId('66ceeeb944dbb8b30664c0a7'),
                name: 'Piyush',
                age: 20,
                subject: 'Data Science',
                'marks:': 98,
                address: 'Chitkara University',
                grade: 'A++'
              },
              {
                _id: ObjectId('66ceeeb944dbb8b30664c0a8'),
                name: 'Rohan',
                age: 21,
                subject: 'Data Science',
                'marks:': 100,
                address: 'Chitkara University',
                grade: 'A++'
              }
            ]


// task 7: update operatins

db.student.updateOne(
  { age:  22  }, // Filter condition
  { $set: { age: 54 } }  // Update operation
)
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }


db.student.updateMany(
     { "age": { $lte: 24 } },
     { $set: { "category": "youth" } }
   );
  // {
  //   acknowledged: true,
  //   insertedId: null,
  //   matchedCount: 8,
  //   modifiedCount: 8,
  //   upsertedCount: 0
  // }


  // Delete


  db.student.deleteOne( { "name": "Alice" } /* filter*/ );
  // { acknowledged: true, deletedCount: 1 }
  


  db.students.deleteOne(
    { "name": "Alice" }  // filter
 );

 db.Deleted.findOneAndDelete({ "name": "Rohan" });
//  {
//    _id: ObjectId('66d1931be8ab1deaeb434001'),
//    name: 'Rohan',
//    age: 29,
//    subject: 'bee',
//    marks: 90
//  }
db.Deleted.deleteMany({ "age": 18 });