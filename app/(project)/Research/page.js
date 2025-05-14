"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";

import { motion } from "framer-motion";

export default function BadraaFoundation() {
  const [isMounted, setIsMounted] = useState(false);
  const Certificate = "/Img/Research/Urgumjlul-1.png";
  const Article = "/Img/Research/Article.png";
  const GettingCertificate = "/Img/Research/ErdemShinjilgeePic.jpg";
  const TextSumWeb = "/Img/MglSum/Home.png";

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
      icon: <DocumentTextIcon className="w-8 h-8 text-blue-400" />,
      technologies: ["React.JS", "Tailwind CSS", "PDF/DOC Processing"],
      description:
        "User-friendly interface for uploading and processing Mongolian text documents",
    },
    {
      title: "Backend",
      icon: <CodeBracketIcon className="w-8 h-8 text-blue-400" />,
      technologies: ["Python", "NLP Models", "REST API"],
      description:
        "Advanced text processing pipeline for Mongolian language summarization",
    },
    {
      title: "Research",
      icon: <BeakerIcon className="w-8 h-8 text-blue-400" />,
      technologies: [
        "Algorithm Comparison",
        "Performance Analysis",
        "Custom Enhancements",
      ],
      description:
        "Comparative study of summarization algorithms with novel improvements for Mongolian text",
    },
  ];

  if (!isMounted) {
    return (
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-500">
            Badraa Foundation Research
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
          Mongolian Text Summarization Research
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-8"
        >
          <p className="mb-4">
            Award-winning research on effective Mongolian text summarization
            algorithms that help readers quickly understand main points without
            reading lengthy texts.
          </p>
          <div className="inline-flex items-center justify-center bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
            <AcademicCapIcon className="w-5 h-5 mr-2 text-blue-400" />
            <span className="text-sm md:text-base">
              2nd Place Winner - "Мэдээлэл, Холбооны салбарын хөгжилд бидний гүйцэтгэх үүрэг-2025 "
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="relative rounded-xl overflow-hidden mb-8">
            <Image
              src={GettingCertificate}
              alt="Receiving Research Award Certificate"
              width={400}
              height={400}
              className="w-full object-cover h-80"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
              <h3 className="text-lg font-semibold text-white">
                “Мэдээлэл, Холбооны салбарын хөгжилд бидний гүйцэтгэх үүрэг-2025” 
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative h-180 overflow-hidden rounded-xl">
              <Image
                src={Certificate}
                alt="Research Certificate"
                width={400}
                height={800}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">
                  Award Certificate
                </h3>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src={Article}
                alt="Research Article"
                width={400}
                height={800}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">
                  Research Publication
                </h3>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={TextSumWeb}
              alt="Mongolian Text Summarization Web Application"
              width={800}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
              <h3 className="text-lg font-semibold text-white">
                Text Summarization Web Application
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl font-bold text-center mb-10 text-blue-400"
        >
          Research Components & Technology Stack
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
            About This Research
          </h2>
          <p className="text-gray-300 mb-4">
            Our research focuses on developing efficient algorithms for
            summarizing Mongolian texts, addressing the unique linguistic
            challenges of the language while maintaining the essence of the
            original content. The project won 2nd place at the prestigious "Доктор (Ph.D), профессор Г.Цогбадрахын нэрэмжит “Мэдээлэл, Холбооны салбарын хөгжилд бидний гүйцэтгэх үүрэг-2025” сэдэвт хаврын улирлын бакалавр оюутны эрдэм шинжилгээний хурал"
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
            <li>
              Comprehensive comparison of existing summarization algorithms
            </li>
            <li>
              Novel improvements specifically tailored for Mongolian language
            </li>
            <li>
              Performance metrics analysis on various text types and lengths
            </li>
            <li>
              Development of a practical web application implementing research
              findings
            </li>
            <li>
              User testing to validate summarization quality and usefulness
            </li>
            <li>
              Documentation and publication of research methodology and results
            </li>
          </ul>
          <p className="text-gray-300">
            The web application we developed demonstrates our research findings
            in practice, allowing users to upload Mongolian texts in various
            formats (PDF, DOC) and receive high-quality summaries. The frontend
            is built with React.js and Tailwind CSS for an intuitive user
            experience, while the backend leverages Python's natural language
            processing capabilities to implement our optimized summarization
            algorithms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
