import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Thumbs,
  FreeMode
} from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const projectsData = [
  {
    project_name: "Lodha Bellissimo",
    location: "Mahalaxmi, Mumbai",
    price: "₹12,00,00,000",
    image: "https://source.unsplash.com/800x500/?luxury,apartment"
  },
  {
    project_name: "DLF Camellias",
    location: "Golf Course Road, Gurgaon",
    price: "₹25,00,00,000",
    image: "https://source.unsplash.com/800x500/?villa,mansion"
  },
  {
    project_name: "Prestige Lakeside Habitat",
    location: "Varthur, Bangalore",
    price: "₹2,50,00,000",
    image: "source.unsplash.com/800x500/?lakeview,house"
  },
  {
    project_name: "Sobha City",
    location: "OMR, Chennai",
    price: "₹1,50,00,000",
    image: "https://source.unsplash.com/800x500/?realestate,home"
  },
  {
    project_name: "Hiranandani Estate",
    location: "Ghodbunder Road, Thane",
    price: "₹1,80,00,000",
    image: "https://source.unsplash.com/800x500/?skyscraper,balcony"
  }
];

function ProjectCarousel() {
  const thumbsSwiperRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 mt-28 overflow-auto">
      {/* Title with GSAP Animation */}
      

      {/* Main Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Thumbs, FreeMode]}
        effect="coverflow"
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        thumbs={{ swiper: thumbsSwiperRef.current }}
        className="rounded-lg shadow-xl"
      >
        {projectsData.map((property, index) => (
          <SwiperSlide key={index} className="relative group">
            <img
              src="src\assets\images.jpeg"
              
              className="w-full h-[500px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <h3 className="text-2xl font-bold">{property.project_name}</h3>
              <h4 className="text-lg">{property.location}</h4>
              <h5 className="text-xl font-semibold text-green-300">{property.price}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Bar */}
      <div className="mt-4 h-2 bg-gray-300 rounded-lg relative">
        <div className="absolute top-0 left-0 h-2 bg-indigo-600 animate-progress rounded-lg"></div>
      </div>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress
        className="mt-4"
      >
        {projectsData.map((property, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <img
              src="src\assets\images.jpeg"
              alt={property.project_name}
              className="w-full h-20 object-cover rounded-md opacity-75 hover:opacity-100 transition-opacity duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
