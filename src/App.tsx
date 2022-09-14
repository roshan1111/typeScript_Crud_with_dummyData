import './App.css';
import Form from './components/Form';
import Products from './components/Products';


const products = [
    {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    
    },
    {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
   
    }, {
      "id": 3,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      
      },
      {
        "id": 4,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        
        },
        {
          "id": 5,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          
          }, {
            "id": 6,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            
            }
]


function App() {
  
  return (
    <div className="App">
    <h2>hello world..</h2>
    {/* <Products title = "hello world props" price = {22}/> */}

    <Form/>
    
    <Products products = {products}/>


    </div>
  );
}

export default App;
