"use client";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Wrench,
  Cloud,
  Brain,
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Redux", level: 75 },
      ],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "GraphQL", level: 70 },
        { name: "REST APIs", level: 85 },
      ],
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Database,
      title: "Databases & ORM",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "Mongoose", level: 75 },
        { name: "Prisma", level: 65 },
        { name: "SQL", level: 75 },
      ],
      color: "from-green-500 to-green-700",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 },
        { name: "Git", level: 85 },
        { name: "CI/CD", level: 65 },
        { name: "Kubernetes", level: 60 },
      ],
      color: "from-red-500 to-red-700",
    },
    {
      icon: Wrench,
      title: "Development Tools",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Webpack", level: 70 },
        { name: "Postman", level: 80 },
        { name: "Jira", level: 65 },
      ],
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Brain,
      title: "Soft Skills & Methodologies",
      skills: [
        { name: "Agile", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Quick Learning", level: 90 },
      ],
      color: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden"
    >
      {/* Subtle Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
        >
          My Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon
                  className={`w-12 h-12 mr-4 bg-gradient-to-r ${category.color} text-white p-2 rounded-lg`}
                />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mr-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: skillIndex * 0.1,
                        }}
                        className={`bg-gradient-to-r ${category.color} h-2.5 rounded-full`}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300 w-16">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gray-800 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            Continuous Learning
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Technology evolves rapidly, and I'm committed to continuous learning
            and staying updated with the latest development trends, frameworks,
            and best practices. My passion for technology drives me to
            constantly expand my skill set and explore new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
