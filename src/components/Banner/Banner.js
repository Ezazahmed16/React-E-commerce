import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import banner1 from '../../../src/assets/banner1.jpg'
import banner2 from '../../../src/assets/banner2.jpg'

const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className='h-screen'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} 
                interval={6000}
            >

                <div data-src={banner1} />
                <div data-src={banner2} />

            </AutoplaySlider>

        </div>
    )
}

export default Banner