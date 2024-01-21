import "./Home.css";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/hero";
import AboutSection from "../components/About/about";
import Faqs from "../components/Faq/faq";
import Footer from "../components/Footer/footer";
// import Challenges from "../components/CaseInfo/Challenges";
import TeamMembers from "../components/Team_Members/team";
// import Prizes from "../components/prizesnav/prizesmain/prize";
// import Fir from "../components/Fir/Fir";
// import Procedure from "../components/Procedure/Procedure";
// import Police_team from "../components/Police_Team/Police_team";
import Details from "../components/Details/Details";
import Carousel from "../components/carousel/carousel";
import Navbar from "../components/Navbar/Navbar";
import Statement from "../components/Statement/Statement";
import ImageSearch from "../components/Statement/ImageSearch";
import Voicesearch from "../components/Statement/Voicesearch";
import DefaultHome from "../components/HomeComponents/DefaultHome";
// import DefaultHome from "../DefaultHome";

function Home() {

  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //   async function fetchData(){
  //     console.log(import.meta.env.VITE_API_URL);
  //     try{
  //       let response = await fetch(import.meta.env.VITE_API_URL);
  //       if(!response.ok){
  //         throw new Error("error ");

  //       }
  //       const result = await response.json();
  //       console.log(result);
  //       setData(result);
  //     }catch(error){
  //       alert('Error');
  //     }
  //   }
  //   fetchData();
  // },[]);

  return (
    <>
      <div className="relative z-0 bg-primary">
        <div
          className="  mainbody bg-cover 
      bg-no-repeat bg-center"
        >
          
          <DefaultHome/>
          {/* <Navbar />

          <div className="relative z-0">
            <Hero />
          </div>

          <AboutSection />
          <Carousel />
          <Statement/>
          <Carousel />
          <Fir />
          <ImageSearch/>
          <div className="container flex justify-center text-white ">

          <Voicesearch/>
          </div>
          <Details />
          <Procedure />
          <Carousel />
          <Challenges />
          <Police_team />

          <TeamMembers />
          <Faqs />
          <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default Home;
