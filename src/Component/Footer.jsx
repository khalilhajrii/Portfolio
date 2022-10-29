import React from 'react';
import footerdata from '../data/footerdata.json'
const Footer = () => {
    return (
        <div className='row background-footer'>
            {footerdata.footer.items.map((item) => {
                return (
                    <div className='social-media-footer'>
                        <a href={item.facebook} target='_blank' rel="noreferrer" ><i class='bx bxl-facebook bx-tada'></i> </a>
                        <a href={item.instagram} target='_blank' rel="noreferrer"> <i class='bx bxl-instagram bx-tada' ></i></a>
                        <a href={item.linkedin} target='_blank' rel="noreferrer"> <i class='bx bxl-linkedin bx-tada' ></i></a>
                        <a href={item.github} target='_blank' rel="noreferrer"><i class='bx bxl-github bx-tada' ></i></a>
                    </div>
                )
            })}
            <div className='text-footer'>
                <h4> {footerdata.footer.text}</h4>
            </div>
        </div>

    );
};


export default Footer;