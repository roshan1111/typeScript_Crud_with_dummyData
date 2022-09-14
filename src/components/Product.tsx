import { FaTrashAlt } from "react-icons/fa";
import { productProps } from "../type";




const handleIdel= (id:number)=>{
console.log(id)
}
export default function Product({product}:productProps) {
    const{id, title,description,price}= product;
  return (
    <>
    <div className="product">

    <h2>{id}</h2>
        <h2>{title}</h2>
    <h2>{price}</h2> 
       <h2>{description}</h2>

    <button className="btn" onClick={()=>{handleIdel(id);}}><FaTrashAlt/></button>
    </div>
       
    </>
  )
}
