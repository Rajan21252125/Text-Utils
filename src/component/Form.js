import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  const handleChange = () => {
    setText(text.toUpperCase());
    props.showAlert('Text changes to UpperCase successfully','success')
  };
  const onHandleChange = (event) => {
    setText(event.target.value);
  };
  const handleLower = () => {
    setText(text.toLowerCase());
    props.showAlert('Text changes to LowerCase successfully','success')
  }

  const handleClear = () => {
    setText("");
    props.showAlert('All the text from textarea is cleared','success')
  }

  const handleSpace = () => {
    setText(text.split(/\s+/).join(' '));
    props.showAlert('The extra space from the textarea has been cleared ','success')
  };
  
  // const handleCopy = () => {
  //   const textarea = document.createElement('textarea');
  //   textarea.value = text;
  //   document.body.appendChild(textarea);
  //   textarea.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(textarea);
  //   alert('Copied to clipboard');
  // };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard successfully','success')
  }
  
  const color = (color) => {
    if(color === 'white' || color === 'black'){
      return 'primary'
    }
    else if(color === 'red' || color === 'darkRed'){
      return 'danger'
    }
    else{
      return 'success'
    }  
  }

  return (
    <div className="container my-4" style={{color : props.mode === 'light'?"black":"white"}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
            className="form-control"
            id="mybox"
            placeholder="Write your text here !!"
            rows="7"
            value={text}
            onChange={onHandleChange}
            style={{background: props.mode === 'light'?'white':'#212529' , color: props.mode === 'light'?'black':'white'}}
        ></textarea>
      <button disabled={text.length===0} className={`btn btn-${color(props.color)} mx-1 my-1`} onClick={handleChange}>
        Capitalize
      </button>
      <button disabled={text.length===0} className={`btn btn-${color(props.color)} mx-1 my-1`} onClick={handleLower} >Lowercase</button>
      <button disabled={text.length===0} className={`btn btn-${color(props.color)} mx-1 my-1`} onClick={handleClear}>Clear textarea</button>
      <button disabled={text.length===0} className={`btn btn-${color(props.color)} mx-1 my-1`} onClick={handleSpace}>Remove extra space</button>
      <button disabled={text.length===0} className={`btn btn-${color(props.color)} mx-1 my-1`} onClick={handleCopy}>Copy to Clipboard</button>
      </div>
      <div className="container">
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.08 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} minutes to read</p>
      <h2>{text.length>0?text:"Enter something to the textarea to get some preview" }</h2>
      <p>{text}</p>
      </div>
    </div>
  );
}
