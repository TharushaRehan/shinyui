import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageSwiperProps {
  images: string[]; // Array of image URLs
  className?: string;
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover rounded-md"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-5">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          >
            &gt;
          </button>
        </div>
      )}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="rounded-md bg-black/80 py-1 px-3 text-xs text-white transition-all">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageSwiper;
