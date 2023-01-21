interface prodData {
    title:string,
    description:string,
    price:number,
    thumbnail:string
  }
const Products = ({title, description, price, thumbnail}:prodData) => {

    return(
        <div className="productcard">
        <img src={thumbnail}></img>
        <h3 className="title">{title}</h3>
        <div className="desc"><strong>Desc:</strong>{description}</div>
        <div className="price"><strong>Price:</strong> ${price}</div>
        </div>
    )

}

export default Products;