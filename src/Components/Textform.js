import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","Success")
  };
  const handleLowClick = () => {
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","Success")
  };
  
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared ","Success")

  };
  const handleCopyClick = () => {
   
    document.getSelection().removeAllRanges()
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to your Clipboard","Success")
  };
  const handleSpaceClick = () => {
    
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed","Success")
  };
  const handleOnChange = (event) => {
    // console.log("clicked button");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div  className={`container my-3 text-${props.mode==='dark'?'white':'#042743'}`}>
        <h1>{props.heading}</h1>
        <textarea
          className={`form-control my-3 text-${props.mode==='dark'?'white':'#042743'}`}
                    value={text}
          placeholder="Enter Text Here"
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#125e94':'white'}}
          
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-1 my-3" disabled={text.length===0} onClick={handleUpClick}>
          Convert Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-3" disabled={text.length===0} onClick={handleLowClick}>
          Convert Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-3"
          onClick={handleClearClick}
          disabled={text.length===0}
        >
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-3" disabled={text.length===0} onClick={handleCopyClick}>
          Copy text
        </button>
        <button
          className="btn btn-primary mx-1 my-3"
          onClick={handleSpaceClick}
          disabled={text.length===0}
        >
          Remove Extra Spaces
        </button>
        <div  className={`container my-2 text-${props.mode==='dark'?'white':'#042743'}`}>
        <h2 className={`text-${props.mode==='dark'?'white':'#042743'}`}>Your Text Summary</h2>
        <p>
          <b>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
          </b>
        </p>
        <p>
          <i>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </i>
        </p>
        <h2>Preview</h2>
        {/* <p>{text}</p> */}
        <p>{text.length>0?text:"Enter text above in box area to preview it here"}</p>
      </div>
      </div>
      
    </>
  );
}
