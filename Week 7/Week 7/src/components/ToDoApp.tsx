import { useState } from 'react'

const ToDoApp = () => {
    let [userInput, setuserInput] = useState("");
    let [storageInputs, setInStorage] = useState([] as any);
    let [increment, setIncrement] = useState(0);
    let [donedItems, setDonedItems] = useState([] as any);
    const userChanges = (event:React.ChangeEvent<HTMLInputElement>) => {
        setuserInput(event.target.value);
    }
    const storeInput = () => {
        if(userInput != ''){
            setInStorage([{id: increment, text: userInput}, ...storageInputs])
            setIncrement(increment += 1);
        }else{
            alert("type something first...");
        }
        
    }
    const removeItem = (event:any) => {
        setInStorage((current:any) => 
            current.filter((item:any) => item.id != event.target.getAttribute("data-id")))
    }
    const doneItem = (event: any) => {
        storageInputs.map((element: any) => {
            if(element.id == event.target.getAttribute("data-id")){
                setDonedItems([{text: element.text}, ...donedItems])
            }
        })
        setInStorage((current:any) => 
            current.filter((item:any) => item.id != event.target.getAttribute("data-id")))
    }
    return (
        <div className='main'>
        <section className='header'>
            <h3 className='title'>Create To Do list with React.js</h3>
            <br />
            <input className='input' value={userInput} onChange={userChanges} type="text" placeholder='add todo...'></input>
            <button className="addbtn" onClick={() => storeInput()}>add</button>
        </section>
        <section className='todos'>
            <h3 className='lst'>Your Todos list:</h3>
            <ul className="unorderedlist">
            {storageInputs.map((element: any, index: number) => (
                <li key={index}><span>{element.text}</span><button data-id={element.id} onClick={removeItem}>Remove</button><button data-id={element.id} onClick={doneItem}>Done</button></li>
            ))}
            </ul>
        </section>
        <section className='donedtodos'>
            <ul className="unorderedlist doned">
            {donedItems.map((element:any, index: number) => (
                <li key={index}>{element.text}</li>
            ))}
            </ul>
        </section>
        </div>
    )
}

export default ToDoApp;