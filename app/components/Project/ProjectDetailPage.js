"use client"; // This is a client component

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  LinkIcon,
  ArrowLeftIcon, // Added for a back button
} from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation"; // For App Router (use 'next/router' for Pages Router)

// --- Project Data (Ideally fetched from API/DB in a real app) ---
// For this example, we'll reuse the projects array.
const projectsData = [
  {
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description:
      "Comprehensive full-stack e-commerce solution designed to provide a seamless online shopping experience.",
    fullDescription: `A robust e-commerce platform that combines cutting-edge frontend technologies with a powerful backend infrastructure.
        The project features user authentication, product Browse, cart management, and secure checkout process.
        Key functionalities include user registration, product listing, detailed product pages, a secure shopping cart,
        and a streamlined checkout process with payment integration placeholders. The admin dashboard provides
        tools for product management, order tracking, and user administration.`,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe (Integration Placeholder)"],
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
    slug: "social-media-analytics-dashboard",
    description:
      "Advanced data visualization tool for extracting insights from social media platforms.",
    fullDescription: `An innovative analytics dashboard that aggregates and visualizes social media data from various sources (e.g., Twitter, Instagram, Facebook).
        Utilizes machine learning algorithms (e.g., sentiment analysis, topic modeling) to provide deep insights into user engagement,
        trending topics, and audience demographics. The dashboard is interactive, allowing users to filter data by time, platform, and keywords.`,
    technologies: ["Python", "D3.js", "Flask", "TensorFlow", "React", "Pandas", "Scikit-learn"],
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
    imageUrl: "https://via.placeholder.com/1200x600?text=Social+Analytics+Dashboard",
  },
  {
    title: "AI-Powered Chatbot",
    slug: "ai-powered-chatbot",
    description:
      "Intelligent conversational interface leveraging machine learning for natural interactions.",
    fullDescription: `A sophisticated chatbot application that uses advanced natural language processing (NLP) techniques
        to provide intelligent, context-aware responses across multiple domains. The chatbot is trained on a large dataset
        to understand user queries, extract intent, and provide relevant information or perform actions.
        It features real-time communication via WebSockets and can integrate with various services.`,
    technologies: ["TensorFlow", "React", "WebSocket", "Python", "NLP (NLTK, SpaCy)", "FastAPI", "Redis"],
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
// --- End Project Data ---


export default function ProjectDetailPage() {
  const params = useParams(); // Get dynamic parameters from the URL
  const router = useRouter(); // Get router instance for navigation
  const { slug } = params; // Destructure the 'slug' from params

  // In a real application, you would fetch this data from an API:
  // const { data: project, isLoading, error } = useSWR(`/api/projects/${slug}`, fetcher);
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    // Handle case where project is not found (e.g., 404 page)
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-500">Project Not Found</h1>
          <p className="text-lg text-gray-300">The project you are looking for does not exist.</p>
          <motion.button
            onClick={() => router.back()} // Go back to the previous page
            className="mt-8 flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Go Back
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 min-h-screen text-white p-4 sm:p-8 lg:p-12"
    >
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Back Button */}
        <div className="p-4 md:p-6 flex justify-end">
          <motion.button
            onClick={() => router.back()}
            className="bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Go back"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Project Image */}
        <div className="w-full h-64 md:h-[450px] overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="p-6 md:p-8 lg:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-blue-400 leading-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-300 text-lg mb-8 leading-relaxed"
          >
            {project.fullDescription}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-5 text-blue-300 flex items-center">
                <CodeBracketIcon className="w-6 h-6 mr-3 text-blue-400" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full text-sm font-medium shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-5 text-blue-300 flex items-center">
                {/* Custom icon for features list (or use a built-in one like ListBulletIcon) */}
                <svg
                  className="w-6 h-6 mr-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <svg
                      className="w-5 h-5 mt-1 mr-2 text-blue-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center"
          >
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition-colors duration-300 shadow-lg"
              >
                <LinkIcon className="w-5 h-5 mr-3" />
                GitHub Repository
              </a>
            )}
            {project.liveLink && project.liveLink !== "#" && ( // Only show if liveLink is not a placeholder
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors duration-300 shadow-lg"
              >
                {/* Custom icon for external link */}
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
                View Live Demo
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}