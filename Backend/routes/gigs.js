const express=require('express');
const router=express.Router();
const db=require('../config/database');
//const sql=require('mssql');
//const sequelize=require('sequelize');
//const request = new sql.Request(); 
const Gig=require('../models/Gig')

router.get('/',(req,res)=> 
    // Gig.findAll()
    // .then(gigs=>{
    //   console.log(gigs);
    //   res.sendStatus(200);
    // })
    // .catch(err=>console.log(err))
  db.query(`select * from gigs`).then(results=>{
    results.forEach(data => {
      //console.log(data.length);
      console.log(data);
      
    });
  })

);

router.get('/add',(req,res)=>{
  const {name, email} = req.query;
  db.query(`Insert into gigs(name, email) values ('${name}', '${email}')`).then(results => {
    console.log(results);
  })
  // const data={
  //   name:'hahaha',
  //   email:'user@gmail.com'
  // }
  // let {name,email}=data;
  // Gig.create({
  //   name,
  //   email
  // })
  // .then(gig=>res.redirect('/gigs'))
  // .catch(err=>console.log(err));


})


module.exports=router;