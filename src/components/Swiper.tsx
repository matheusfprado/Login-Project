import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"



import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"


import Image from 'next/image'
import Marvel from '../assets/img/marvel.png'
import Animes from '../assets/img/animes.png'
import Starwars from '../assets/img/star-wars.png'
import Bigbang from '../assets/img/big-bang.png'
import DC from '../assets/img/dc-logo.png'

import SwiperCore, { Pagination, Navigation, Autoplay} from 'swiper';




SwiperCore.use([Pagination, Navigation, Autoplay]);
export default function App() {


  const [swiperRef] = useState<any>();

  let appendNumber = 4;
  let prependNumber  = 1;
  

  const prepend1 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
    ]);
  }

  const prepend = () => {
    swiperRef.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
  }

  const append = () => {
    swiperRef.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
  }

  const append1 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
      '<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
    ]);
  }

  return (
    <>
      <div>
        <Swiper slidesPerView={2}  navigation={true}  loop={true} autoplay={{ delay: 2000, disableOnInteraction: false}} >
          <SwiperSlide><a href="#"><Image src={Marvel.src} alt="lanche" width={700} height={400} className="rounded-md " /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={DC.src} alt="pizza" width={700} height={400} className="rounded-md" /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Animes.src} alt="mulher" width={700} height={400} className="rounded-md"  /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Starwars.src} alt="lanche" width={700} height={400} className="rounded-md"  /></a></SwiperSlide>
          <SwiperSlide><a href="#"><Image src={Bigbang.src} alt="pizza" width={700} height={400}  className="rounded-md" /></a></SwiperSlide>
        </Swiper>
      </div>
      <p className="append-buttons">
        <button onClick={() => prepend1()} className="prepend-1-slides"></button>
        <button onClick={() => prepend()} className="prepend-slide"></button>
        <button onClick={() => append()} className="append-slide"></button>
        <button onClick={() => append1()} className="append-1-slides"></button>
      </p>

    </>
  )
}
