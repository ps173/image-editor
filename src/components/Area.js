import React,{useState,useEffect} from "react"
import "../index.css"
import Canvas from "./Canvas"
import FileInput from "./FileInput"

function Area() {
  
const [fileInp,setFileInp] = useState()

  return (
    <div>
      <nav className="navbar dark">
        <div className="navbar-brand">
          <h1 className="navbar-item">
            Imagey
          </h1>
        </div>
      </nav> 
      <div className="container is-fluid centered">
        <Canvas/>
      </div>
      <FileInput value={fileInp}}/>
    </div>
  );
}

export default Area;
