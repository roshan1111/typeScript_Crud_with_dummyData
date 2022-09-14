import Product from './Product';
import {productsProps} from "../type";

// function Products({title, price}: {title:string, price:number}) {



function Products({products}:productsProps ) {
  return (
    <div className='products'>
        {products.map((product)=>(<Product key={product.id} product={product} />))}



    </div> 
  )
}

export default Products