import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import WhyChooseUs from "../Components/WhyChooseUs";
import Technologies from "../Components/Technologies";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Modern, responsive websites built for performance and user experience.",
  },
  {
    title: "UI/UX Design",
    description: "Visually stunning designs with intuitive, user-focused interfaces.",
  },
  {
    title: "SEO Optimization",
    description: "Rank higher and reach your audience with smart SEO strategies.",
  },
  // {
  //   title: "E-commerce Solutions",
  //   description: "Scalable, secure online stores tailored for conversions.",
  // },
];

export default function Services() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
    <motion.div
       style={{minHeight: "80vh"}}
      className="bg-gray-900 text-white px-4 py-16 mt-16 w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
        Our Services
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
{/* <WhyChooseUs /> */}
<Technologies />
    </>
);
}
