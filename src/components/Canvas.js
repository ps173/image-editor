import React,{useRef,useEffect} from 'react';

function Canvas( {files} ) {

const canvasRef = useRef(null)

  useEffect(()=>{

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
  },[canvasRef])

const canvasStyle = {
    'height' :  300,
    'width' : 300,
    'background-color' : '#A4B8D3',
  } 

  return (
    <>
      <canvas 
        ref={canvasRef}
        style={canvasStyle}
      />
    </>
  );
}

export default Canvas;
