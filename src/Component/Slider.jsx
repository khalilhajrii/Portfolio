import React from 'react';

function Slider() {
    return (
        <div>
            <div className='slider'>
                <h2 className='title'>Hey There, <br /> I'm Khalil</h2>
                <h3>I’m not a great programmer; <br/>I’m just a good programmer with great habits. </h3>
                <div className='tags'>
                <button className='btn1'> Front-End Developer</button>
                <button className='btn2'> Data Science/ Analysis</button>
                </div>
                <div className='text-center'>
                    <img src={process.env.PUBLIC_URL + '/static/img/profile_rep.png'} class="rounded1" alt="profile" />
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968286.png" class="rounded2" alt="profile" />
                    <img src='https://ionicframework.com/docs/icons/logo-react-icon.png' className='rounded2' alt='react'></img>
                </div>
            </div>
            <section className='sub-slider'>hhhh</section>
            <div>
            </div>
        </div>
    );
}
export default Slider;