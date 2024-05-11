
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style/style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

import bgImg1 from '../assets/caru1.jpeg';
import bgImg2 from '../assets/caru2.jpg';
import bgImg3 from '../assets/caru3.webp';

export default function Bannar() {
  return (
    <div className=' container px-4 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slider image={bgImg1} text='These services for maintaining the functionality of a home.'></Slider>
        </SwiperSlide>
        <SwiperSlide>
            <Slider image={bgImg2} text='These services for maintaining the functionality of a home.'></Slider>
        </SwiperSlide>
        <SwiperSlide>
            <Slider image={bgImg3} text='These services for maintaining the functionality of a home.'></Slider>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
