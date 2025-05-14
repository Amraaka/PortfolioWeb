"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  GlobeAltIcon,
  ServerIcon,
  ServerStackIcon,
  BrainIcon,
} from "@heroicons/react/24/solid";

import { motion } from "framer-motion";

export default function MemoMindProject() {
  const [isMounted, setIsMounted] = useState(false);
  const Desktop = "/Img/MemoMind/MemoMindDesk.png";
  const MobileHome = "/Img/MemoMind/MemoMindMobHome.png";
  const MobileChange = "/Img/MemoMind/MobChange.png";

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
      technologies: ["Next.JS", "Tailwind CSS", "Axios", "Lucide React"],
      description:
        "Modern, responsive user interface with elegant components and styling",
    },
    {
      title: "Backend",
      icon: <ServerIcon className="w-8 h-8 text-blue-400" />,
      technologies: ["Spring Boot", "RESTful API"],
      description:
        "Robust server architecture for handling note management and AI integration",
    },
    {
      title: "Database",
      icon: <ServerStackIcon className="w-8 h-8 text-blue-400" />,
      technologies: ["PostgreSQL"],
      description:
        "Relational database for securely storing user notes and application data",
    },
  ];

  if (!isMounted) {
    return (
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-500">
            MemoMind
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
            className="absolute rounded-full bg-purple-500 opacity-10"
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
          className="inline-flex items-center text-blue-400 hover:text-purple-300 mb-8"
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
          MemoMind
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
        >
          An AI-assisted smart note-taking application that empowers users to
          create, organize, and enhance their notes with Gemini 2.0 flash AI
          integration, offering intelligent suggestions and insights.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" md:col-span-2"
          >
            <div className="relative h-64 md:h-130 w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={Desktop}
                alt="MemoMind Desktop Interface"
                width={800}
                height={400}
                className="w-full h-full object-contain"
                style={{ objectPosition: "top" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">
                  Desktop Interface
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1 flex flex-col gap-4"
          >
            <div className=" flex-1">
              <div className="relative h-64 md:h-120 w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={MobileHome}
                  alt="MemoMind Mobile Home"
                  width={300}
                  height={800}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Mobile Home
                  </h3>
                </div>
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
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition duration-300"
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
            MemoMind is a comprehensive note-taking application enhanced with
            artificial intelligence capabilities. It provides users with a smart
            platform to create, organize, edit, and delete notes with the added
            benefit of AI-powered assistance through Gemini 2.0 Flash
            integration.
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
            <li>Create, read, update, and delete notes (CRUD functionality)</li>
            <li>AI assistance for content enhancement and suggestions</li>
            <li>
              Fully responsive design that works seamlessly across all devices
            </li>
            <li>Intuitive and user-friendly interface</li>
          </ul>
          <p className="text-gray-300">
            The combination of Next.JS and Tailwind CSS for the frontend, Spring
            Boot for the backend API, and PostgreSQL for the database creates a
            robust architecture that ensures both performance and scalability.
            The integration with Gemini 2.0 Flash AI brings intelligent
            note-taking capabilities that help users maximize their
            productivity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
