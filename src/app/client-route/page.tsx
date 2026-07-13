"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function ClientRoutePage() {
  const settings = {
    dots: true,
  }

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image width={400} height={300} alt="image" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <Image width={400} height={300} alt="image" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <Image width={400} height={300} alt="image" src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <Image width={400} height={300} alt="image" src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  );
}