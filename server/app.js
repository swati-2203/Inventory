import mysql from "mysql2/promise"


const db=await mysql.createConnection({

  host:"localhost",
  user:"root",
  password:"",
  database:"cobit",
})

console.log("mysql connected successfully");

// create db
// await db.execute(`create database cobit_crms`);

// console.log(await db.execute("show databases"));

//  crete table
// await db.execute(`create table admins(id INT AUTO_INCREMENT PRIMARY KEY,username varchar(100))`);
// console.log(await db.execute("show tables"));

//insert 
// db.execute(`insert into admins values(1,'swati')`);
//preapared stmt use 
// await db.execute(`insert into admins values(?,?)`,[2,"atul"]);
// const values=
// [ 
//   [3,'Saee'],
//   [4,'Isha'],
//   [5,'Aarti'],
//   [6,'Asha'],
//   [7,'Shrikant'],

// ];
// db.query(`insert into admins (id,username)values ? `,[values]);
//read
const [rows ,filed]= await db.execute(`select * from admins`);
 console.log(filed);
  console.log(rows);

  //update
//   try{
// const [rows]=await db.execute(`update admins set username="swati B" where username="swati" `);
//   }
//   catch(error)
//   {
//     console.log(error);
//   }

//delete
//   try{
// const [rows]=await db.execute(`delete from admins where username= ? `, ['Swati B'] );
// console.log ([rows]);
// }
//   catch(error)
//   {
//     console.log(error);
//   }