"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  GlobeAltIcon,
  ServerIcon,
  ServerStackIcon
  
} from "@heroicons/react/24/solid";

import { motion } from "framer-motion";

export default function BadraaFoundation() {
  const [isMounted, setIsMounted] = useState(false);
  const Front = "/Img/BadraaFoundation/Badraa.png";
  const Back = "/Img/BadraaFoundation/Admin.png";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particles = [];
  if (isMounted) {
    for (let i = 0; i < 30; i++) {
      particles.push({
        id: i,
        size: Math.random() * 15 + 5,
        position: {
          x: Math.floor(Math.random() * 100),
          y: Math.floor(Math.random() * 100),
        },
        animation: {
          duration: Math.random() * 10 + 5,
          moveX: Math.random() * 100 - 50,
          moveY: Math.random() * 100 - 50,
        },
      });
    }
  }

  const features = [
    {
      title: "Frontend",
      icon: <GlobeAltIcon className="w-8 h-8 text-blue-400" />,
      technologies: ["React.JS", "shadcn UI", "Tailwind CSS"],
      description:
        "Modern, responsive user interface with elegant components and styling",
    },
    {
      title: "Backend",
      icon: <ServerIcon className="w-8 h-8 text-blue-400" />,
      technologies: ["Node.JS", "Express.JS", "REST API"],
      description:
        "Robust server architecture for handling foundation operations and data",
    },
    {
      title: "Database",
      icon: <ServerStackIcon className="w-8 h-8 text-blue-400" />,
      technologies: ["MongoDB"],
      description:
        "Flexible document database for storing foundation and student information",
    },
  ];

  if (!isMounted) {
    return (
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-500">
            Badraa Foundation
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 h-80"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-500 opacity-10"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.position.x}%`,
              top: `${particle.position.y}%`,
            }}
            animate={{
              y: [0, particle.animation.moveY],
              x: [0, particle.animation.moveX],
              rotate: [0, 360],
            }}
            transition={{
              duration: particle.animation.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
        >
          Badraa Foundation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
        >
          A full-stack foundation introduction website that presents
          organizational updates, events, and student information with both
          client-facing pages and an admin panel for content management.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300"
          >
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={Front}
                alt="Badraa Foundation Client Side"
                width={400}
                height={400}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">
                  Client Side Interface
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300"
          >
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={Back}
                alt="Badraa Foundation Admin Panel"
                width={400}
                height={400}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">
                  Admin Panel
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl font-bold text-center mb-10 text-blue-400"
        >
          Project Features & Technology Stack
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3 text-blue-400">
                  {feature.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {feature.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-400">
            About This Project
          </h2>
          <p className="text-gray-300 mb-4">
            The Badraa Foundation website serves as a comprehensive platform for
            showcasing the foundation's activities, initiatives, and impact. The
            website features both a public-facing interface and a secure admin
            panel that enables foundation staff to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
            <li>Customize homepage content and appearance</li>
            <li>Publish and manage updates about foundation activities</li>
            <li>Organize and promote upcoming events</li>
            <li>Maintain a database of student information and achievements</li>
            <li>Showcase foundation projects and initiatives</li>
          </ul>
          <p className="text-gray-300">
            The combination of React.JS for the frontend, Node.JS with Express
            for the backend, and MongoDB for the database provides a flexible
            and scalable architecture that can grow with the foundation's needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
