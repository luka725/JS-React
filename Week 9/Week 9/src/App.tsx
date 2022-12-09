import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo/Todo';

function App() {
//   const [mouse, setMouse] = useState({x:0, y:0})

//   const cursor = (e:any) => {
//       //console.log(e);
//       setMouse({x: e.clientX, y:e.clientY})
//   }

//   useEffect(() => {
//     //console.log("mount");
//     window.addEventListener("mousemove", cursor);
//     return () => {
//       window.removeEventListener("mousemove", cursor);
//       //console.log("munount");
//     }
//   }, [])

  return (
    <div>
      <Todo />
      {/* <div 
        style={{border: "solid 0.5px black", borderRadius: "50%", backgroundColor: "greenyellow", height: "2rem", width: "2rem", transform: `translateX(${mouse.x}px) translateY(${mouse.y}px)` }}
      ></div> */}
    </div>
  )
}

export default App
