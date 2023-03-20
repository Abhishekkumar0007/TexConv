import React ,{useState} from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');



    const handleupcase =()=>{
        console.log("uppercase was clicked");
        setText('you have clicked on handleupcase '+ text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handlelowcase =()=>{
        console.log("lowercase was clicked");
        setText('you have clicked on handlelowcase '+ text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handletoclear =()=>{
        console.log(" clear was clicked");
    
        let newtext = "";
        setText(newtext)
    }




    const handleonchange = (event)=>{
        console.log("onchange");
        setText(event.target.value);
    }




    return (
        <>
        <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading} </h2>
            <div className="mb-3">
                <label htmlFor="mybox" class="form-label">Give your text here:</label>
                <textarea className="form-control" value = {text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#051d48':'white',color: props.mode==='dark'?'white':'black' }} id="mybox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-5 " onClick={handleupcase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-5" onClick={handlelowcase}>Convert to Lowercase</button>
            <button className="btn btn-primary " onClick={handletoclear}>Clear text</button>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} character</p>

        </div>
        </>
    );
}
