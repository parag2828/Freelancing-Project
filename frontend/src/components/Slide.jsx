import React from "react";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    // Outer Wrapper: .slide
    <div className="flex justify-center py-[100px]">
      
      {/* Container: .container */}
      {/* The classes starting with [&_] target the internal carousel classes 
          injected by the library.
      */}
      <div className="w-full max-w-[1400px] relative 
        [&_.carousel-initialized]:static 
        [&_.carousel-prev]:w-[50px] [&_.carousel-prev]:h-[50px] 
        [&_.carousel-prev]:bg-[rgb(243,243,243)] [&_.carousel-prev]:rounded-full 
        [&_.carousel-prev]:absolute [&_.carousel-prev]:top-0 [&_.carousel-prev]:bottom-0 
        [&_.carousel-prev]:margin-auto [&_.carousel-prev]:left-[-25px] 
        [&_.carousel-prev]:z-10
        
        [&_.carousel-next]:w-[50px] [&_.carousel-next]:h-[50px] 
        [&_.carousel-next]:bg-[rgb(243,243,243)] [&_.carousel-next]:rounded-full 
        [&_.carousel-next]:absolute [&_.carousel-next]:top-0 [&_.carousel-next]:bottom-0 
        [&_.carousel-next]:margin-auto [&_.carousel-next]:right-[-25px] 
        [&_.carousel-next]:z-10"
      >
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;