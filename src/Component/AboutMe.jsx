import React, { useEffect } from 'react';
import aboutdata from '../data/AboutMeData.json'
import Aos from 'aos'
function AboutMe() {
    useEffect(()=>{
        Aos.init({duration:5000})
    },[])
    return (
        <section id='section-1'>
        <div className='row' id='who'>
            <div className='heading' data-aos="fade-up" data-aos-once="true">
                <h3>{aboutdata.about.title}</h3>
            </div>
            <div className='split  left' data-aos="zoom-in-down" data-aos-once="true">
                <h1>{aboutdata.about.post}</h1>
            </div>
            <div className='split right' data-aos="zoom-in-down" data-aos-once="true">
                <h1>{aboutdata.about.introduction}</h1>
            </div>
        </div>
        </section>
    );
}
export default AboutMe;