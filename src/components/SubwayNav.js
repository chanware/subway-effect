'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '@/contexts/NavContext';

// Import your subway line SVG when you have it
// import subwayLineSvg from '../../public/assets/subway-line.svg';

const SubwayNav = () => {
  const router = useRouter();
  const { currentPage, setCurrentPage } = useNavigation();
  
  // Navigation items with their positions along the line (in percentages)
  const navItems = [
    { id: 'home', name: 'Home', path: '/', position: 10 },
    { id: 'about', name: 'About', path: '/about', position: 30 },
    { id: 'services', name: 'Services', path: '/services', position: 50 },
    { id: 'portfolio', name: 'Portfolio', path: '/portfolio', position: 70 },
    { id: 'contact', name: 'Contact', path: '/contact', position: 90 }
  ];
  
  const [dotPosition, setDotPosition] = useState(navItems[0].position);
  
  // Handle navigation click
  const handleNavClick = (pageId, path) => {
    if (pageId === currentPage) return;
    
    // Set moving state to trigger animations (true)
    setCurrentPage(pageId, true);
    
    // Find the target position for the dot
    const targetItem = navItems.find(item => item.id === pageId);
    if (targetItem) {
      setDotPosition(targetItem.position);
      
      // After animation delay, navigate to the page
      setTimeout(() => {
        router.push(path);
        
        // Reset moving state after animation completes
        setTimeout(() => {
          setCurrentPage(pageId, false);
        }, 300);
      }, 700); // Navigate after most of the animation is complete
    }
  };
  
  return (
    <div className="w-full py-4">
      <div className="relative mx-auto w-4/5 h-20 flex items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 mr-8">METRO</div>
        
        {/* Subway Line */}
        <div className="flex-1 relative">
          {/* The actual subway line - replace with your SVG or image */}
          <div 
            className="w-full h-3 bg-yellow-500 rounded-full relative"
            style={{ 
              // Uncomment when you have the actual SVG
              // backgroundImage: `url(${subwayLineSvg})`,
              // backgroundSize: 'cover',
              // backgroundPosition: 'center'
            }}
          >
            {/* Station bulges */}
            {navItems.map((item) => (
              <div 
                key={item.id}
                className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full cursor-pointer border-2
                  ${currentPage === item.id ? 'bg-white border-blue-600' : 'bg-gray-200 border-gray-400'}`}
                style={{ left: `${item.position}%` }}
                onClick={() => handleNavClick(item.id, item.path)}
              >
                {/* Station label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap">
                  {item.name}
                </div>
              </div>
            ))}
            
            {/* Moving dot - properly centered on the line */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full shadow-lg transition-all duration-1000 ease-in-out"
              style={{ left: `${dotPosition}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubwayNav;