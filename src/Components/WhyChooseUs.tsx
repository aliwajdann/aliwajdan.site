import { motion } from "framer-motion";
import { FaCheckCircle, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const points = [
  {
    icon: <FaRocket size={32} />,
    title: "Performance First",
    description: "We craft lightning-fast experiences optimized for every device.",
  },
  {
    icon: <FaLightbulb size={32} />,
    title: "Creative Minds",
    description: "Innovative designs that break the mold and stand out.",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Client-Centric",
    description: "Your satisfaction is our top priority—always.",
  },
  {
    icon: <FaCheckCircle size={32} />,
    title: "Proven Results",
    description: "Trusted by businesses to deliver results that matter.",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      className="bg-gray-950 text-white px-4 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl text-center shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="mb-4 text-indigo-400 flex justify-center">{point.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{point.title}</h4>
            <p className="text-gray-300">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
