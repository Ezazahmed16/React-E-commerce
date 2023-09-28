import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner3 from '../../../src/assets/banner3.png';
import banner4 from '../../../src/assets/banner4.jpg';
import banner5 from '../../../src/assets/banner5.jpg';

const Banner = () => {
  // const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div>
      {/* <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
        <div className=''>
          <img src={banner1} alt="Banner 1"/>
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
        </div> */}
      {/* </AutoplaySlider> */}

      <Carousel
        infiniteLoop={true}
        autoFocus={true}
        thumbWidth={80}
      >
        <div>
          <img className='max-h-96 image-full' src={banner3} />
        </div>
        <div>
          <img className='max-h-96 image-full' src={banner4} />
        </div>
        <div>
          <img className='max-h-96 image-full' src={banner5} />
        </div>
      </Carousel>

    </div>
  );
};

export default Banner;
