
import {useState} from "react";
import axios from "axios";

export default function Login(){
 const [data,setData]=useState({email:"",password:""});
 const login=async()=>{
  const res=await axios.post("http://localhost:5000/api/auth/login",data);
  localStorage.setItem("token",res.data.token);
  window.location="/dashboard";
 };
 return(
  <div className="container">
   <h2>Login</h2>
   <input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})}/>
   <input type="password" placeholder="Password" onChange={e=>setData({...data,password:e.target.value})}/>
   <button onClick={login}>Login</button>
  </div>
 );
}
