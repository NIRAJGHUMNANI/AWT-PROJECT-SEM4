
import {useEffect,useState} from "react";
import axios from "axios";

export default function Dashboard(){
 const [products,setProducts]=useState([]);

 useEffect(()=>{
  axios.get("http://localhost:5000/api/products")
  .then(res=>setProducts(res.data));
 },[]);

 return(
  <div style={{padding:"20px"}}>
   <h1>Dashboard</h1>
   <table border="1" width="100%">
    <thead>
     <tr><th>Name</th><th>Qty</th><th>Price</th></tr>
    </thead>
    <tbody>
     {products.map(p=>(
      <tr key={p.id}>
       <td>{p.name}</td>
       <td>{p.quantity}</td>
       <td>{p.price}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
}
