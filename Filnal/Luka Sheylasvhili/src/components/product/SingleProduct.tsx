interface Products{
    title: string,
    description: string,
    price: number,
    category: string,
    thumbnail: string,
    stock: number,
  }
const SingleProduct = ({title, price, description, category, stock, thumbnail}:Products) => {
    return(
        <>
            <h1>{title}</h1>
            <h2>{category}</h2>
            <h3>{price}</h3>
            <h4>{stock}</h4>
            <h5>{description}</h5>
        </>
    )
}
export default SingleProduct