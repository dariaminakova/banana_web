import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { step1, step2, step3 } from "../../assets/assets";
import "swiper/swiper-bundle.css";
import "./WorkSlider.css";

const slides = [
  {
    id: 1,
    title: "Picking a bunch of bananas",
    subtitle: "from a palm tree",
    img: step1,
  },
  {
    id: 2,
    title: "Delivering bananas to the market",
    subtitle: "super fresh and fast",
    img: step2,
  },
  {
    id: 3,
    title: "Making banana desserts",
    subtitle: "with love and care",
    img: step3,
  },
];

export default function WorkSlider() {
  return (
    <div className='work-slider-wrapper'>
      <h2 className='work-title'>How do we work?</h2>
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
                  <h3>{slide.id}.</h3>
                  <p>
                    <strong>{slide.title}</strong>
                    <br />
                    {slide.subtitle}
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
