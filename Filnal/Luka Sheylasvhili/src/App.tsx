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
  deleteProduct(id: number): any
}
function App() {
  const[searchstring, setSearchstring] = useState("");
  const URL = `https://dummyjson.com/products/search?q=${searchstring}`
  const[products, setProducts] = useState<Products[]>([]);
  const fetchProducts = async () => {
      const allProduct = await fetch(URL)
      const res = await allProduct.json()
      const result = res.products;
      setProducts(result);
  }
  const deleteProduct = (id:number) => {
      setProducts(products.filter(product => product.id != id));
  }
  useEffect(() => {
      fetchProducts()
  }, [searchstring] )

  return (
        <main>
          <div className='header'>
          <label>Search Product:</label>
          <input type="text" onChange={(e) => setSearchstring(e.target.value)} value={searchstring}/>
          </div>
          <section className='itemsloop'>
            {products.map((product) => (
                  <SingleProduct
                          key={product.id}
                          id={product.id}
                          title={product.title}
                          price={product.price}
                          description={product.description}
                          category={product.category}
                          stock={product.stock}
                          thumbnail={product.thumbnail}
                          deleteProduct = {deleteProduct}
                  />
            ))}
          </section>
          <div className='footer'></div>
        </main>
  )
}

export default App
