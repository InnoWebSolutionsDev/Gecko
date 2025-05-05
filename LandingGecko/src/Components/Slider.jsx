import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/slider/1.jpg",
  "/slider/2.jpg",
  "/slider/3.jpg",
  "/slider/4.jpg",
];

function Arrow({ style, onClick, direction }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`z-10 absolute top-1/2 -translate-y-1/2 ${direction === "left" ? "left-4" : "right-4"}
        bg-gray-800/70 border border-gray-500 text-gray-300 hover:text-green-400 hover:border-green-500
        rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200`}
      style={{ ...style }}
      aria-label={direction === "left" ? "Anterior" : "Siguiente"}
    >
      {direction === "left" ? (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}

const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    // dots: false, // No dots
  };

  return (
    <section
      className="w-full h-[35vh] sm:h-[60vh] md:h-[90vh] lg:h-screen min-h-[180px] bg-neutral-900 flex items-center justify-center relative"
      id="hero"
    >
      <Slider {...settings} className="w-full h-full">
        {images.map((src, idx) => (
          <div key={idx} className="w-full h-[35vh] sm:h-[60vh] md:h-[90vh] lg:h-screen min-h-[180px]">
            <img
              src={src}
              alt={`slide-${idx + 1}`}
              className="object-cover w-full h-[35vh] sm:h-[60vh] md:h-[90vh] lg:h-screen min-h-[180px]"
              style={{ filter: "brightness(0.7)" }}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSlider;