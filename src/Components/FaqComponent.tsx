import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in premium web design, interactive animations, and brand storytelling. Our services include full website development, motion design, and creative direction for digital experiences."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timelines vary based on complexity, but most projects are completed within 8-12 weeks. We'll provide a detailed schedule after our initial consultation."
    },
    {
      question: "What makes your approach unique?",
      answer: "We combine cinematic storytelling with cutting-edge web technologies to create immersive experiences that captivate audiences and drive engagement."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We've collaborated with brands across 15 countries and offer flexible scheduling for different time zones."
    },
    {
      question: "What's your revision policy?",
      answer: "We include 3 rounds of revisions in all our packages because we believe in perfecting every detail until you're thrilled with the results."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about our creative process
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-6 text-left rounded-xl transition-all ${activeIndex === index ? 'bg-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg md:text-xl font-medium pr-4">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiMinus className="flex-shrink-0 text-blue-500" />
                ) : (
                  <FiPlus className="flex-shrink-0 text-gray-500" />
                )}
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
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
                        height: { duration: 0.2 },
                        opacity: { duration: 0.1 }
                      }
                    }}
                    className="bg-white rounded-b-xl overflow-hidden"
                  >
                    <div className="p-6 pt-2 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-medium mb-6">Still have questions?</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg"
          >
            <Link to={"/contact"}>
            Contact Our Team
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FaqComponent;