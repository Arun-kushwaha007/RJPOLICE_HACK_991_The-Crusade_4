import React from 'react'
import "./style.css";

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
export default function Main() {
  return (
    <div className=" contentbody"  >
            <img src={defaultbg} alt="" />

            <div className="forimage">

            

            <div className="spacediv"></div>
            <div className="lowerdiv">
                <div className="box"> <img src={newtab} alt="logos" className="insidelogo" />
                <div className="logoname">Rajasthan Police Hackathon</div></div>
                <div className="box"> <img src={customer} alt="logos" className="insidelogo" />
                <div className="logoname">
                    Contact Directory</div></div>

                <div className="box"> <img src={user} alt="logos" className="insidelogo" />
                <div className="logoname">Citizen Services And Information</div></div>

                <div className="box"> <img src={security} alt="logos" className="insidelogo" />
                <div className="logoname">Press Release</div></div>

                <div className="box"> <img src={audit} alt="logos" className="insidelogo" />
                <div className="logoname">Crime Analytics</div></div>
            </div>
        </div>
        </div>
  )
}
