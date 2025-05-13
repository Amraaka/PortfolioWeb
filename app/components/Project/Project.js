"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  const projects = [
    {
      title: "Badraa Foundation website",
      slug: "BadraaFoundation",
      description:
        "Comprehensive full-stack e-commerce solution designed to provide a seamless online shopping experience.",
      fullDescription: `A robust e-commerce platform that combines cutting-edge frontend technologies with a powerful backend infrastructure.`,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Redux",
        "Stripe",
      ],
      features: [
        "Responsive User Interface for Desktop and Mobile",
        "Dynamic Product Catalog with Advanced Filtering & Search",
      ],
      githubLink: "https://github.com/[your-username]/ecommerce-platform",
      liveLink: "BadraaFoundation",
    },
    {
      title: "NoteApp",
      slug: "NoteApp",
      description:
        "Advanced data visualization tool for extracting insights from social media platforms.",
      fullDescription: `An innovative analytics dashboard that aggregates and visualizes social media data from various sources.`,
      technologies: [
        "Python",
        "D3.js",
        "Flask",
        "TensorFlow",
        "React",
        "Pandas",
        "Scikit-learn",
      ],
      features: [
        "Real-time Data Visualization with D3.js Charts",
        "Machine Learning-powered Insights",
      ],
      githubLink: "https://github.com/[your-username]/social-media-analytics",
      liveLink: "#",
    },
    {
      title: "Research",
      slug: "Research",
      description:
        "Intelligent conversational interface leveraging machine learning for natural interactions.",
      fullDescription: `A sophisticated chatbot application that uses advanced natural language processing (NLP) techniques.`,
      technologies: [
        "TensorFlow",
        "React",
        "WebSocket",
        "Python",
        "NLP (NLTK, SpaCy)",
        "FastAPI",
        "Redis",
      ],
      features: [
        "Natural Language Processing for Intent Recognition",
        "Context-Aware Responses with Dialogue Management",
      ],
      githubLink: "https://github.com/[your-username]/ai-chatbot",
      liveLink: "#",
    },
    {
      title: "Sonor",
      slug: "Sonor",
      description:
        "Intelligent conversational interface leveraging machine learning for natural interactions.",
      fullDescription: `A sophisticated chatbot application that uses advanced natural language processing (NLP) techniques.`,
      technologies: [
        "TensorFlow",
        "React",
        "WebSocket",
        "Python",
        "NLP (NLTK, SpaCy)",
        "FastAPI",
        "Redis",
      ],
      features: [
        "Natural Language Processing for Intent Recognition",
        "Context-Aware Responses with Dialogue Management",
      ],
      githubLink: "https://github.com/[your-username]/ai-chatbot",
      liveLink: "#",
    },
    {
      title: "Summarizer",
      slug: "Summarizer",
      description:
        "Intelligent conversational interface leveraging machine learning for natural interactions.",
      fullDescription: `A sophisticated chatbot application that uses advanced natural language processing (NLP) techniques.`,
      technologies: [
        "TensorFlow",
        "React",
        "WebSocket",
        "Python",
        "NLP (NLTK, SpaCy)",
        "FastAPI",
        "Redis",
      ],
      features: [
        "Natural Language Processing for Intent Recognition",
        "Context-Aware Responses with Dialogue Management",
      ],
      githubLink: "https://github.com/[your-username]/ai-chatbot",
      liveLink: "#",
    },
    {
      title: "SW",
      slug: "SW",
      description:
        "Intelligent conversational interface leveraging machine learning for natural interactions.",
      fullDescription: `A sophisticated chatbot application that uses advanced natural language processing (NLP) techniques.`,
      technologies: [
        "TensorFlow",
        "React",
        "WebSocket",
        "Python",
        "NLP (NLTK, SpaCy)",
        "FastAPI",
        "Redis",
      ],
      features: [
        "Natural Language Processing for Intent Recognition",
        "Context-Aware Responses with Dialogue Management",
      ],
      githubLink: "https://github.com/[your-username]/ai-chatbot",
      liveLink: "#",
    },
  ];

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

  if (!isMounted) {
    return (
      <section id="projects" className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-500">
            My Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 h-80"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden"
    >
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
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={`/${project.slug}`} passHref>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300 cursor-pointer h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-blue-400 hover:text-blue-300 font-medium flex items-center mt-auto">
                  View Details
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 ml-2" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
