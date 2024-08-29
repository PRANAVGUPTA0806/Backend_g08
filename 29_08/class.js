// Task 1:
// Find Student with age equal 22 & Marks equal to 90
// Task 2:
// Find the students where marks are more than or equal 80 and age more than or equal to 18
// Task 3:
// Find students with A++ Grade in mongodb
db.student.find({
    $and: [
      { age: 22 },
      { marks: 90 }
    ]
  })
 db.student.find({
    marks: { $gte: 80 },
    age: { $gte: 18 }
  })
 db.student.find({
    grade: "A++"
  })
//   db.student.find({
//     ...     $and: [
//     ...       { age: 22 },
//     ...       { marks: 90 }
//     ...     ]
//     ...   })
//     [
//       {
//         _id: ObjectId('66d02d34c6bc7c3766e0e113'),
//         name: 'Alice',
//         age: 22,
//         subject: 'Mathematics',
//         marks: 90
//       }
//     ]
//     chitkara>  db.student.find({
//     ...     marks: { $gte: 80 },
//     ...     age: { $gte: 18 }
//     ...   })
//     [
//       {
//         _id: ObjectId('66d02d34c6bc7c3766e0e113'),
//         name: 'Alice',
//         age: 22,
//         subject: 'Mathematics',
//         marks: 90
//       },
//       {
//         _id: ObjectId('66d02d34c6bc7c3766e0e114'),
//         name: 'Bob',
//         age: 19,
//         subject: 'Physics',
//         marks: 85
//       },
//       {
//         _id: ObjectId('66d02d34c6bc7c3766e0e115'),
//         name: 'Charlie',
//         age: 18,
//         subject: 'Chemistry',
//         marks: 92
//       },
//       {
//         _id: ObjectId('66d02d34c6bc7c3766e0e117'),
//         name: 'Edward',
//         age: 20,
//         subject: 'Computer Science',
//         marks: 88
//       }
//     ]
//     chitkara>  db.student.find({
//     ...     grade: "A++"
//     ...   })
//     [
//       {
//         _id: ObjectId('66ceeeb944dbb8b30664c0a4'),
//         name: 'Pranav8',
//         age: 19,
//         subject: 'Data Science',
//         'marks:': 99,
//         address: 'Chitkara University',
//         grade: 'A++'
//       },
//       {
//         _id: ObjectId('66ceeeb944dbb8b30664c0a6'),
//         name: 'Pratham',
//         age: 18,
//         subject: 'Data Science',
//         'marks:': 95,
//         address: 'Chitkara University',
//         grade: 'A++'
//       },
//       {
//         _id: ObjectId('66ceeeb944dbb8b30664c0a7'),
//         name: 'Piyush',
//         age: 20,
//         subject: 'Data Science',
//         'marks:': 98,
//         address: 'Chitkara University',
//         grade: 'A++'
//       },
//       {
//         _id: ObjectId('66ceeeb944dbb8b30664c0a8'),
//         name: 'Rohan',
//         age: 21,
//         subject: 'Data Science',
//         'marks:': 100,
//         address: 'Chitkara University',
//         grade: 'A++'
//       }
//     ]