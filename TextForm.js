import React, { useState } from 'react'


function TextForm(props) {
    const handleUpClick =()=>{
console.log("uppercase was clicked" + text);
let newtext = text.toUpperCase();
setText(newtext)
    }
    const handleLowClick =()=>{
        console.log("uppercase was clicked" + text);
        let oldtext = text.toLowerCase();
        setText(oldtext)
            }
    const handleClearClick =()=>{
                
        let newtext = ''
        setText(newtext)
            }
   
 const handleCopy = ()=>{
   
    var text =document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
 }
 const handlExtraSpaces =()=>{
    let newtext =text.split(/[ ]+/);
    setText(newtext.join(" "))
 }

    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className='container'style={{color: props.mode ==='light'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#042743':'white'}} id="mybox" rows="8" ></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
    <button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
    <button className='btn btn-primary mx-2' onClick={handleCopy}>copy text</button>
    <button className='btn btn-primary mx-2' onClick={handlExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"style={{color: props.mode ==='light'?'white':'black'}}>handlExtraSpaces
        <h2> Your text summery here </h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}



export default TextForm;


