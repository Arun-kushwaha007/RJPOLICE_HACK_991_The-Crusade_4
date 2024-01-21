import React from 'react'
import { useState,useEffect } from 'react';


function FormDetails() {

  // const [form, setForm]= useState(' ');
  //     function handleForm(e){
  //       console.log(e.target.files);
  //       setImage(e.target.files[0]);
  //     }
  //     function handleformApi(){
  //       const FormData= new ImageData()
  //       // FormData.append('image',image);
  //       // axios.post('http://127.0.0.1:8000/api/ocr/upload/',imageData).then((res)=>{
  //       //   console.log(res);
  //       // })
  //     }

  return (
    <div>
         <form className="needs-validation form-row " noValidate>
  <div className="form-row flex">
    <div className="col-md-4 mb-3 mx-1">
      <label htmlFor="validationCustom01">User name</label>
      <input type="text" className="form-control" id="validationCustom01" placeholder="First name"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3 mx-1">
      <label htmlFor="validationCustom01"> </label>
      <input type="text" className="form-control" id="validationCustom01" placeholder="Last name"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    </div>
    <div className=''>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationCustom02">Father's name</label>
      <input type="text" className="form-control" id="validationCustom02" placeholder="Father's name"  required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    </div>
    <div className='flex '>
    <div className="col-md-4 mb-3 mx-1">
      <label htmlFor="inputEmail4">Email Id</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"  required/>
      <div className="valid-feedback">
        Enter a valid Email Id
      </div>
    </div>
    <div className="col-md-4 mb-3 mx-1">
      <label htmlFor="validationCustom03">Phone Number</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="Phone Number"  required/>
      <div className="valid-feedback">
        Enter a valid phone number
      </div>
    </div>
  </div>
  <div className="form-row flex">
    <div className="col-md-6 mb-3 mx-1">
      <label htmlFor="validationCustom03">City</label>
      <input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3 mx-1">
      <label htmlFor="validationCustom04">State</label>
      <input type="text" className="form-control" id="validationCustom04" placeholder="State" required/>
      <div className="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3 mx-1">
      <label htmlFor="validationCustom05">Pin Code</label>
      <input type="text" className="form-control" id="validationCustom05" placeholder="Pin Code" required/>
      <div className="invalid-feedback">
        Please provide a valid Pin Code.
      </div>
    </div>
    
  </div>
  <div className="col-md-6 mb-3 mx-1">
      <label htmlFor="validationCustom06">Place of Occurrence</label>
      <input type="text" className="form-control" id="validationCustom06" placeholder="Address" required/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>


  
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button className="btn btn-primary my-3" type="submit">Print</button>
</form> 
    </div>
  )
}

export default FormDetails