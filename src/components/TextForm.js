import React,{useState} from 'react'
import './new.css'

export default function TextForm(props) {
   const handleUpClick=()=>{
    // console.log("Upper case was clicked"+text)
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","Success")
   }
   const handleLowClick=()=>{
    // console.log("Upper case was clicked"+text)
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","Success")
   }
   const handlecolor=()=>{
    // console.log("Upper case was clicked"+text)
         let newText="1,2,3,4,5"
         setText(newText)
   }

   const handleOnchange=(event)=>{
    // console.log("On change")
    setText(event.target.value)
   }

    const [text, setText] = useState("");
    // text="hjsahfgas"//wrong way
    // setText("new text")//right way
  return (
    <>
   <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'#042743':'white'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handlecolor}>Convert to numbers</button>

</div>
<div className="container my-2" style={{color:props.mode==='dark'?'white':"#042743"}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words, {text.length} chracters</p>
  <p>{0.008*text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
  </>)
}
