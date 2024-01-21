import React from "react";
import axios from "axios";
import { useState } from "react";
import "./style.css";

const ImageSearch =()=> {
    const [show, setShow]= useState(false);



    const [file, setFile]= useState(' ');
    function handleImage(e){
      console.log(e.target.files);
      setFile(e.target.files[0]);
    }
    function handleApi(){
      const formData = new FormData();
      formData.append('file', file);
      axios.post('http://127.0.0.1:8000/api/ocr/upload/',formData)
      .then((res)=>{
        console.log('Request successful');
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
    }
  
  return(
    <div className=" container flex flex-col justify-center">
    <button type="button" className="btn btn-outline-light buttonShow" onClick={()=>setShow(!show)}>
Upload Image
</button>
{show  &&
    
    <div className="container w-50  mb-3 flex flex-col justify-center position-relative">
      
      <label htmlFor="formFile" className="form-label text-slate-500 flex justify-center ">Upload the png,jpg or jpeg formate file</label>
      <input className="form-control" type="file" name="file" onChange={handleImage} id="formFile"/>
      <button type="submit" className="btn btn-success m-2 " onClick={handleApi}>
        Upload Image
      </button>
    
  </div>}
  </div>
  )
}

export default ImageSearch;