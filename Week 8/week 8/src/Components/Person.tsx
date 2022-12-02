import Currentperson from "./Currentpersoninformation";
import { useState } from "react";
const Person = () => {
    const [bigdata, setData] = useState([
        {
            name: "Patrick",
            mail: "Bikini Bottom",
            specialty: "Patrick :)",
            location: "Bikini Bottom",
            phone: "Big stone",
            passwd: "Patrick",
            img: "./images/patrick.jpg"

        },
        {
            name: "Spongebob",
            mail: "Sb.roundpants@bikinibottom",
            specialty: "Jellyfish",
            location: "Pinaple",
            phone: "Garry knows",
            passwd: "squidwardsmyfriend",
            img: "./images/spongebob.jpg"
        },
        {
            name: "Squidward",
            mail: "octopus@bikinibottom",
            specialty: "Clarnette",
            location: "statue from old civilisation",
            phone: "don't tell spongebob",
            passwd: "ihatespongebob",
            img: "./images/squidward.jpg"
        },
        {
            name: "Mr.krabs",
            mail: "money@bikinibottom",
            specialty: "restaurant owner",
            location: "crustycrubs",
            phone: "+123 123 123 123",
            passwd: "moneybag",
            img: "./images/krabs.jpg"
        }
    ]);
    const [randomIndex, setRandomIndex] = useState(0);
    const handle = () => {
        const len = bigdata.length;
        if( randomIndex == len -1 ){
            setRandomIndex(0);
        }else{
            setRandomIndex(randomIndex + 1);
        }
    }
    return( 
        <div className="board">
            {bigdata.map((obj, index) => {
                if(index === randomIndex){
                    return (
                        <Currentperson key={index} {...obj}  />
                    )
                }
            })}
            <button className="btn" role="button" onClick={() => handle()}>Random Charachter</button>
        </div>
    )
}

export default Person;