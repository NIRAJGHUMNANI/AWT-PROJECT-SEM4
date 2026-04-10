
const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req,res)=>{
 const {email,password,role}=req.body;
 const hash = await bcrypt.hash(password,10);
 db.run("INSERT INTO users(email,password,role) VALUES(?,?,?)",
 [email,hash,role],()=>res.json({msg:"User created"}));
});

router.post("/login",(req,res)=>{
 const {email,password}=req.body;
 db.get("SELECT * FROM users WHERE email=?",[email], async(err,user)=>{
  if(!user) return res.json({msg:"User not found"});
  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.json({msg:"Wrong password"});
  const token = jwt.sign({id:user.id,role:user.role},"secret");
  res.json({token,role:user.role});
 });
});

module.exports = router;
