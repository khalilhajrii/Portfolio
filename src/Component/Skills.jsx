import React,{useEffect} from 'react';
import skillsdata from '../data/Skillsdata.json'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <section id='skills'>
            <div className='row cards'>
                <div className='heading' data-aos="fade-in">
                    <h3>SKILLS</h3>
                </div>
                <div className='carte' data-aos="fade-in">
                    {skillsdata.skills.items.map((item) => {
                        return (
                            <div className='carte-content'  data-aos="fade-in">
                                <h1 className='title-skill'> {item.title} </h1>
                                <ul>
                                    <li>{item.a1}</li>
                                    <li>{item.a2}</li>
                                    <li>{item.a3}</li>
                                    <li>{item.a4}</li>
                                    <li>{item.a5}</li>
                                    <li>{item.a6}</li>
                                    <li>{item.a7}</li>
                                    <li>{item.a8}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
export default Skills