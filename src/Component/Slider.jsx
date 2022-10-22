import React from 'react';

function Slider() {
    return (
        <div>
            <div className='slider'>
                <h4 className='email'>khalil.hajri@esen.tn</h4>
                <h2 className='title'>Hey There, <br /> I'm Khalil</h2>
                <button className='btn1'> Front-End Developer</button>
                <button className='btn2'> Data Science/ Analysis</button>
                <div className='text-center'>
                    <img src={process.env.PUBLIC_URL + '/static/img/profile.png'} class="rounded1" alt="profile" />
                    <img src={process.env.PUBLIC_URL + '/static/img/background.svg'} class="rounded2" alt="profile" />
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}
export default Slider;