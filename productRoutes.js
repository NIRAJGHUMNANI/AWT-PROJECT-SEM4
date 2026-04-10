
const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/",(req,res)=>{
 db.all("SELECT * FROM products",[],(err,rows)=>res.json(rows));
});

router.post("/",(req,res)=>{
 const {name,quantity,price}=req.body;
 db.run("INSERT INTO products(name,quantity,price) VALUES(?,?,?)",
 [name,quantity,price],()=>res.json({msg:"added"}));
});

module.exports = router;
