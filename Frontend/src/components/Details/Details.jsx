import './style.css';
import React, { useEffect, useState } from 'react';
import Gallery from './Gallary';
import Tabs from './Tab';
import { motion } from "framer-motion";
// import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks/motion";
import styles from "../Tracks/style"; 
import Popup from './Firform';
import FormDetails from './FormDetails';
import axios from 'axios';

function Details() {
  
  // const [showDetails, SetDetails]= useState();
  // useEffect(()=>{
  //   async function Details(){
  //     try{
  //       const showDetails = await axios.get(' ');
  //       console.log(showDetails.data);
  //       SetDetails(showDetails.data);

  //     }catch(error){
  //       console.log("error");
  //     }
  //   }
  //   Details();
  // },[])

  
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [buttonPopup, setButtonPopup]= useState(false);
  // <script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
// </script>

  return (
    <div className="container mx-auto mt-8">
     <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {/* <TitleText
          title={
            <>
              <div className="flex justify-start mx-24 text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 font-[Oswald]">
              Details
              </div>
            </>
          }
          textStyles="text-center"
        /> */}
       
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className='container flex justify-center'>
    <FormDetails/>
</div>
      </Popup>
      </motion.div>
      <div className='container flex justify-between'>
  <Tabs activeTab={activeTab} onTabClick={handleTabClick} />

  <button className='btn btn-outline-success w-40 h-8  flex text-center justify-center  my-5 mx-5' onClick={()=> setButtonPopup(true)}>Print FIR</button>
  
      </div>
  
      <Gallery activeTab={activeTab} />
        
      
    </div>
  );
}

export default Details;