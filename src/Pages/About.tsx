import { motion, useScroll, useTransform } from 'framer-motion';
import { FiAward, FiUsers, FiLayers } from 'react-icons/fi';
import TeamMemberCard from '../Components/TeamMemberCard';
import about1 from "../assets/about-1.jpg"
import about2 from "../assets/about-2.jpg"
import about3 from "../assets/about-3.jpg"

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Team data
  const team = [
    { name: "Alex Chen", role: "Creative Director", image: about1 },
    { name: "Jamie Rivera", role: "Lead Designer", image: about2 },
    { name: "Taylor Smith", role: "Motion Specialist", image: about3 }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
            Our Creative Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Where imagination meets exceptional digital experiences
          </p>
        </motion.div>

        <motion.div 
          style={{ y: yPos }}
          className="absolute inset-0 bg-[url('/about-hero-bg.jpg')] bg-cover bg-center opacity-20"
        />
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafting Digital Magic Since 2015</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We started as three friends in a garage, passionate about pushing creative boundaries. 
            Today we're an award-winning team transforming ideas into immersive digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: <FiAward className="w-8 h-8" />, title: "32 Awards", desc: "Industry recognition" },
            { icon: <FiUsers className="w-8 h-8" />, title: "150+ Clients", desc: "Global partnerships" },
            { icon: <FiLayers className="w-8 h-8" />, title: "400 Projects", desc: "Delivered with love" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-xl text-center"
            >
              <div className="text-blue-500 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Meet The Visionaries
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {team.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Core Belief</h3>
          <p className="text-lg md:text-xl leading-relaxed">
            "We believe exceptional design should be accessible, human-centered, 
            and create emotional connections that transcend pixels and screens."
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;