// "use client";

// import { motion } from "framer-motion";
// import { textContainer, textVariant2 } from "../Tracks/motion";
import React, { Component, useState } from "react";
// import { TitleText } from "../Tracks/CustomTexts";
import "./style.css";
import { motion } from "framer-motion";
import { SearchDetails } from './SearchDetails';
import Design_copmponent from '../design_componet/opacity';
import { staggerContainer } from "../Tracks/motion";
import styles from "../Tracks/style";
import axios from "axios";
// import Voicesearch from "./Voicesearch";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Statement = () => {

        

  // const TitleText = ({ title, textStyles }) => (
  //   <motion.h2
  //     variants={textVariant2}
  //     initial="hidden"
  //     whileInView="show"
  //     className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  //   >
  //     {title}
  //   </motion.h2>
  // );
  

  let articles=[
    {
      "source": {
          "id":"1",
          "name": "State"
          },
          "key":"1",
          "PoliceStation": "Police Station(optional)",
          
          },
    {
    "source": {
      "id":"2",
        "name": "Andhra Pradesh"
        },
        "key":"2",
        "PoliceStation": "lorem",
        
        },
    {
    "source": {
      "id":"3",
        "name": "Arunachal Pradesh	"
        },
        "key":"3",
        "PoliceStation": "lodfasrem",
        },
    {
    "source": {
      "id":"4",
        "name": "Assam"
        },
        "key":"4",
        "PoliceStation": "loadfrem",
        
        },
    {
    "source": {
      "id":"5",
        "name": "Bihar"
        },
        "key":"5",
        "PoliceStation": "loghrem",
        
        },
    {
    "source": {
      "id":"6",
        "name": "Chhattisgarh"
        },
        "key":"6",
        "PoliceStation": "lorejtm",

        },
    {
    "source": {
      "id":"7",
        "name": "Goa"
        },
        "key":"7",
        "PoliceStation": "loryjem",
        
        },
    {
    "source": {
      "id":"8",
        "name": "Gujarat"
        },
        "key":"8",
        "PoliceStation": "loukfrem",
      },
    
    {
    "source": {
      "id":"9",
        "name": "Haryana"
        },
        "key":"9",
        "PoliceStation": "lomyrem",
        }
        ]
    let SelectState = articles.map((element) =>
      <option key={element.source.id}>{element.source.name}</option>
  );
  let SelectPoliceStation = articles.map((elements) =>
  <option key={elements.key}>{elements.PoliceStation}</option>
);

let SearchType=[
  {
    "source": {
      "value":"Name",
        "name": "Search Type"
        },
        "PoliceStation": "Police Station(optional)",
        
        },
  {
  "source": {
    "value":"Id",
      "name": "Text Search"
      },
      "PoliceStation": "lorem",
      
      },
  {
  "source": {
    "value":"Both",
      "name": "Image Search"
      },
      "PoliceStation": "lorem",
      },
  {
  "source": {
    "value":"None",
        "name": "Voice Search"
        }, 
        "PoliceStation": "lorem",
        },
  
      ]
  const Search = SearchType.map((type) =>
    <option key={type.source.value}>{type.source.name}</option>
    );

  const [selected, setSelected] = React.useState(""); 
  const changeSelectOptionHandler = (event) => { 
    setSelected(event.target.value); 
  }; 

  



  // const ImageSearch =()=> {
  //     const [file, setFile]= useState(' ');
  //     function handleImage(e){
  //       console.log(e.target.files);
  //       setFile(e.target.files[0]);
  //     }
  //     function handleApi(){
  //       const formData = new FormData();
  //       formData.append('file', file);
  //       axios.post('http://127.0.0.1:8000/api/ocr/upload/',formData)
  //       .then((res)=>{
  //         console.log('Request successful');
  //       })
  //       .catch((error) => {
  //         console.error('Error uploading image:', error);
  //       });
  //     }
    
  //   return(
  //     <div className="mb-3 flex flex-col justify-center">
  //       <label htmlFor="formFile" className="form-label text-slate-500 flex justify-center ">Upload the png,jpg or jpeg formate file</label>
  //       <input className="form-control" type="file" name="file" onChange={handleImage} id="formFile"/>
  //       <button type="submit" className="btn btn-success m-2 " onClick={handleApi}>
  //         Upload Image
  //       </button>
  //   </div>
  //   )
  // }
  const TextSearch =()=> {
    return(
      <input placeholder="Statement/Scenario"
            type="text"
            className="form-control mx-1"
            id="Statment"
          />
    )
  }

  // const VoiceSearch =()=> {
  //   // const startListening =()=>{
  //   //   SpeechRecognition.startListening({continuous: true,language:'en-IN , hi-IN'});

  //   // }
      

  //   // const { transcript, listening,resetTranscript,browserSupportsSpeechRecognition } = useSpeechRecognition();

  //   // if (!browserSupportsSpeechRecognition) {
  //   //   return <span>Browser do not support</span>
  //   // }

  //   return(
  //     <>
  //     {/* <div className="container">
  //       <h2>Tap to Speak</h2>
  //       <p><i class="fa fa-microphone">Microphone:{listening ?'on':'off'}</i></p>
  //       <div className="main-content">
  //       <p>{transcript}</p>
  //       </div>
        
  //       <div className="btn-style">
  //         <button onClick={startListening}>Start Listening</button>
  //         <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
  //         <button onClick={resetTranscript}>Reset</button>
  //         <button>Copy</button>
  //       </div>
        
  //     </div> */}

  //     {/* <Voicesearch/> */}
  //     </>
  //   )
  // }

  const SearchInfo=()=>{
  if (selected === "Text Search") { 
    return(
      TextSearch()
      )
    } 
  //   else if (selected === "Image Search") { 
  //     return(
  //     ImageSearch()

  //   )
  // }
   else if (selected === "Voice Search") { 
    return(
      console.log('speak')
      // VoiceSearch()

    )
  } 
}


  return (
    <div className="container mx-auto my-8">
       {/* title= */}
       {
            <>
      
              <div className="container mx-auto px-4 flex justify-center ">
              
              <div className="text-3xl lg:text-5xl  text-[#DEECE4] my-3 lg:my-4 font-[Inter] ">
              Search
            </div>
            </div>
              
            </>
          }
        {/* <TitleText
         
          textStyles="text-center"
        /> */}
      <form>
        <div className="m-3 py-2 px-5 d-flex justify-center ">
          
          {/* <select onChange={changeSelectOptionHandler} className="form-select mx-1" aria-label="Default select example"> 
          {Search}
          </select>  */}
          <input placeholder="Statement/Scenario"
            type="text"
            className="form-control mx-1"
            id="Statment"
          />
          <select className="form-select" aria-label="Default select example">
          {SelectState}
          </select>
          
          <select className="form-select mx-1" aria-label="Default select example">
          
          {SelectPoliceStation}
          </select>
          {/* <ImageSearch/> */}
          
          <button type="submit" className="btn btn-primary " >
          Process
        </button>
        </div>
        <div className="m-3 py-2 px-5 d-flex justify-center "> 
          <SearchInfo/>
          </div>
      </form>
      

    </div>
  );
};
// }

export default Statement;

