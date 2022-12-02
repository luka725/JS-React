import { useState, useEffect } from "react";

function Expdesc () {
    let [person, setPerson] = useState({
        id: 0,
        title: '',
        name: '',
        date: '',
        article: [""]
    });
    let [data, setData] = useState([
        {
            id: 1,
            title: "Junior Frontend Developer",
            name: "Luka",
            date: "05/09/2000",
            article: ["In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."]
        },
        {
            id: 2,
            title: "DevOps",
            name: "Jemali",
            date: "09/05/1999",
            article: ["In2 publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."]
        },
        {
            id: 3,
            title: "Full-stack Backend Developer",
            name: "Jora",
            date: "06/07/1998",
            article: ["In3 publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."]
        },
    ]);

    useEffect(() => {
        data.map((value) => {
            if (person.id == 0){
            if(value.id == 1){
                setPerson({id: value.id, title: value.title, name: value.name, date:value.date, article: [...value.article]})
            } 
        }
        }) 
    });
    
    const handlerstate = (e:any) =>{
        data.map((value) => {
            if (value.id == e.target.getAttribute("data-attr")){
                setPerson({id: value.id, title: value.title, name: value.name, date:value.date, article: [...value.article]})
            }
        })
    }
    return(
        <div className="infowrapper">
            <div className="buttonswrapper">
                {
                    data.map((value, index) => {
                        return(
                            <button data-attr={value.id} onClick={e => handlerstate(e)} key={index}>{value.name}</button>
                        )
                    })
                }
            </div>
            <div className="information">
            <h1 className="informationtitle">{person.title}</h1>
            <h4 className="personname">{person.name}</h4>
            <p className="date">{person.date}</p>
            <div className="articles">
                {person.article.map((item, index) => (<div key={index}>{item}</div>))}    
            </div>
            </div>
        </div>
    )
}

export default Expdesc;