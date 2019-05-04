const express = require("express");
//const exphbs=require('express-haldlebars');
const app = express();
const bodyParser = require("body-parser");
const path=express('path');
const db=require('./config/database');
var apiRoutes = require('./routes/gigs.js');
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

apiRoutes(app,db)

db.authenticate().then(function () {
  app.listen(PORT, function () {
      console.log(`Listening on PORT ${PORT}`);
  });
});

// db
//   .authenticate()
//   .then(() => {
//       console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


// app.get('/',(req,res)=> res.send('Index'));

// app.use('/gigs',require('./routes/gigs'));
 
// const PORT=process.env.listen || 5000;
// app.listen(PORT,console.log(`Server Started on POrt ${PORT}`));

//app.use(cors());

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

 
// app.get('/api/Accounts/getallproducts', (req, res) => {

//         const request = new sql.Request();          
//         request.query('select * from Student', function (err, recordset) {
            
//             if (err) {
//               console.log(err)
//             }            
//             res.send(recordset);
            
//         });
// });




 

// // app.js

// const express = require("express");
// const cors = require('cors');
// const sql = require('mssql');
// const bodyParser = require("body-parser");
// const app = express();
// const port = process.env.PORT || 3301;
// //app.use(cors());
// //app.options('*', cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const config = {
//   user: 'sa',
//   password: '12345',
//   server: 'MALIK\\NAUMANSQL',
//   database: 'Labb'
// }
//   new sql.connect(config, err=>{
//     console.log(err);
//   });

// app.get('/getallproducts', (req, res) => {

//         const request = new sql.Request();          
//         request.query('select * from Student', function (err, recordset) {
            
//             if (err) {
//               console.log(err)
//             }            
//             res.send(recordset);
            
//         });
// });



// let server = app.listen(1433, function () {
//   console.log('Ssqerver is running..'+1433);
// });