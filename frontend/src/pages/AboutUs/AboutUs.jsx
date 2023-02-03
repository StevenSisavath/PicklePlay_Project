import React, { useState, useEffect } from 'react';
import './AboutUs.css'

const AboutUs = (props) => {
    return ( 
        <div className='aboutusbody'>
            <div>
                <h1 className='aboutustitle'>ABOUT US</h1>
                <h3 className='aboutusread'>PicklePlay is a website for new and former players to explore the expanding world of pickleball. Currently, the fastest growing sport in America, pickleball is reaching record numbers and needs players like you. Here on PicklePlay we offer tournaments for players to register and play now!</h3>
            </div>
            <div className='videoplayer' >
                <h3 className='videotitle'>Guide For Beginners</h3>
                <div className='video'>
                    <iframe id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="360"
                    src={`https://www.youtube.com/embed/RF5RyCh7GNc?autoplay=1&origin=http://example.com`}
                    frameBorder="0">
                    </iframe>
                </div>
            </div>
            <br></br>
            <div className='videoplayer' >
                <h3 className='videotitle'>Useful Tips Before You Get Started</h3>
                <div className='video'>
                    <iframe id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="360"
                    src={`https://www.youtube.com/embed/Yj_ZgJYqoJk?autoplay=1&origin=http://example.com`}
                    frameBorder="0">
                    </iframe>
                </div>
            </div>

        </div>
     );
}
 
export default AboutUs;