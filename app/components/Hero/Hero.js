"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiInstagram,
} from "react-icons/fi";
import Image from "next/image";

const getRandom = (min, max) => Math.random() * (max - min) + min;

export const HeroSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const nameToType = "Amartuvshin";
  const [typedName, setTypedName] = useState("");
  const roles = [
    "Computer Science Developer",
    "Full Stack Web Developer",
    "Mobile App Enthusiast",
    "Innovation Driven Programmer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Typing effect for the name
  useEffect(() => {
    if (typedName.length < nameToType.length) {
      const timeoutId = setTimeout(() => {
        setTypedName(nameToType.slice(0, typedName.length + 1));
      }, 150); // Adjust typing speed
      return () => clearTimeout(timeoutId);
    }
  }, [typedName, nameToType]);

  // Mouse move and role cycling
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Role change interval

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(roleInterval);
    };
  }, [roles.length]);

  const cursorVariants = {
    default: {
      x: cursorPosition.x - 12, // Slightly smaller cursor
      y: cursorPosition.y - 12,
      scale: 1,
      backgroundColor: "rgba(0, 150, 255, 0.3)", // Blue color
      border: "1px solid rgba(0, 100, 255, 0.7)",
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
    buttonHover: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(0, 150, 255, 0.5)",
      border: "1px solid rgba(0, 100, 255, 1)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    textHover: {
      // For hovering over text, a subtle underline or different shape
      x: cursorPosition.x - 2,
      y: cursorPosition.y + 10, // Position it like an I-beam or underline
      scale: 1,
      width: "2px", // I-beam like
      height: "20px",
      backgroundColor: "rgba(0, 150, 255, 0.8)",
      border: "none",
      borderRadius: "1px",
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  // Memoize background particles to prevent re-computation on every render
  const backgroundChars = useMemo(() => {
    const chars = "01{}<>/;()*&^%$#@![]?|";
    return [...Array(60)].map((_, i) => ({
      // Increased count for denser feel
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      initialX: getRandom(
        0,
        typeof window !== "undefined" ? window.innerWidth : 1000
      ),
      initialY: getRandom(-200, -50), // Start off-screen top
      size: getRandom(10, 20), // Font size
      duration: getRandom(10, 20), // Fall duration
      delay: getRandom(0, 5), // Staggered start
    }));
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden cursor-none">
      {/* Animated Digital Rain Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {backgroundChars.map((item) => (
          <motion.span
            key={item.id}
            className="absolute text-blue-500 opacity-20 font-mono" // Changed to blue
            style={{ fontSize: `${item.size}px` }}
            initial={{
              x: item.initialX,
              y: item.initialY,
            }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight + 50 : 800, // Fall to bottom
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {item.char}
          </motion.span>
        ))}
      </div>

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
        variants={cursorVariants}
        animate={isHoveringButton ? "buttonHover" : "default"}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative z-10 lg:w-1/2 flex justify-center"
          >
            <div className="relative w-74 h-[380px] md:w-80 md:h-96 lg:w-96 lg:h-[520px] rounded-sm overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
              {/* Replace with your actual image */}
              <Image
                src="/Img/Profile.jpg" // Update this path to your image
                alt="Amartuvshin"
                layout="fill"
                objectFit="cover"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-10 mix-blend-overlay"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 lg:w-1/2"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 font-mono" // Changed to blue gradient
            >
              {typedName}
              <motion.span // Blinking cursor for name typing
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                className="inline-block w-1 h-12 md:h-16 ml-1 bg-blue-400" // Changed to blue
                style={{
                  visibility:
                    typedName.length === nameToType.length
                      ? "visible"
                      : "hidden",
                }} // Show only when typing done
              ></motion.span>
            </motion.h1>

            <div className="text-xl md:text-2xl mb-10 h-16 relative text-gray-300 font-mono">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-start"
                >
                  <span>{`> ${roles[currentRoleIndex]}`}</span>
                  <motion.span // Blinking cursor for roles
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.2,
                    }}
                    className="ml-2 w-0.5 h-6 bg-blue-400" // Changed to blue
                  ></motion.span>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 mb-10 text-lg"
            >
              Computer Science Student at National University of Mongolia (NUM),
              passionate about crafting innovative web and mobile applications
              that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="relative bg-blue-500 text-gray-900 px-8 py-3 rounded-md hover:bg-blue-600 transition duration-300 group overflow-hidden text-lg font-semibold"
                onMouseEnter={() => setIsHoveringButton(true)}
                onMouseLeave={() => setIsHoveringButton(false)}
              >
                <span className="relative z-10">View Projects</span>
              </a>
              <a
                href="#contact"
                className="relative border border-blue-500 text-blue-500 px-8 py-3 rounded-md hover:bg-blue-500 hover:text-gray-900 transition duration-300 group overflow-hidden text-lg font-semibold"
                onMouseEnter={() => setIsHoveringButton(true)}
                onMouseLeave={() => setIsHoveringButton(false)}
              >
                <span className="relative z-10">Contact Me</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-6"
            >
              {[
                { href: "https://github.com/Amraaka", icon: FiGithub },
                {
                  href: "https://www.instagram.com/amara__.b/",
                  icon: FiInstagram,
                },
                {
                  href: "https://www.facebook.com/bokhbat.amaraa/",
                  icon: FiFacebook,
                },
                { href: "mailto:amaraabokhbat@gmail.com", icon: FiMail },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                  whileHover={{ scale: 1.2, y: -2 }}
                  onMouseEnter={() => setIsHoveringButton(true)}
                  onMouseLeave={() => setIsHoveringButton(false)}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <a href="#about" className="animate-bounce">
          <div className="w-8 h-12 border-2 border-blue-500 rounded-full flex justify-center items-start pt-1">
            <motion.span
              className="w-1.5 h-1.5 bg-blue-500 rounded-full"
              animate={{ y: [4, 16, 4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </a>
      </motion.div>
    </div>
  );
};
