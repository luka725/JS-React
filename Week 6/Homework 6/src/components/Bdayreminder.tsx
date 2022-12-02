import Personcard from "./Personcard";
import { useState } from "react";

function Bdayreminder() {
    let [ppl, setPpl] = useState([
        {
            "id": 1,
            "name": "Sulxan Kvernadze",
            "age": 20,
            "img": '1.jpg'
        },
        {
            "id": 2,
            "name": "Avtandil Shoshiashvili",
            "age": 35,
            "img": '2.jpg'
        },
        {
            "id": 3,
            "name": "Silvester Stalone",
            "age": 44,
            "img": '3.jpg'
        },
        {
            "id": 4,
            "name": "Sergia Jayeli",
            "age": 130,
            "img": '4.jpg'
        },
        {
            "id": 5,
            "name": "Baia Pararaia",
            "age": 1000,
            "img": '5.jpg'
        },
    ])
    return(
        <div className="wrapper">
            <h3 className="anotherH3">Birthdays Today {ppl.length}</h3>
            {ppl.map((obj, index) => (<Personcard key={index} {...obj} />)
            )}
        <button className="btn" onClick={() => setPpl([])}>Clear all</button>
        </div>
    )
}

export default Bdayreminder;