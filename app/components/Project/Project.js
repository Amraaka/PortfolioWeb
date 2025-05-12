"use client";
import { motion } from "framer-motion"; // AnimatePresence and useState are no longer needed for modal functionality
// import { useState } from "react"; // Removed
// import { AnimatePresence } from "framer-motion"; // Removed
import Link from "next/link"; // Import Link for navigation

import {
  // CodeBracketIcon, // Not directly used in this component anymore
  // LinkIcon, // Not directly used in this component anymore
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export const ProjectsSection = () => {
  // const [selectedProject, setSelectedProject] = useState(null); // REMOVE: No longer needed for modal

  const projects = [
    {
      title: "E-Commerce Platform",
      slug: "e-commerce-platform", // Added slug
      description:
        "Comprehensive full-stack e-commerce solution designed to provide a seamless online shopping experience.",
      fullDescription: `A robust e-commerce platform that combines cutting-edge frontend technologies with a powerful backend infrastructure.
        The project features user authentication, product Browse, cart management, and secure checkout process.
        Key functionalities include user registration, product listing, detailed product pages, a secure shopping cart,
        and a streamlined checkout process with payment integration placeholders. The admin dashboard provides
        tools for product management, order tracking, and user administration.`,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Redux",
        "Stripe (Integration Placeholder)",
      ],
      features: [
        "Responsive User Interface for Desktop and Mobile",
        "Dynamic Product Catalog with Advanced Filtering & Search",
        "Secure User Authentication and Authorization (JWT)",
        "Shopping Cart with Quantity Management",
        "Integrated Checkout Flow (Dummy Payment Gateway)",
        "Comprehensive Admin Dashboard for Product & Order Management",
        "Review & Rating System",
        "Order History for Users",
      ],
      githubLink: "https://github.com/[your-username]/ecommerce-platform",
      liveLink: "#", // Replace with actual live link
      imageUrl: "https://via.placeholder.com/1200x600?text=E-commerce+Platform",
    },
    {
      title: "Social Media Analytics Dashboard",
      slug: "social-media-analytics-dashboard", // Added slug
      description:
        "Advanced data visualization tool for extracting insights from social media platforms.",
      fullDescription: `An innovative analytics dashboard that aggregates and visualizes social media data from various sources (e.g., Twitter, Instagram, Facebook).
        Utilizes machine learning algorithms (e.g., sentiment analysis, topic modeling) to provide deep insights into user engagement,
        trending topics, and audience demographics. The dashboard is interactive, allowing users to filter data by time, platform, and keywords.`,
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
        "Machine Learning-powered Insights (Sentiment Analysis, Topic Modeling)",
        "Cross-platform Data Aggregation (Twitter API, etc.)",
        "Interactive Dashboards with Filtering and Drill-down Capabilities",
        "Customizable Reporting",
        "User Segmentation and Audience Demographics",
        "Trend Prediction Algorithms",
      ],
      githubLink: "https://github.com/[your-username]/social-media-analytics",
      liveLink: "#", // Replace with actual live link
      imageUrl:
        "https://via.placeholder.com/1200x600?text=Social+Analytics+Dashboard",
    },
    {
      title: "AI-Powered Chatbot",
      slug: "ai-powered-chatbot", // Added slug
      description:
        "Intelligent conversational interface leveraging machine learning for natural interactions.",
      fullDescription: `A sophisticated chatbot application that uses advanced natural language processing (NLP) techniques
        to provide intelligent, context-aware responses across multiple domains. The chatbot is trained on a large dataset
        to understand user queries, extract intent, and provide relevant information or perform actions.
        It features real-time communication via WebSockets and can integrate with various services.`,
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
        "Natural Language Processing for Intent Recognition and Entity Extraction",
        "Context-Aware Responses with Dialogue Management",
        "Multi-domain Conversation Support",
        "Machine Learning Integration for Continuous Improvement",
        "Real-time Communication via WebSockets",
        "Fall-back Mechanisms and Human Handoff",
        "Customizable Responses and Dialogue Flows",
      ],
      githubLink: "https://github.com/[your-username]/ai-chatbot",
      liveLink: "#", // Replace with actual live link
      imageUrl: "https://via.placeholder.com/1200x600?text=AI+Chatbot",
    },
  ];

  // REMOVE: ProjectModal component definition is no longer part of this file.
  // REMOVE: ProjectModal = ({ project, onClose }) => { ... };

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden"
    >
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10"
            initial={{
              // Added window checks for SSR compatibility, though use client is there
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
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
            // Wrap the entire clickable card with Link
            <Link
              key={index}
              href={`/projects/${project.slug}`} // Dynamic link to the new detail page
              passHref // Ensures the href is passed to the underlying <a> element
              className="block" // Make Link behave like a block for proper styling
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition duration-300 cursor-pointer h-full flex flex-col justify-between" // Added flex styles to ensure consistent height
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
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

      {/* REMOVE: The AnimatePresence block for the modal is no longer needed.
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
      */}
    </section>
  );
};
