'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

// Job Card Component
interface JobCardProps {
  title: string;
  location: string;
  experience: string;
  skills: string[];
  description: string;
  requirements: string[];
  conditions: string[];
  isRemote?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  location,
  experience,
  skills,
  description,
  requirements,
  conditions,
  isRemote = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="border border-gray-800 rounded-lg bg-gray-900/50 overflow-hidden hover:border-gray-700 transition-all duration-300"
    >
      {/* Header */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              {isRemote && (
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md font-medium">
                  Remote
                </span>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {location}
              </span>
              <span>{experience}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.slice(0, 4).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 4 && (
                <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                  +{skills.length - 4} more
                </span>
              )}
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 mt-1"
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>
      </div>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-gray-800">
          <div className="pt-6 space-y-6">
            {/* Description */}
            <div>
              <h4 className="font-medium text-white mb-2">About this role</h4>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>

            {/* All Skills */}
            <div>
              <h4 className="font-medium text-white mb-2">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h4 className="font-medium text-white mb-3">Requirements</h4>
              <ul className="space-y-2">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions */}
            <div>
              <h4 className="font-medium text-white mb-3">What we offer</h4>
              <ul className="space-y-2">
                {conditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                    {condition}
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Apply for this position
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Careers Page Component
const CareersPage: React.FC = () => {
  const jobListings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      experience: "3+ years",
      skills: ["JavaScript", "ES6", "HTML", "SASS/SCSS", "jQuery", "GIT"],
      isRemote: true,
      description: "We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for creating clean and reusable code for award-winning websites with a stack focusing on high-end animations and maintainability based on JQuery, ES6, and CSS.",
      requirements: [
        "Good knowledge of JavaScript (ES6), CSS, and HTML",
        "Previous experience with jQuery library. Bonus: jQuery plugin development experience",
        "Experience in the development of CSS-based animations",
        "Proper use of SCSS variables, imports and exports, and mixins",
        "Understanding of project bundling with Gulp",
        "Knowledge of Git development workflow",
        "Ability to install local web server powered by Nginx/Apache, PHP, and MySQL"
      ],
      conditions: [
        "Remote work flexibility",
        "Competitive salary package",
        "Professional development opportunities",
        "Friendly and collaborative team environment",
        "Creative freedom in project execution",
        "Modern tech stack and tools"
      ]
    },
    {
      title: "Backend Developer",
      location: "Remote",
      experience: "4+ years",
      skills: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS", "REST APIs"],
      isRemote: true,
      description: "Join our backend team to build robust, scalable server-side applications that power our cutting-edge web experiences. You'll work with modern technologies to create efficient APIs, manage databases, and ensure optimal performance.",
      requirements: [
        "Strong proficiency in Node.js and Python",
        "Experience with relational databases (PostgreSQL, MySQL)",
        "Knowledge of RESTful API design and implementation",
        "Understanding of containerization with Docker",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Familiarity with microservices architecture",
        "Knowledge of CI/CD pipelines and DevOps practices"
      ],
      conditions: [
        "Full remote position",
        "Competitive salary with equity options",
        "Health and wellness benefits",
        "Learning and development budget",
        "Flexible working hours",
        "Annual team retreats"
      ]
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      experience: "3+ years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Wireframing"],
      isRemote: true,
      description: "We're seeking a creative UI/UX Designer to help craft beautiful, intuitive user experiences for our digital products. You'll collaborate closely with our development team to bring innovative design concepts to life.",
      requirements: [
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio showcasing UI/UX design work",
        "Experience with user research and usability testing",
        "Knowledge of design systems and component libraries",
        "Understanding of responsive design principles",
        "Ability to create interactive prototypes",
        "Excellent communication and collaboration skills"
      ],
      conditions: [
        "Remote-first culture",
        "Competitive design tools budget",
        "Creative freedom and autonomy",
        "Mentorship opportunities",
        "Conference and workshop attendance",
        "Collaborative design process"
      ]
    },
    {
      title: "Full Stack Developer",
      location: "Remote",
      experience: "5+ years",
      skills: ["React", "Node.js", "TypeScript", "GraphQL", "MongoDB", "Next.js"],
      isRemote: true,
      description: "We're looking for an experienced Full Stack Developer to take ownership of complete features from conception to deployment. You'll work across our entire technology stack, building both client-facing interfaces and robust backend systems.",
      requirements: [
        "Expert knowledge of React and modern JavaScript/TypeScript",
        "Strong backend development skills with Node.js",
        "Experience with GraphQL and REST API development",
        "Proficiency with both SQL and NoSQL databases",
        "Understanding of server-side rendering and Next.js",
        "Knowledge of testing frameworks and best practices",
        "Experience with agile development methodologies"
      ],
      conditions: [
        "Senior-level compensation package",
        "Technical leadership opportunities",
        "Flexible project assignments",
        "Open source contribution time",
        "Hardware and software allowances",
        "Professional growth support"
      ]
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      experience: "4+ years",
      skills: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker", "Monitoring"],
      isRemote: true,
      description: "Join our infrastructure team to build and maintain the systems that power our applications at scale. You'll be responsible for creating robust deployment pipelines, monitoring system performance, and ensuring high availability across our services.",
      requirements: [
        "Strong experience with AWS cloud services",
        "Proficiency in container orchestration with Kubernetes",
        "Knowledge of Infrastructure as Code (Terraform, CloudFormation)",
        "Experience building and maintaining CI/CD pipelines",
        "Understanding of monitoring and logging solutions",
        "Scripting skills in Python, Bash, or similar languages",
        "Knowledge of security best practices and compliance"
      ],
      conditions: [
        "Cutting-edge technology stack",
        "On-call compensation and support",
        "Cloud certification reimbursement",
        "Innovation time for personal projects",
        "Distributed team collaboration",
        "Performance-based bonuses"
      ]
    },
    {
      title: "Product Manager",
      location: "Remote",
      experience: "6+ years",
      skills: ["Product Strategy", "User Analytics", "A/B Testing", "Roadmapping", "Stakeholder Management"],
      isRemote: true,
      description: "We're seeking an experienced Product Manager to drive the vision and strategy for our digital products. You'll work closely with design, engineering, and business teams to define product requirements, prioritize features, and ensure we're building solutions that delight our users.",
      requirements: [
        "6+ years of product management experience",
        "Strong analytical and data interpretation skills",
        "Experience with user research and A/B testing",
        "Knowledge of product analytics tools (Mixpanel, Amplitude, etc.)",
        "Excellent communication and presentation skills",
        "Experience working with cross-functional teams",
        "Background in web technologies and digital products"
      ],
      conditions: [
        "Strategic leadership role",
        "Cross-functional collaboration",
        "Product development budget oversight",
        "User research and travel opportunities",
        "Executive mentorship programs",
        "Equity participation in company growth"
      ]
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "careers@videinfra.com",
      href: "mailto:careers@videinfra.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote First",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      {/* REMOVE THIS BLOCK:
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">VideInfra</div>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#vacancies" className="hover:text-gray-300 transition-colors">Vacancies</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>
      */}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Hero Text */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white">
                  Career
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl text-white font-light leading-tight">
                  Join our team
                  <br />
                  <span className="text-gray-400">and create great products</span>
                </h2>
              </motion.div>
            </div>

            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-400 leading-relaxed">
                Delivering great work is the heart of what we do at VideInfra. We push a 
                bar higher with every project to create new challenges to stay on top of 
                our craft. We value trust, freedom, passion, and warm and friendly 
                relationships and enjoy our time together. If this resonates with your 
                vision, let&apos;s chat about how we can work together. Get in touch today!
              </p>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#vacancies"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-gray-500 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm mb-2">Scroll down</span>
              <ChevronDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section id="vacancies" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Vacancies</h2>
              <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md font-medium">
                Remote
              </span>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl">
              Join our remote-first team and help us create cutting-edge digital experiences 
              that push the boundaries of web development.
            </p>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <JobCard {...job} />
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 border border-gray-800 rounded-lg bg-gray-900/30"
          >
            <p className="text-gray-400 leading-relaxed">
              Prior similar work experience would be an advantage. We will gladly help junior 
              developer boost their skills and gather experience. At the same time, we will be 
              happy to work with a middle-level developer. The critical requirement is that you 
              share a passion for creative front-end and want to develop websites similar to ours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h2>
                <p className="text-gray-400 leading-relaxed">
                  Ready to join our team? We&apos;d love to hear from you. Send us a message and we&apos;ll 
                  respond as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-900/50 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                      <method.icon className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{method.label}</div>
                      <div className="text-white font-medium">{method.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Quick Application</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Position of Interest"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors resize-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Send Application
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800"
        >
          <div className="text-center text-gray-400">
            <p>&copy; 2024 VideInfra. All rights reserved.</p>
          </div>
        </motion.div> */}
      </section>
    </div>
  );
};

export default CareersPage;