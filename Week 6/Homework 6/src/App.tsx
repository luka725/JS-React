import './App.css'
import { useState } from "react";
import Bdayreminder from './components/Bdayreminder';
import Experiencetab from './components/Experiencetab';

function App() {
  let [pickedcolor, setpickedColor] = useState("#ffffff");
  let [bgcolor, setbgColor] = useState("#ffffff");
  return (
    <div className="App" style={{backgroundColor: bgcolor}}>
      <h3 className="Myh3">Your chosen color is: {pickedcolor} </h3>
      <button className="Mybutton" onClick={() => setbgColor(pickedcolor)}>Change color</button>
      <br/>
      <input type="color" value={pickedcolor} onChange={e => setpickedColor(e.target.value)}/>
      <Bdayreminder />
      <Experiencetab />
    </div>
  )
}

export default App
