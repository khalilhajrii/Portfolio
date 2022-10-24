import React from 'react';
import experiencedata from '../data/Experience.json'
const Experience = () => {
    return (
        <div className='row'>
            <div className='heading'>
                <h3>EXPERIENCE</h3>
                {experiencedata.experience.items.map((item) =>{
                        return(
                <div className='experience '>
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
        </div>
    );
};

export default Experience;