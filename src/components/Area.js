import React,{useState,useCallback} from "react"
import "../index.css"
import FileInput from "./FileInput"
import Canvas from "./Canvas"

function Area() {
  const [image,setImage] = useState("")

  const onDrop = useCallback(acceptedFiles=>{

    acceptedFiles.map(file => {
       const fr = new FileReader();
       fr.onload = function(e) {
         setImage(prevState => [
           ...prevState,
           { id: Math.floor(Math.random()*10000), src: e.target.result }
         ]);
       };
       fr.readAsDataURL(file);
       return file;
     }); 
    
  }, [])

  return (
    <div>
      <nav className="navbar dark">
        <div className="navbar-brand">
          <h1 className="navbar-item">
            Imagey
          </h1>
        </div>
      </nav> 
      <Canvas images={image}/>
      <FileInput onDrop={onDrop}/>
    </div>
  );
}

export default Area;
