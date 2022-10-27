import React, { useEffect } from 'react';
import experiencedata from '../data/Experience.json'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Experience = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    })
    return (
        <div className='row'>
            <div className='heading' data-aos="fade-up">
                <h3>EXPERIENCE</h3>
                </div>
                {experiencedata.experience.items.map((item) =>{
                        return(
                <div className='experience ' data-aos="fade-left">
                <ul>
                    
                        <h2><i class='bx bxs-institution'></i>{item.post}</h2>
                        <h2><i class='bx bx-certification'></i>{item.company}</h2>
                        <h2><i class='bx bx-map-pin'></i>{item.place}</h2>
                        <h2><i class='bx bx-map-pin'></i>{item.duration}</h2>
                        
                            <li>{item.des1}</li>
                            <li>{item.des2}</li>
                            <li>{item.des3}</li>
                            <li>{item.des4}</li>
                            <li>{item.des5}</li>
                        
                        </ul>
                    </div>
                    )})}
        
        </div>
    );
};

export default Experience;