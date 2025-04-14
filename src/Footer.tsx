import  { useState } from 'react';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const footerLinks = [
    {
      title: 'Resources',
      links: [
        'Help',
        'Gift Cards',
        'Find a Store',
        'Membership',
        'Nike Journal',
        'Site Feedback'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Nike',
        'News',
        'Careers',
        'Investors',
        'Purpose',
        'Sustainability'
      ]
    },
    {
      title: 'Promotions & Discounts',
      links: [
        'Student',
        'Military',
        'Teacher',
        'First Responders & Medical Professionals',
        'Birthday'
      ]
    }
  ];

  const bottomLinks = [
    'Guides',
    'Terms of Sale',
    'Terms of Use',
    'Nike Privacy Policy',
    'Your Privacy Choices',
    'CA Supply Chains Act'
  ];

  const toggleSection = (index: number) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  const isSectionExpanded = (index: number) => {
    return expandedSections.includes(index) || window.innerWidth >= 768;
  };

  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 
                className="text-lg font-medium mb-4 flex items-center justify-between md:justify-start cursor-pointer md:cursor-auto"
                onClick={() => window.innerWidth < 768 && toggleSection(index)}
              >
                {section.title}
                <motion.div
                  animate={{
                    rotate: isSectionExpanded(index) ? 180 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden"
                >
                  <FiChevronDown />
                </motion.div>
              </h3>
              
              <AnimatePresence>
                {(isSectionExpanded(index)) && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.1 }
                      }
                    }}
                    className="overflow-hidden space-y-2"
                  >
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.1 + (linkIndex * 0.03) }
                        }}
                      >
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">United States</span>
              <FiExternalLink className="w-4 h-4" />
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Nike, Inc. All Rights Reserved
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {bottomLinks.map((link, index) => (
              <a 
                key={index} 
                href="#"
                className="text-gray-400 hover:text-white text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;