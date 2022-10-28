import React, { useEffect, useState } from 'react';
import experiencedata from '../data/Experience.json'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Experience = () => {
    const [currentpage, setcurrentpage] = useState(1);
    const [experience, setexperience] = useState([]);
    const [postperpage] = useState(2);

    useEffect(() => {
        Aos.init({ duration: 1000 })
        setexperience(experiencedata.experience.items)
    }, [experience])
    const indexOfLastPonst = currentpage * postperpage;
    const indexOfFirstPost = indexOfLastPonst - postperpage;
    const currentposts = experience.slice(
        indexOfFirstPost,
        indexOfLastPonst
    )
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(experience.length / postperpage); i++) {
        pageNumbers.push(i);
    }
const setPage = (pageNum) => {
    setcurrentpage(pageNum)
    };
    return (
        <section id="experience" >
            <div className='row exp'>
                <div className='heading' data-aos="fade-up" data-aos-once="true">
                    <h3>EXPERIENCE</h3>
                </div>
                {currentposts.map((item) => {
                    return (

                        <div className='experience ' data-aos="fade-left" data-aos-once="true">
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

                    )
                })}
            </div>
            <center>
            {pageNumbers.map((pageNum, index) => (
                
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                    key={index}
                    className='btn btn-success'
                    onClick={() => {
                        setPage(pageNum);
                    }}
                >
                    {pageNum}{" "}
                </a>
            ))}{" "}
            </center>
        </section>
    );
};

export default Experience;