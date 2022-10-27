import React, { useEffect } from 'react';
import educationdata from '../data/Education.json'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])
    return (
    <div className='row background'>
        <div className='heading' data-aos="fade-up">
            <h3>EDUCATION</h3>
        </div>
        <div className='mx-auto'>
            {educationdata.education.items.map((item) => {
                return (
                    <div data-aos="flip-up" className='education-experience '>
                        <h2><i class='bx bxs-institution'></i>{item.university}</h2>
                        <h2><i class='bx bx-certification'></i>{item.diploma}</h2>
                        <h2><i class='bx bx-map-pin'></i>{item.place}</h2>
                    </div>
                )
            })}
        </div>
    </div>
    );
};


export default Education;
