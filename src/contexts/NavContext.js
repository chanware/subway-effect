'use client';

import { createContext, useState, useContext } from 'react';

// Create context
const NavContext = createContext({
  currentPage: 'home',
  isMoving: false,
  setCurrentPage: () => {},
  setIsMoving: () => {}
});

// Provider component
export function NavProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMoving, setIsMoving] = useState(false);

  // Handle page change and moving state
  const handlePageChange = (pageId, moving) => {
    setCurrentPage(pageId);
    setIsMoving(moving);
  };

  return (
    <NavContext.Provider 
      value={{ 
        currentPage, 
        isMoving, 
        setCurrentPage: handlePageChange
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

// Custom hook to use the context
export function useNavigation() {
  return useContext(NavContext);
}