import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
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
      value: "Remote / Global",
      href: "#"
    }
  ];

  return (
    <section className="py-20 bg-career-bg border-t border-career-accent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="career-heading-xl text-career-text mb-4">
                Get in touch
              </h2>
              <p className="career-text-lg text-career-text-muted leading-relaxed">
                Ready to join our team? We&apos;d love to hear from you. Reach out and 
                let&apos;s discuss how we can work together to create amazing digital experiences.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group hover:text-career-text transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-career-accent rounded-lg flex items-center justify-center group-hover:bg-career-text-light transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-career-text-muted group-hover:text-career-bg" />
                    </div>
                    <div>
                      <p className="text-sm text-career-text-light font-medium">{method.label}</p>
                      <p className="career-text-base text-career-text-muted group-hover:text-career-text">
                        {method.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-career-text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Quick Application */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-career-hover/50 border border-career-accent rounded-lg p-8"
          >
            <h3 className="career-heading-lg text-career-text mb-6">
              Quick Application
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-career-text-muted mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-career-accent border border-career-accent rounded-md text-career-text placeholder-career-text-light focus:outline-none focus:ring-2 focus:ring-career-text-light focus:border-transparent transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-career-text-muted mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-career-accent border border-career-accent rounded-md text-career-text placeholder-career-text-light focus:outline-none focus:ring-2 focus:ring-career-text-light focus:border-transparent transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-career-text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-career-accent border border-career-accent rounded-md text-career-text placeholder-career-text-light focus:outline-none focus:ring-2 focus:ring-career-text-light focus:border-transparent transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-career-text-muted mb-2">
                  Position of Interest
                </label>
                <select className="w-full px-4 py-3 bg-career-accent border border-career-accent rounded-md text-career-text focus:outline-none focus:ring-2 focus:ring-career-text-light focus:border-transparent transition-colors duration-300">
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>UI/UX Designer</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-career-text-muted mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-career-accent border border-career-accent rounded-md text-career-text placeholder-career-text-light focus:outline-none focus:ring-2 focus:ring-career-text-light focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell us about yourself and why you&apos;d like to join our team..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-career-text text-career-bg py-3 rounded-md font-medium hover:bg-career-text-muted transition-colors duration-300"
              >
                Send Application
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-career-accent text-center"
        >
          <p className="career-text-base text-career-text-light">
            © 2024 VideInfra. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;