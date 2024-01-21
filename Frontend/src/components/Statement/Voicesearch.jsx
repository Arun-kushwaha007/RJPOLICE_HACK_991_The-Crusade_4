import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';

const Voicesearch=()=> {
    const [show, setShow]= useState(false);

    const   startListening =async()=>{
        await SpeechRecognition.startListening({continuous: true,language:'en-IN,hi-IN'});
  
      }
    
      const { transcript, listening,resetTranscript,browserSupportsSpeechRecognition}= useSpeechRecognition();
  
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser do not support</span>
      }
  
  return (
    <div className=" container flex flex-col justify-center">
    <button type="button" className="btn btn-outline-light  voicebtn" onClick={()=>setShow(!show)}>
Voice Input
</button>
{show  &&
    <div className="container flex flex-col justify-center">
        <div className="card text-white w-auto position-relative">
  <div className="card-body">
    <h5 className="card-title">Speak to type</h5>
    <h6 className="card-subtitle mb-2  "><p>Mic: {listening ?'on':'off'}</p></h6>
    <p className="card-text">  
    {transcript}    
</p>
<div className="container flex position-absolute bottom-0 start-0 mb-2">
          <button className='btn btn-success mx-2' onClick={startListening}>Start Listening</button>
          <button className='btn btn-danger' onClick={SpeechRecognition.stopListening}>Stop Listening</button>
          <button onClick={resetTranscript} className='btn btn-warning mx-2'>Reset</button>
          <button className='btn btn-outline-primary'>Send</button>
        </div>
    
  </div>
</div>
</div>
}

{/*         
        <div className="main-content">
        <p className='container '></p>
        </div> */}
        
        
        
      </div>
  )
}

export default Voicesearch;