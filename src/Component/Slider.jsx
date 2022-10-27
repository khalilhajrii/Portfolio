import React, { useEffect } from 'react';
import sliderdata from '../data/SliderData.json'
import Typical from 'react-typical'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Slider=()=> {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[])
    return (
        <div>
            <div className='slider'>
                <h2  className='title'> {sliderdata.slider.slider_text1} <Typical loop={Infinity} wrapper="p" steps={["I'M KHALIL",1000,"I'M A FRONT-END DEVELOPER",500,"I'M A DATA SCIENTIST",500]} /></h2>
                <h3 > {sliderdata.slider.slider_sub_text1} <br /> {sliderdata.slider.slider_sub_text2} </h3>
                <div className='tags'>
                    <button className='btn1'> {sliderdata.slider.slider_button1} </button>
                    <button className='btn2'> {sliderdata.slider.slider_button2} </button>
                </div>
                <div className='text-center'>
                    <img src={process.env.PUBLIC_URL + sliderdata.slider.profile_picture} class="rounded1" alt="profile" data-aos="fade-up"/>
                    <img src={sliderdata.slider.react_logo} class="rounded2" alt="react"/>
                    <img src={sliderdata.slider.python_logo} className='rounded2' alt='python'></img>
                </div>
            </div>
        </div>
    );
}
export default Slider;