 
import React from 'react';
import { tabData } from './Tabs_Data';
import { thumb} from '../../assets/images';
import Design_copmponent from '../design_componet/opacity';
import axios from 'axios';
import { useState,useEffect } from 'react';
// import {Fir} from './content.json'
import './style.css';
import {Spinner} from '../Spinner/Spinner';

const Gallery = ({ activeTab }) => {
  
  const [showDetails, SetDetails]= useState();
  useEffect(()=>{
    async function Details(){
      try{
        const showDetails = await axios.get("http://127.0.0.1:8000/api/ocr/file/");
        console.log(showDetails.data);
        SetDetails(showDetails.data);
        document.write('<p id="jstext">'+ showDetails.data +'</p>');

      }catch(error){
        console.log("error");
      }
    }
    Details();
  },[])

  const filteredData = tabData;
  // const filteredData = Fir || [];

  return (
    <div className="container w-full h-full mt-12 mb-12">
      {filteredData.map((data, index) => (
        <div key={index} className="mb-4 sm:mb-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* <div>document.write(showDetails.data);</div> */}
          {/* 1st div - Content */}
          {/* <div className="flex flex-rows p-3">
            <img
              src={thumb}
              alt={`Image 1`}
              className="w-1/4 h-1/2   object-contain mx-3"
              style={{ maxWidth: '33%', maxHeight: '33%' }}
            />
            <div className='flex flex-col gap-8 text-white'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold '>Details</h1>
            <p className="text-white">{data.Fir.FIR.DetailsOfAccused}</p>
            <p className="text-white">Description:  {data.Fir.FIR.Description}</p>
            <div className='text-xl text-bold '>Sections:-</div>
            
            <p className="text-white">Act: {data.Fir.FIR.Act}</p>
            <p className="text-white">Cognizable: {data.Fir.FIR.Cognizable}</p>
            <p className="text-white">Bailable:  {data.Fir.FIR.Bailable}</p>
            </div>
          </div> */}
          {/* 2nd div - Image */}
          {/* <div className='flex justify-center items-center'>
          <p className="text-white">Occurrence Of Offence:</p><br/>
          <div className='container flex'>
          <p className="text-white m-2">
           Date:{data.Fir.OccurrenceOfOffence.Date},
          </p>
          <p className="text-white m-2">Day:{data.Fir.OccurrenceOfOffence.Day},</p>
          <p className="text-white m-2">Time:{data.Fir.OccurrenceOfOffence.Time}</p>
          </div>
            {/* <img
              src={data.img1}
              alt={`Image 1`}
              className=" object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            /> */}
            
          {/* </div> */} 
          {/* 3rd div - Image */}
          {/* <div className='flex justify-center items-center '> */}
          {/* <p className="text-white">{data.Fir.FIR['FIR No.']}</p> */}
            {/* <img
              src={data.img2}
              alt={`Image 2`}
              className=" object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            /> */}
          {/* </div> */}
          {/* 4th div - Text */}
          <div className="py-4 mt-4 text-white">
          <Design_copmponent/>
          {/* <h1 className='font-bold pb-8  '>More Info</h1> */}
            {/* <p className="text-white mt-3">{data.Cognizable}</p> */}
            {/* <p className="text-white">{data.Bailable}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};


// export class Gallery extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       showDetails: []
//     };
//   }

//   async componentDidMount() {
//     let url = "http://127.0.0.1:8000/api/ocr/file/";
//     this.setState({ isLoaded: true });
//     // let data = axios.get(url);
//     let data = await fetch(url);
//     let parasedData = await data.json();
//     console.log(parasedData);
//     this.setState({ showDetails: parasedData, isLoaded: false });

//   }
//   render(){
//     return(
//       <div className='container my-3'>
//         {this.state.isLoaded && <Spinner/>}
//         <div>
//           {/* {!this.state.isLoaded &&  this.state.showDetails? this.state.showDetails.map((element) => { */}
//           { this.state.showDetails.map((element) => {
//             return(
//               <div className='container' key={element.url}>
//                 <div >{element}</div>
//               </div>
//             )
//             })}
//         </div>

//       </div>

//     )
//   }
// }

export default Gallery;