'use client';

import { useNavigation } from '@/contexts/NavContext';

const SubwayHero = () => {
  const { currentPage, isMoving } = useNavigation();
  
  // Page details for each station
  const pageDetails = {
    home: {
      title: "HOME",
      subtitle: "Main Station"
    },
    about: {
      title: "ABOUT US",
      subtitle: "Who We Are"
    },
    services: {
      title: "SERVICES",
      subtitle: "What We Offer"
    },
    portfolio: {
      title: "PORTFOLIO",
      subtitle: "Our Work"
    },
    contact: {
      title: "CONTACT",
      subtitle: "Get In Touch"
    }
  };

  const currentPageDetails = pageDetails[currentPage] || pageDetails.home;
  
  return (
    <div className="relative w-full h-96 mt-6 mb-8 overflow-hidden">
      {/* Using z-index to ensure proper layering */}
      
      {/* LAYER 1: Station background (z-index: 10) */}
      <div className="absolute inset-0 z-10">
        {/* Explicitly set the background image with inline styles */}
        <div 
          className={`relative w-full h-full bg-center bg-cover 
            ${isMoving ? 'blur-md transition-all duration-700' : 'transition-all duration-300'}`}
          style={{
            backgroundImage: 'url(/assets/station-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Optional dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>
      
      {/* LAYER 2: Station sign (z-index: 20) - using absolute positioning for consistent placement */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* 
          SIGN POSITIONING - ADJUST THESE VALUES TO MOVE THE SIGN:
          1. Vertical position: Change -translate-y-14 to move up (more negative) or down (less negative)
          2. Horizontal offset: Change marginLeft value to move left (smaller) or right (larger)
         */}
        <div 
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-37
            ${isMoving ? 'blur-md transition-all duration-700' : 'transition-all duration-300'}`}
          style={{ 
            /* ADJUST THIS VALUE to shift the sign horizontally (positive = right, negative = left) */
            marginLeft: '-200px'  
          }}
        >
          {/* 
            SIGN SIZE & APPEARANCE - ADJUST THESE VALUES TO CHANGE THE SIGN:
            1. Change p-6 for padding (larger number = bigger padding)
            2. Add w-64 (or any width class) after shadow-lg to set a fixed width
            3. Change text-3xl and text-lg to adjust title and subtitle sizes
          */}
          <div className="station-sign bg-blue-600 text-white p-6 rounded-md shadow-lg">
            <div className="bg-white text-blue-800 inline-block px-3 py-1 rounded-full text-sm font-bold mb-2">
              METRO
            </div>
            <div className="text-3xl font-bold mb-1">{currentPageDetails.title}</div>
            <div className="text-lg mt-1">{currentPageDetails.subtitle}</div>
            <div className="flex justify-center mt-3 space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* LAYER 3: Subway Car Interior with pre-cut transparent window (z-index: 30) */}
      <div className={`absolute inset-0 z-30 pointer-events-none ${isMoving ? 'train-moving' : ''}`}>
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="/assets/subway-car-interior.png" 
            alt="Subway Car Interior" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Adding a fallback background color in case the image doesn't load */}
      <div className="absolute inset-0 z-0 bg-gray-800"></div>
    </div>
  );
};

export default SubwayHero;