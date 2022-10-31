import React, { useEffect } from 'react';
import projectdata from '../data/projectdata.json'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Projets = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })
    return (
        <section id='projects'>
            <div className='row background'>
                <div className='heading'>
                    <h3>PROJECTS</h3>
                </div>
                <div className='slide-container' data-aos="fade-up" data-aos-once="true">
                    <Fade>
                        {projectdata.projet.items.map((item, i) => {
                            return (
                                <div className='each-fade' key={i}>
                                    <div className="image-container">
                                        <img src={item.img} alt="ll" />
                                    </div>
                                    <h2 data-aos="fade-up" data-aos-once="true">{item.title}</h2>
                                    <div className='project-icon'>
                                        <a data-aos="fade-up" data-aos-once="true" href={item.url} target="_blank" rel="noreferrer" className='btn btn-success'><i className='bx bxl-github'></i></a>
                                    </div>
                                </div>
                            )
                        })}
                    </Fade>
                </div>
            </div>
        </section>
    );
};
export default Projets;
