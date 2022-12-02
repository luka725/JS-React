function Personcard({name, age, img}: {name:string, age:number, img:string}){
    
    return(
        <div className="card">
            <img className="img" src={"images/"+img}></img>
            <div className="person">
            <h3 className="anotherH3">{name}</h3>
            <h4 className="myH4">{age} Years</h4>
            </div>
        </div>
    )
}

export default Personcard;