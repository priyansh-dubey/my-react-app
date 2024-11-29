
import React from 'react'
import { useState } from 'react';

function TextArea() {

 

  const [text, setText] = useState("")
  

  const clearField = ()=> {

    setText("")
     
   }
 

  const handleUpCase = ()=> {

   let newText = text.toUpperCase();
   setText(newText)
    
  }

  const handleLoCase = ()=> {

    let newText = text.toLowerCase();
    setText(newText)
     
   }

   const handleClear = ()=> {

    setText("")
     
   }

   const handleCopy = (e)=> {

    const copyText = document.getElementById("floatingTextarea");
    copyText.select();

    navigator.clipboard.writeText(copyText.value);

   }

   const handleExtraSpace = () => {
    const extraSpace = text.replace(/\s+/, " ");
    setText(extraSpace);
   }

  const handleTextArea = (e)=> {
    setText(e.target.value)
  }

  const word = text.split(" ").filter((elem)=>{return elem.length!==0}).length;

//Text to speech code.....
  let speech = new SpeechSynthesisUtterance();

  let voices = window.speechSynthesis.getVoices();
  speech.voice = voices[1];
  const handlePlay=()=>{
    speech.text=text;
    window.speechSynthesis.speak(speech);
  }

  // handle pause...

  const handlePause = () => {
    window.speechSynthesis.pause(speech);
  }

  
  const handleResume = () => {
    window.speechSynthesis.resume(speech);
  }

  



  return (
        <div className="form-floating" style={{display:"flex",justifyContent:"center",alignItems:"center", flexDirection: "column"}}>
   <h1 className='heading'><em>Enter The Text To Analyze Below..</em></h1>
  <textarea className="form-control  my-5 mx-2" value={text} id="floatingTextarea" onChange={handleTextArea}  onClick= {clearField} style={{height: "100px", width: "70%"}}></textarea>

  <div className='buttons'>
  <button type="button" className="btn btn-primary mx-1" onClick={handleUpCase} disabled={text.length===0}>UpperCase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleLoCase} disabled={text.length===0}>LowerCase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleClear} disabled={text.length===0}>Clear</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleCopy} disabled={text.length===0}>Copy</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpace} disabled={text.length===0}>Remove-Extra-Space</button>

  <button type="button" className="btn btnmain btn-primary mx-1" disabled={text.length===0}>
    <button type="button" className="btn btn-primary" onClick={handlePlay} disabled={text.length===0}><i className="ri-play-large-fill" onClick={handlePlay}></i></button>
    <button type="button" className="btn btn-primary mx-1" onClick={handlePause} disabled={text.length===0}><i className="ri-pause-large-fill" onClick={handlePause}></i></button>
    <button type="button" className="btn btn-primary"onClick={handleResume}  disabled={text.length===0}><i className="ri-square-fill" onClick={handleResume}></i></button>
  </button>

  </div>
  <div className='textBelow'>
    <h3>Your Text Summary :</h3>
    <p>Number Of Words :<span>{word}</span></p>
    <p>Number Of Characters : <span>{text.length}</span></p>
    <p>Average Time Reqiured To Read : <span>{(0.2*word).toFixed(2)}</span> Minutes</p>
    <h1>Preview Text</h1>
    <p>{text}</p>
  </div>

 </div>
  );
}

export default TextArea
