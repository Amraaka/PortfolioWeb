"use client";
import { motion } from "framer-motion";
import {
  UserCircleIcon,
  CodeBracketSquareIcon,
  AcademicCapIcon,
  CpuChipIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

export const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 0px 25px -5px rgba(0, 150, 255, 0.3)", // Blueish glow
      borderColor: "rgba(0, 150, 255, 0.7)", // Accent border on hover
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const coreValuesData = [
    {
      icon: LightBulbIcon,
      title: "Innovative Drive",
      description:
        "Driven by a passion for innovation, I continuously explore emerging technologies to engineer impactful and future-forward solutions.",
    },
    {
      icon: CodeBracketSquareIcon,
      title: "Full-Spectrum Development",
      description:
        "Expertise in architecting robust, scalable full-stack applications, from intuitive front-end interfaces to efficient back-end systems.",
    },
    {
      icon: AcademicCapIcon,
      title: "Scholarly Foundation",
      description:
        "Solid Computer Science grounding from Minia University of Science and Technology, specializing in modern software engineering principles.",
    },
    {
      icon: CpuChipIcon,
      title: "Strategic Problem-Solving",
      description:
        "Adept at dissecting complex challenges, devising algorithmic strategies, and implementing elegant, high-performance code.",
    },
  ];

  const keySkillsList = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React | Next.js",
    "Node.js | Express",
    "Python | Django",
    "RESTful APIs",
    "GraphQL",
    "MongoDB | PostgreSQL",
    "Docker | Kubernetes",
    "AWS | GCP",
    "Git | CI/CD",
    "Agile Methodologies",
  ];

  const backgroundChars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    char:
      Math.random() > 0.5
        ? Math.random() > 0.5
          ? "{"
          : "}"
        : Math.random() > 0.5
        ? "0"
        : "1",
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    fontSize: Math.random() * 8 + 8,
  }));

  return (
    <motion.section
      id="about"
      className="bg-gray-900 text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {backgroundChars.map((item) => (
          <motion.span
            key={item.id}
            className="absolute text-blue-500/20 font-mono" // Changed to blue
            style={{
              left: `${item.x}vw`,
              top: `${item.y}vh`,
              fontSize: `${item.fontSize}px`,
            }}
            initial={{
              y: item.y > 50 ? item.fontSize * -1 : "100vh",
              opacity: 0,
            }}
            animate={{
              y: item.y > 50 ? "100vh" : item.fontSize * -1,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {item.char}
          </motion.span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-500 font-mono">
            {" "}
            // Changed to blue gradient // About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A dedicated Computer Science professional from{" "}
            <strong className="text-blue-400">
              Minia University of Science and Technology (MUST)
            </strong>
            , // Changed to blue I specialize in architecting and deploying
            robust, scalable digital solutions. My passion lies in transforming
            complex problems into elegant user experiences through clean code
            and innovative technology.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {coreValuesData.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-lg border border-slate-700 transition-all duration-300 flex flex-col"
            >
              <value.icon className="w-10 h-10 mb-5 text-blue-400" />{" "}
              {/* Changed to blue */}
              <h3 className="text-xl font-semibold mb-3 text-gray-100">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-2xl border border-slate-700"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400 font-mono">
            {" "}
            // Changed to blue &lt;MyTechnicalStack /&gt;
          </h3>
          <div className="mb-6">
            <h4 className="font-semibold text-lg text-gray-200 mb-1">
              Education:
            </h4>
            <p className="text-gray-400">
              B.Sc. Computer Science - Minia University of Science and
              Technology (MUST)
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Focus: Web & Mobile Application Development, Software
              Architecture.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-200 mb-3">
              Core Proficiencies:
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {keySkillsList.map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-gray-700/50 text-blue-300 px-3 py-1.5 rounded-md text-xs sm:text-sm font-mono border border-gray-600 cursor-default" // Changed to blue
                  whileHover={{
                    backgroundColor: "rgba(0, 150, 255, 0.1)", // blue with alpha
                    borderColor: "rgba(0, 150, 255, 0.5)",
                    scale: 1.05,
                    boxShadow: "0 0 8px rgba(0, 150, 255, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
