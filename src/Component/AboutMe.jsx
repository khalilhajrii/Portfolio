import React from 'react';
import aboutdata from '../data/AboutMeData.json'
function AboutMe() {
    return (
        <div className='row'>
            <div className='heading'>
                <h3>{aboutdata.about.title}</h3>
            </div>
            <div className='split  left'>
                <h1>{aboutdata.about.post}</h1>
            </div>
            <div className='split right'>
                <h1>{aboutdata.about.introduction}</h1>
            </div>
        </div>
    );
}
export default AboutMe;