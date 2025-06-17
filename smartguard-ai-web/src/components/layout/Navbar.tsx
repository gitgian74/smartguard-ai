'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-blue-100 dark:border-blue-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <span className="text-2xl font-semibold text-blue-500 dark:text-blue-400">
                SmartGuard AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-slate-600 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-slate-600 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Funzionalità
              </Link>
              <Link
                href="/about"
                className="text-slate-600 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Chi Siamo
              </Link>
              <Link
                href="/contact"
                className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Contatti
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none focus:text-blue-500 dark:focus:text-blue-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-slate-600 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-slate-600 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Funzionalità
              </Link>
              <Link
                href="/about"
                className="text-slate-600 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                Chi Siamo
              </Link>
              <Link
                href="/contact"
                className="bg-blue-500 text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contatti
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

