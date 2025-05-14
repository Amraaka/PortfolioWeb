"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Facebook,
  Mail,
  Send,
  MapPin,
  Phone,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);

    // Set dimensions only after component is mounted
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Add resize listener
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Amraaka",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/amara__.b/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/bokhbat.amaraa/",
      label: "Facebook",
    },
    {
      icon: Mail,
      href: "mailto:amaraabokhbat@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Static footer content rendered during SSR
  if (!mounted) {
    return (
      <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Simple loading or static version */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Amara B.
              </h3>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Amara B.</h3>
            <p className="text-gray-400 mb-6">
              Passionate full-stack developer with expertise in creating
              scalable web applications and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <Send size={14} className="mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-400">Mongolia, UB</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-blue-400 mt-1 mr-3" />
                <a
                  href="mailto:amaraabokhbat@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  amaraabokhbat@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-blue-400 mt-1 mr-3" />
                <a
                  href="tel:+201234567890"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +976 96068185
                </a>
              </li>
              <li className="flex items-start">
                <Github size={18} className="text-blue-400 mt-1 mr-3" />
                <a
                  href="tel:+201234567890"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  github.com/Amraaka
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Amara B. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
