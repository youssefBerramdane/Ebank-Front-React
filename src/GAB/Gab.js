import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react'
import style from './Gab.module.css';
export default function Gab() {
    const [reference,setReference]=useState("");
    const [current,setCurrent]=useState("reference");
    const [pin,setPin]=useState("");
    const changeRef=(num)=>{
        if(current==="reference"){
            setReference(reference+""+num)
        }else if(current=="PIN"){
            setPin(pin+""+num)
        }
        
    }
    const resetRef=()=>{
        if(current==="reference"){
        setReference("")
        }else{
            setPin("")
        }
    }
    const checkRef=()=>{
        if(current==="reference"){
            setCurrent("PIN")
        }
        
    }
    const cancelOperation=()=>{
        setCurrent("reference");
        setReference("");
        setPin("");
    }
  return (
    <div className={style.page}>
          <div className="container m-5">
                <div className={style.gabmachine}>
                    <div className="border bg-white" {...style.gabscreen}>
                
                        <div id="screen" className="p-3">
                            {current==="reference" && (reference.length>0?reference:"Bonjour inserez votre référence")}
                            {current==="PIN" && (pin.length>0?pin:"Bonjour inserez votre Code Pin")}
                        
                        </div>
                    </div>
                    <div className="mt-3" {...style.gabbuttons}>
                        <div className="row ">
                            
                        <div className="col">
                            <div className={style.numberpad}>
                                <button onClick={()=>changeRef(1)} className="btn btn-secondary">1</button>
                                <button onClick={()=>changeRef(2)} className="btn btn-secondary">2</button>
                                <button onClick={()=>changeRef(3)} className="btn btn-secondary">3</button>
                                <button onClick={()=>changeRef(4)} className="btn btn-secondary">4</button>
                                <button onClick={()=>changeRef(5)} className="btn btn-secondary">5</button>
                                <button onClick={()=>changeRef(6)} className="btn btn-secondary">6</button>
                                <button onClick={()=>changeRef(7)} className="btn btn-secondary">7</button>
                                <button onClick={()=>changeRef(8)} className="btn btn-secondary">8</button>
                                <button onClick={()=>changeRef(9)} className="btn btn-secondary">9</button>
                                <button onClick={()=>changeRef(0)} className="btn btn-secondary">0</button>
                                <button onClick={()=>resetRef()} className="btn btn-danger">Cancel</button>
                                <button onClick={checkRef} className="btn btn-success">{current==="reference"?"suivant":"valider"}</button>
                                {current==="PIN" && <button onClick={cancelOperation} className="btn btn-danger">Annuler l'opération</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
