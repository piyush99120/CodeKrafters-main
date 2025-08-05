import { motion } from 'framer-motion';
import JobCard from './JobCard';

const VacanciesSection = () => {
  const jobListings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      experience: "3+ years",
      skills: ["JavaScript", "ES6", "HTML", "SASS/SCSS", "jQuery", "GIT"],
      isRemote: true,
      description: "We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for creating clean and reusable code for award-winning websites with a stack focusing on high-end animations and maintainability based on JQuery, ES6, and CSS. We have exciting tasks for various skill levels and will support your growth and development in a friendly and result-oriented environment.",
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
      description: "Join our backend team to build robust, scalable server-side applications that power our cutting-edge web experiences. You'll work with modern technologies to create efficient APIs, manage databases, and ensure optimal performance. We're looking for someone passionate about clean code architecture and system design who can contribute to our mission of delivering exceptional digital solutions.",
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
      description: "We're seeking a creative UI/UX Designer to help craft beautiful, intuitive user experiences for our digital products. You'll collaborate closely with our development team to bring innovative design concepts to life, conduct user research, and ensure our interfaces are both visually stunning and highly functional. Your work will directly impact how users interact with our award-winning websites and applications.",
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
      description: "We're looking for an experienced Full Stack Developer to take ownership of complete features from conception to deployment. You'll work across our entire technology stack, building both client-facing interfaces and robust backend systems. This role offers the opportunity to architect solutions, mentor junior developers, and drive technical decisions that shape our products' future.",
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
      description: "Join our infrastructure team to build and maintain the systems that power our applications at scale. You'll be responsible for creating robust deployment pipelines, monitoring system performance, and ensuring high availability across our services. We're looking for someone who thrives on automation, loves solving complex problems, and can help us scale our infrastructure efficiently.",
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
      description: "We're seeking an experienced Product Manager to drive the vision and strategy for our digital products. You'll work closely with design, engineering, and business teams to define product requirements, prioritize features, and ensure we're building solutions that delight our users and drive business growth. This role requires strong analytical skills and the ability to make data-driven decisions.",
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

  return (
    <section id="vacancies" className="py-20 bg-career-bg">
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
            <h2 className="career-heading-xl text-career-text">Vacancies</h2>
            <span className="px-3 py-1 bg-career-accent text-career-text-muted text-sm rounded-md font-medium">
              Remote
            </span>
          </div>
          <p className="career-text-lg text-career-text-muted max-w-3xl">
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
          className="mt-12 p-6 border border-career-accent rounded-lg bg-career-hover/30"
        >
          <p className="career-text-base text-career-text-muted leading-relaxed">
            Prior similar work experience would be an advantage. We will gladly help junior 
            developer boost their skills and gather experience. At the same time, we will be 
            happy to work with a middle-level developer. The critical requirement is that you 
            share a passion for creative front-end and want to develop websites similar to ours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VacanciesSection;