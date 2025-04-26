import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { step1, step2, step3 } from "../../assets/assets";
import "swiper/swiper-bundle.css";
import "./WorkSlider.css";

const slides = [
  {
    id: 1,
    title: "Picking a bunch of bananas from a palm tree",
    img: step1,
  },
  {
    id: 2,
    title: "Delivering bananas to the market super fresh and fast",
    img: step2,
  },
  {
    id: 3,
    title: "Making banana desserts with love and care",
    img: step3,
  },
];

export default function WorkSlider() {
  return (
    <div className='work-slider-wrapper'>
      <div className='work-title'>How do we work?</div>
      <div className='swiper-container-relative'>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={50}
          className='custom-swiper'
          direction='vertical'
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className='slide-content'>
                <div>
                  <img src={slide.img} className='circle-placeholder' />
                </div>
                <div className='slide-text'>
                  <div className='slide_id'>{slide.id}.</div>
                  <p>
                    <strong>{slide.title}</strong>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
