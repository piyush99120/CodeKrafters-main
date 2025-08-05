import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MapPin, Clock, Code } from 'lucide-react';

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

const JobCard = ({ 
  title, 
  location, 
  experience, 
  skills, 
  description, 
  requirements, 
  conditions,
  isRemote = false
}: JobCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border border-career-accent bg-career-hover/50 rounded-lg overflow-hidden hover:border-career-text-light transition-colors duration-300"
    >
      {/* Job Header */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left hover:bg-career-accent/30 transition-colors duration-300"
        whileHover={{ backgroundColor: "hsl(var(--career-accent) / 0.3)" }}
        whileTap={{ scale: 0.995 }}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl font-semibold text-career-text">{title}</h3>
              {isRemote && (
                <span className="px-2 py-1 bg-career-accent text-career-text-muted text-xs rounded-md font-medium">
                  Remote
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-6 text-sm text-career-text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>{skills.slice(0, 2).join(', ')}</span>
                {skills.length > 2 && <span>+{skills.length - 2}</span>}
              </div>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-career-text-muted"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-6 border-t border-career-accent">
              {/* Description */}
              <div className="pt-6">
                <p className="career-text-base text-career-text-muted leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-career-text font-medium mb-3">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-career-accent text-career-text-muted text-sm rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-career-text font-medium mb-3">Skill Requirements</h4>
                <ul className="space-y-2">
                  {requirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="career-text-base text-career-text-muted flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-career-text-light rounded-full mt-2 flex-shrink-0" />
                      {req}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Work Conditions */}
              <div>
                <h4 className="text-career-text font-medium mb-3">Work Conditions</h4>
                <ul className="space-y-2">
                  {conditions.map((condition, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="career-text-base text-career-text-muted flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-career-text-light rounded-full mt-2 flex-shrink-0" />
                      {condition}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-career-text text-career-bg px-6 py-3 rounded-md font-medium hover:bg-career-text-muted transition-colors duration-300"
                >
                  Apply for this position
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default JobCard;