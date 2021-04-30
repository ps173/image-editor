import React,{useRef,useEffect,useCallback} from 'react';

function Canvas( {images} ) {

const canvasRef = useRef(null)
let cvs , ctx , imgdata;


function truncate(sum){
  if (sum < 0) {
    return 0
  }
  else if (sum > 255){
    return 255;
  }
  else{
    return sum
  }
}



const drawImage = (context,canvas) =>{
  if (images.length === 0){
    return
  }else{
    let image = new Image();
    let len = images.length
    image.src = images[len - 1].src
    image.onload = function(e){
        canvas.width = image.width
        canvas.height = image.height
        context.drawImage(image,0,0)
        imgdata = context.getImageData(0,0,canvas.width,canvas.height)
        console.log(imgdata)
      
        let amount = 45
        let data = imgdata.data // pixels array

        let level = Math.floor(255*(amount/100))  //find percentage of amount

        for (let i = 0; i < data.length; i += 4) {
            data[i] = truncate(data[i]+level) // red
            data[i + 1] = truncate(data[i+1]+level) // green
            data[i + 2] = truncate(data[i+2]+level) // blue
        }
        // re-render image
        context.putImageData(imgdata, 0, 0)
    }
  }
}


useEffect(()=>{
    cvs = canvasRef.current
    ctx = cvs.getContext('2d')
    drawImage(ctx,cvs)
},[images])


const canvasStyle = {
    'backgroundColor' : '#3434D3',
  } 

return (
    <>
      <canvas 
        ref={canvasRef}
        style={images.length ? canvasStyle : {"display" : "none"}}
      />
    </>
  );
}

export default Canvas;
