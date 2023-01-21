import './App.css'
import SingleProduct from './components/product/SingleProduct'
import { useState, useEffect, Provider } from 'react'
interface Products{
  id: number,
  title: string,
  description: string,
  price: number,
  category: string,
  thumbnail: string,
  stock: number,
}
function App() {
  const URL = "https://dummyjson.com/products/search?q=phone"
  const[trigger, setTrigger] = useState(0);
  const[products, setProducts] = useState<Products[]>([]);
  const fetchProducts = async () => {
      const allProduct = await fetch(URL)
      const res = await allProduct.json()
      setProducts(res.products);
      console.log(products)
      return res
  }

  useEffect(() => {
      fetchProducts()
  }, [trigger] )

  return (
        <main>
          <div className='header'>
            <button onClick={() => setTrigger(trigger + 1)}>clickme</button>
          </div>
          <section className='itemsloop'>
            {products.map((product) => (
                  <SingleProduct
                          key={product.id}
                          title={product.title}
                          price={product.price}
                          description={product.description}
                          category={product.category}
                          stock={product.stock}
                          thumbnail={product.thumbnail}
                  />
            ))}
          </section>
          <div className='footer'></div>
        </main>
  )
}

export default App
