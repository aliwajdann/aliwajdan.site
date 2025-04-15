import { motion } from 'framer-motion';

interface nt {
name:string,
role:string,
image:string,
delay: number,
}

const TeamMemberCard = ({ name, role, image, delay = 0 }:nt) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="aspect-square overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-blue-500">{role}</p>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;