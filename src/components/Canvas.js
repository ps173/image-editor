import React,{useRef,useEffect,useCallback} from 'react';

function Canvas( {image} ) {

const canvasRef = useRef(null)
let cvs , ctx ;

  useEffect(()=>{
    cvs = canvasRef.current
    ctx = cvs.getContext('2d')
  },[canvasRef])

  const renderImg = useCallback((image)=>{
    let newImg = new Image()
    newImg.src = image[0].src
    cvs.height = newImg.height
    cvs.width = newImg.width
    ctx.drawImage(newImg,0,0)
  },[canvasRef])

  if (image.length === 0){
    console.log("no render")
  }else{
    console.log("i can render")
    renderImg()
  }


const canvasStyle = {
    'height' :  300,
    'width' : 300,
    'backgroundColor' : '#24B8D3',
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
