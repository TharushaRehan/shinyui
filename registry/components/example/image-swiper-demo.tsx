import React from "react";
import ImageSwiper from "@/components/shinyui/image-swiper";

const images = [
  "https://images.unsplash.com/photo-1738762390183-c18525eb3f8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1738694114013-4a92b1851d3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1737100593814-8ceb04f29cca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
];

const ImageSwiperDemo = () => {
  return (
    <div className="lg:max-w-[400px] h-fit">
      <ImageSwiper images={images} />
    </div>
  );
};

export default ImageSwiperDemo;
