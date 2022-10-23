import React from 'react';
import sliderdata from '../data/SliderData.json'
function Slider() {
    return (
        <div>
            <div className='slider'>
                <h2 className='title'> {sliderdata.slider.slider_text1} <br/> {sliderdata.slider.slider_text2} </h2>
                <h3> {sliderdata.slider.slider_sub_text1} <br /> {sliderdata.slider.slider_sub_text2} </h3>
                <div className='tags'>
                    <button className='btn1'> {sliderdata.slider.slider_button1} </button>
                    <button className='btn2'> {sliderdata.slider.slider_button2} </button>
                </div>
                <div className='text-center'>
                    <img src={process.env.PUBLIC_URL + sliderdata.slider.profile_picture} class="rounded1" alt="profile" />
                    <img src={sliderdata.slider.react_logo} class="rounded2" alt="react" />
                    <img src={sliderdata.slider.python_logo} className='rounded2' alt='python'></img>
                </div>
            </div>
        </div>
    );
}
export default Slider;