interface Products{
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    thumbnail: string,
    stock: number,
    deleteProduct(id:number): any
  }
const SingleProduct = ({title, id, price, description, category, stock, thumbnail, deleteProduct}:Products) => {
    return(
        <div>
            <h1>{title}</h1>
            <img src={thumbnail}></img>
            <h2>category: {category}</h2>
            <h3>price: ${price}</h3>
            <h4>in stock: {stock}</h4>
            <p>description: </p>
            <h5>{description}</h5>
            <button onClick={() => deleteProduct(id)}>Delete</button>
        </div>
    )
}
export default SingleProduct