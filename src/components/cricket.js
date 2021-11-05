/*import React from 'react';
import './cricket.css'
function MissedRun() {
	return <h1 className="no-run">AH! RUN MISSED!</h1>; }
function MadeRun() {
	return <h1 className="made-run">{props.runs} "Runs made!"</h1>; }
function Run=(props)=> {
  const isRun = props.isRun;
  const runs=props.runs;
  if (isRun) {
    return <MadeRun runs={runs}/>; }
  return <MissedRun />; 
}

export default Run;*/



import React from "react";
import './cricket.css';

const Runsmade=(props)=>{
    const r=props.r;
    
    return <h1 className="h22">{r} RUNS,WHAT A SHOT!!</h1>
    
}
const Noruns=()=>{
    return <h1 className="h11">IT'S A DOTBALL..</h1>
}
const Runs=(props)=>{
    //const isrun=props.isrun;
const i=props.i;
    if(i>0&&i<7)
    {
            return <Runsmade r={i}/>;  
    }
    else{
        return <Noruns/>;

    }  
}
export default Runs;