"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  Send
} from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  // Only run on client side
  if (typeof window === 'undefined') return;

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const navItems = [
    {
      href: "#home", // Assuming your Hero section has an id="home"
      label: "Home",
      icon: Home
    },
    {
      href: "#about",
      label: "About",
      icon: User
    },
    {
      href: "#skills",
      label: "Skills",
      icon: Code
    },
    {
      href: "#projects",
      label: "Projects",
      icon: Briefcase
    },
    {
      href: "#contact",
      label: "Contact",
      icon: Send
    }
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Consistent green accent color from the Hero section
  const accentColor = "green-400"; // e.g., text-green-400, hover:text-green-400
  const hoverAccentColor = "cyan-400"; // A slightly different shade for hover if desired, or use the same

  return (
    <motion.header
      initial={{ opacity: 0, y: -60 }} // Start slightly higher
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }} // Added a slight delay to animate after hero content potentially
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${ // z-40 to be below custom cursor if it's z-50
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-700/50" // Added subtle border
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo - Matching Hero Section Name Gradient */}
        <Link
          href="#home" // Link to the top of the page or hero section
          className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${accentColor} via-cyan-500 to-blue-500 hover:opacity-80 transition-opacity duration-300 font-mono`}
        >
          Amara&lt;/&gt; {/* Added a little coding touch to the logo text */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5 lg:space-x-7 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center text-gray-300 hover:text-${hoverAccentColor} transition-colors duration-300 px-2 py-1 rounded-md text-sm font-medium`}
              onClick={(e) => { // Smooth scroll for hash links
                if (item.href.startsWith("#")) {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <item.icon
                className={`w-4 h-4 mr-2 text-gray-500 group-hover:text-${hoverAccentColor} transition-colors duration-300`}
              />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className={`p-2 rounded-md text-gray-300 hover:text-${hoverAccentColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-${accentColor} transition-colors duration-300`}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-gray-950/95 backdrop-blur-sm z-50 md:hidden" // Slightly darker, more opaque for better readability
            onClick={() => setIsMenuOpen(false)} // Close on background click
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full space-y-6 pt-16" // Added padding top
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu content
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMenuOpen(false); // Close menu on item click
                  }}
                  className={`group flex items-center text-xl text-gray-200 hover:text-${hoverAccentColor} transition-colors duration-300 py-3 px-4 rounded-lg w-3/4 justify-center`}
                >
                  <item.icon
                    className={`w-6 h-6 mr-3 text-gray-400 group-hover:text-${hoverAccentColor} transition-colors duration-300`}
                  />
                  {item.label}
                </Link>
              ))}
              <button // Explicit close button inside mobile menu
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className={`absolute top-5 right-5 p-2 rounded-md text-gray-300 hover:text-${hoverAccentColor} focus:outline-none`}
              >
                <X size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;