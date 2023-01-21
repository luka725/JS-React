import { useState, useEffect } from 'react'
import './App.css'
import Products from './Components/Products';
interface prodData {
  title:string,
  description:string,
  price:number,
  thumbnail: string
}

function App() {
  const [ cat, _ ] = useState(["smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches"]);
  const [ items, setItems ] = useState<prodData[]>([]);
  const [ index, setIndex ] = useState(0);
  const URL = "https://dummyjson.com/products/category";

  const getProducts = async () => {
        const allproducts = await fetch(`${URL}/${cat[index]}`);
        const response = await allproducts.json();
        setItems(response.products);
        console.log(response.products)
        return response;
  }
  
  useEffect(() => {
      getProducts()
}, [cat, index])
  
  return (
    <div className="App">
     <div className='cats'>
      {cat.map((item, index) => (
        <div><button key={index} onClick={() => setIndex(index)}>{item}</button></div>
      ))}
     </div>
     <div className='productdata'>
    {
      items.map((item, index) => (
      <Products 
          key={index}
          thumbnail={item.thumbnail}
          title={item.title}
          description={item.description}
          price={item.price}
      />)  
      )
      }
      </div>
    </div>
  )
}

export default App
