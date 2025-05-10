'use client';

import { NavProvider } from '@/contexts/NavContext';
import SubwayNav from '@/components/SubwayNav';
import SubwayHero from '@/components/SubwayHero';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-100">
        <NavProvider>
          {/* Navigation */}
          <header className="w-full bg-white shadow-md">
            <div className="container mx-auto px-4">
              <SubwayNav />
            </div>
          </header>
          
          {/* Hero Section with Subway Car Window */}
          <SubwayHero />
          
          {/* Page Content */}
          <main className="container mx-auto px-4 py-6 flex-grow">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {children}
            </div>
          </main>
          
          {/* Footer */}
          <footer className="w-full bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 text-center">
              <p>© 2025 Metro Website - A Subway-Themed Experience</p>
            </div>
          </footer>
        </NavProvider>
      </body>
    </html>
  );
}