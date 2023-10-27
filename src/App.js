import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [color,setColor]=useState("white")
  const click=color =>{
    setColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor =color

  },[color])
  return (
  <>
    
      <div className='d-flex justify-content-evenly align-items-center ' style={{width:'100%',height:'100vh'}}>
    
      <button className='change btn btn-light text-dark' onMouseEnter={()=>{click("black")}} >Black </button>
      <button className=' change btn btn-light text-danger' onMouseEnter={()=>{click("red")}}>Red </button>
      <button className=' change btn btn-light text-primary' onMouseEnter={()=>{click("blue")}}>Blue </button>
      <button className=' change btn btn-light text-success' onMouseEnter={()=>{click("green")}}>Green </button>
      <button className=' change btn btn-light' style={{color:'yellow'}} onMouseEnter={()=>{click("yellow")}}>Yellow </button>

</div>
  </>
  );
}

export default App;
