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
  const [isClient, setIsClient] = useState(false);
  const nameToType = "Amartuvshin";
  const [typedName, setTypedName] = useState("");
  const roles = [
    "Computer Science Student",
    "Web Developer",
    "Mobile App Enthusiast",
    "Ready for challenges"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typedName.length < nameToType.length) {
      const timeoutId = setTimeout(() => {
        setTypedName(nameToType.slice(0, typedName.length + 1));
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [typedName, nameToType]);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(roleInterval);
    };
  }, [roles.length, isClient]);

  const cursorVariants = {
    default: {
      x: cursorPosition.x - 12,
      y: cursorPosition.y - 12,
      scale: 1,
      backgroundColor: "rgba(0, 150, 255, 0.3)",
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
      x: cursorPosition.x - 2,
      y: cursorPosition.y + 10,
      scale: 1,
      width: "2px",
      height: "20px",
      backgroundColor: "rgba(0, 150, 255, 0.8)",
      border: "none",
      borderRadius: "1px",
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  const backgroundChars = useMemo(() => {
    const chars = "01{}<>/;()*&^%$#@![]?|";
    const width = isClient ? window.innerWidth : 1000;
    const height = isClient ? window.innerHeight : 800;
    
    return [...Array(60)].map((_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      initialX: getRandom(0, width),
      initialY: getRandom(-200, -50),
      size: getRandom(10, 20),
      duration: getRandom(10, 20),
      delay: getRandom(0, 5),
      targetY: height + 50,
    }));
  }, [isClient]);

  const isTouchDevice = isClient && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  if (!isClient) {
    return (
      <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-20" 
      style={{ cursor: isTouchDevice ? 'auto' : 'none' }}>
      <div className="absolute inset-0 overflow-hidden z-0">
        {backgroundChars.map((item) => (
          <motion.span
            key={item.id}
            className="absolute text-blue-500 opacity-20 font-mono"
            style={{ fontSize: `${item.size}px` }}
            initial={{
              x: item.initialX,
              y: item.initialY,
            }}
            animate={{
              y: item.targetY,
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

      {!isTouchDevice && (
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
          variants={cursorVariants}
          animate={isHoveringButton ? "buttonHover" : "default"}
        />
      )}

      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative z-10 w-full lg:w-1/2 flex justify-center order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-[300px] sm:w-72 sm:h-[340px] md:w-80 md:h-[380px] lg:w-96 lg:h-[520px] rounded-sm overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
              <Image
                src="/Img/Profile.jpg"
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
            className="relative z-10 w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 font-mono">
              {typedName}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                className="inline-block w-1 h-8 sm:h-10 md:h-12 lg:h-16 ml-1 bg-blue-400"
                style={{
                  visibility:
                    typedName.length === nameToType.length
                      ? "visible"
                      : "hidden",
                }}
              ></motion.span>
            </motion.h1>

            <div className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-10 h-12 md:h-16 relative text-gray-300 font-mono">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center lg:justify-start"
                >
                  <span>{`> ${roles[currentRoleIndex]}`}</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0.2,
                    }}
                    className="ml-2 w-0.5 h-5 md:h-6 bg-blue-400"
                  ></motion.span>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 mb-6 md:mb-10 text-base md:text-lg max-w-md mx-auto lg:mx-0"
            >
              Computer Science Student at Mongolian University of Science and Technology (MUST),
              passionate about crafting innovative web and mobile applications
              that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8 md:mb-12 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="relative bg-blue-500 text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-blue-600 transition duration-300 group overflow-hidden text-base sm:text-lg font-semibold"
                onMouseEnter={() => setIsHoveringButton(true)}
                onMouseLeave={() => setIsHoveringButton(false)}
              >
                <span className="relative z-10">View Projects</span>
              </a>
              <a
                href="#contact"
                className="relative border border-blue-500 text-blue-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-blue-500 hover:text-gray-900 transition duration-300 group overflow-hidden text-base sm:text-lg font-semibold"
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
              className="flex space-x-6 justify-center lg:justify-start"
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
                  <social.icon size={24} className="sm:text-2xl md:text-3xl" />
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
        className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center"
      >
        <a href="#about" className="animate-bounce">
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-blue-500 rounded-full flex justify-center items-start pt-1">
            <motion.span
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full"
              animate={{ y: [3, 14, 3] }}
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