module.exports = function (app, db) {
  // CRUD
  app.get('/api/Accounts/all', function (req, res) {
   

    db.query(`select * from Cheff`).then(results => {
      results.forEach(data => {
        
        // console.log(data);
        //res.send(data);
        res.status(200).json({'dataStatus':'succeess','data1':'adsfd'});
      });

    })
  });

  app.post('/api/new', function (req, res) {
    const { name, email, createdAt, updatedAt } = req.body;
    db.query(`insert into gigs(name,email,createdAt,updatedAt) values('${name}','${email}','${createdAt}','${updatedAt}')`).then(results => {
      res.send(results);
    })
    // db.gig.create({
    //     name: req.body.name,
    //     category: req.body.category,
    //     price: req.body.price
    // }).then(function (result) {
    //     res.json(result);
    // });
  });


  // app.put('/api/update/:id', function (req, res) {
  //     db.gig.update({
  //         name: req.body.name
  //     }, {
  //         where: {
  //             id: req.params.id
  //         }
  //     }).then(function (result) {
  //         res.json(result);
  //     });
  // });

  app.delete('/api/delete/:id', function (req, res) {
    const { id } = req.params.Id;
    db.query(`delete from gigs where Id='${id}'`).then(results => {
      res.send(results);
    })
    // db.gig.destroy({
    //     where: {
    //         id: req.params.id
    //     }
    // }).then(function (result) {
    //     res.json(result);
    // });
  })
}




// const express=require('express');
// const router=express.Router();
// const db=require('../config/database');
// //const sql=require('mssql');
// //const sequelize=require('sequelize');
// //const request = new sql.Request(); 
// const Gig=require('../models/Gig')

// router.get('/',(req,res)=> 
//     // Gig.findAll()
//     // .then(gigs=>{
//     //   console.log(gigs);
//     //   res.sendStatus(200);
//     // })
//     // .catch(err=>console.log(err))
//   db.query(`select * from gigs`).then(results=>{
//     results.forEach(data => {
//       //console.log(data.length);
//       console.log(data);

//     });
//   })

// );

// router.get('/add',(req,res)=>{
//   const {name, email} = req.query;
//   db.query(`Insert into gigs(name, email) values ('${name}', '${email}')`).then(results => {
//     console.log(results);
//   })
//   // const data={
//   //   name:'hahaha',
//   //   email:'user@gmail.com'
//   // }
//   // let {name,email}=data;
//   // Gig.create({
//   //   name,
//   //   email
//   // })
//   // .then(gig=>res.redirect('/gigs'))
//   // .catch(err=>console.log(err));


// })


// module.exports=router;