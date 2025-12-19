// components/ImageSlider.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// Define TypeScript interface for the image data
interface SlideImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const ImageSlider = () => {
  // Image data for the computer service theme
  const slides: SlideImage[] = [
    {
      id: 1,
      src: "home_image/hero_banner1.webp",
      alt: "Computer Repair Service",
      title: "Expert Computer Repair",
      description: "Fast and reliable repair services for all computer issues"
    },
    {
      id: 2,
      src: "home_image/hero_banner2.webp",
      alt: "Website Development",
      title: "Custom Website Development",
      description: "Modern, responsive websites built with latest technologies"
    },
    {
      id: 3,
      src: "home_image/hero_banner3.webp",
      alt: "Computer Retail Shop",
      title: "Computer shop",
      description: "Complete PC components will be able to find at our shop"
    },
    {
      id: 4,
      src: "home_image/hero_banner4.webp",
      alt: "IT Support",
      title: "24/7 IT Support",
      description: "Round-the-clock technical support for website"
    },
    {
      id: 5,
      src: "home_image/hero_banner5.webp",
      alt: "Software Solutions",
      title: "Custom Software Solutions",
      description: "Tailored software to meet your business needs"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Function to go to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Function to go to specific slide
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, nextSlide]);

  // Toggle autoplay
  const toggleAutoplay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

return (
  <div className="relative w-full h-[50vh] sm:h-[400px] md:h-[800px] overflow-hidden shadow-xl mt-4">
    {/* Slides container */}
    <div 
      className="flex transition-transform duration-500 ease-in-out h-full"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {slides.map((slide) => (
        <div 
          key={slide.id} 
          className="w-full h-full flex-shrink-0 relative"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.src})` }}
          />
          
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Slide content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-4 sm:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl mb-4 sm:mb-6 md:mb-8 px-2 drop-shadow-md">
              {slide.description}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation buttons - smaller on mobile */}
    <button 
      onClick={prevSlide}
      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition duration-300 z-20"
      aria-label="Previous slide"
    >
      <ChevronLeft size={20} className="w-4 h-4 sm:w-6 sm:h-6" />
    </button>
    <button 
      onClick={nextSlide}
      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition duration-300 z-20"
      aria-label="Next slide"
    >
      <ChevronRight size={20} className="w-4 h-4 sm:w-6 sm:h-6" />
    </button>

    {/* Autoplay toggle button */}
    <button 
      onClick={toggleAutoplay}
      className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition duration-300 z-20"
      aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
    >
      {isAutoPlaying ? <Pause size={16} className="sm:w-5 sm:h-5" /> : <Play size={16} className="sm:w-5 sm:h-5" />}
    </button>

    {/* Slide indicators - smaller on mobile */}
    <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
            index === currentSlide 
              ? 'bg-white w-6 sm:w-10' 
              : 'bg-white/50 hover:bg-white/80'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    {/* Slide counter - smaller on mobile */}
    <div className="absolute bottom-3 sm:bottom-6 right-2 sm:right-6 bg-black/50 text-white px-2 py-1 rounded-full text-xs sm:text-sm z-20">
      {currentSlide + 1} / {slides.length}
    </div>
  </div>
);
};

export default ImageSlider;