
import React, { Component, useState } from "react";
import "./style.css";
import Main from "./main";
import Statement from "../Statement/Statement";
import ImageSearch from "../Statement/ImageSearch";
import axios from 'axios';
import Voicesearch from "../Statement/Voicesearch";
import Details from "../Details/Details";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {youtube,
    CM,
    indianlion,
    policelogo,
    facebook,
    numb,
    insta,
    twitter,
    defaultbg,audit,
    security,
    user,
    customer,
    Home,
    newtab,} from "../../assets/images"

const DefaultHome = () => {
    let SearchType=[
        {
          "source": {
            "value":"Name",
              "name": "Home"
              },
              "PoliceStation": "Police Station(optional)",
              
              },
        {
        "source": {
          "value":"Id",
            "name": "The Crusade"
            },
            "PoliceStation": "lorem",
            
            },
        {
        "source": {
          "value":"Both",
            "name": "Know Your Police"
            },
            "PoliceStation": "lorem",
            },
        {
        "source": {
          "value":"None",
              "name": "Citizen services"
              }, 
              "PoliceStation": "lorem",
              },

              {
                "source": {
                  "value":"jkdf",
                      "name": "Community Policing"
                      }, 
                      "PoliceStation": "lorem",
                      },

{
        "source": {
          "value":"fdsf",
              "name": "Organization Wings"
              }, 
              "PoliceStation": "lorem",
              },
              {
                "source": {
                  "value":"Nogsdfhne",
                      "name": "Crime & criminal Information"
                      }, 
                      "PoliceStation": "lorem",
                      },

                      {
                        "source": {
                          "value":"asfre4t",
                              "name": "Police Desk"
                              }, 
                              "PoliceStation": "lorem",
                              },
            {
        "source": {
          "value":"Negeone",
              "name": "Contact Information"
              }, 
              "PoliceStation": "lorem",
              },


              {
                "source": {
                  "value":"Nasteone",
                      "name": "Downloads"
                      }, 
                      "PoliceStation": "lorem",
                      },



                      {
                        "source": {
                          "value":"Nonge4gte",
                              "name": "Other Department Links"
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

        const SearchInfo=()=>{
            if (selected === "Home") { 
              return(
                <Main/>
                )
              } 
              else if (selected === "The Crusade") { 
                return(
                    <>
                    
                    <Statement/>
                    <ImageSearch/>
                    <div className="container flex justify-center text-white ">
          
                    <Voicesearch/>
                    </div>
                    <Details />
                    </>
          
              )
            }
             
          }
      
  return (
   <>
    <div className="container">
        <div className="nav flex justify-between bg-white">
            <div className="logos flex ">
                <div ><img className="logo" src={indianlion} alt="" /></div>
                <div><img className="logo" src={policelogo} alt="" /></div>
                <div className="text-2xl raj">
                   Rajasthan Police
                   
                  </div>
            </div >
            <div className="sidebar flex">
                <div className="flex mx-5 ">

               
            <div className=" reto   form-check form-switch">
  <input className="form-check-input " type="checkbox" id="flexSwitchCheckChecked" checked />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked ">en</label>
</div>
<button className="shade1"></button>
<button className="shade2"></button>
<button className="shade3"></button>
<button className="shade4"></button>
<div className="flex mx-4">

<button className="blueshade">A+</button>
<button className="blueshade">A</button>
<button className="blueshade">A-</button>
</div>
</div>
</div>
<div>
    

<div className="cm">
    <div ><img className="cmimage" src={CM} alt="" /></div>
    <div className="dis">
        <div className="name">Shri Bhajan Lal Sharma</div>
        <div className="name">Hon'ble Chife Minister of <br/> Rajasthan</div>
    </div>
</div>
           
           
            </div>
        </div>

        
        <div className="stickybar ">
            
            <div className="menu">
            
            <select onChange={changeSelectOptionHandler} className="length form-select mx-1 my-2 " aria-label="Default select example"> 
          {Search}
          </select> 
            


            <div className="home"><img className="logosi" src={Home} alt="home" /></div>
            </div>
            <div className="contacts">
                <div className="emenum">Emergency No. : 112</div>
                <div className="emenum">Garima Helpline: 1090</div>
                <div className="emenum">Child Helpline: 1098</div>
                <div className="emenum">Amulance No. : 108</div>
                <div className="emenum">CyberCrime Helpline: 1930</div>
                <div className="emenum">State Centralizedccall Center no. : 181</div>
            </div>
        </div>
        <div>
            
        <SearchInfo/>
        </div>
        

        <div className="whitebar bg-white">
            <div className="diiiv">click here to Scorll Entire Content</div>
        </div>

        <footer>
        <div className="visitors">No. Of visitors: <img className="numb" src={numb} alt="" /></div>
        <div className="footcontent">
            <div className="foot">Nodal Office:Shri Sharat Kaviraj, IGP SCRB, Rajasthan, Copyright &copy; 2023</div>
            <div className="foot">Police. All rights reserved. Disclaimer</div>
            <div className="lowfoot">website Last Updated: Jan 17,2024</div>
        </div>
        </footer>
    </div>
   </>
  );
};
// }

export default DefaultHome;

