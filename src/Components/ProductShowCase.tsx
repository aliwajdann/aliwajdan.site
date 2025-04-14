import { motion } from 'framer-motion';
// import styles from '../styles.css'
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"

const ProductShowcase = () => {
  // Category navigation items
  const categories = [
    { name: 'Running', href: '#' },
    { name: 'Basketball', href: '#' },
    { name: 'Golf', href: '#' }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Text Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            THE RAREST CLUB IN GOLF
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8">
            HAS A NEW MEMBER.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition">
            Shop Championship Styles
          </button>
        </motion.div>
      </div>

      {/* Category Navigation */}
      <nav className="max-w-7xl mx-auto mb-12 border-b border-gray-200">
        <ul className="flex justify-center space-x-4 sm:space-x-8 md:space-x-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href={category.href}
                className="whitespace-nowrap px-2 py-1 text-sm sm:text-base md:text-lg font-medium hover:text-gray-900 transition"
              >
                Shop {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Product Grid - Example Placeholder */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product 1 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gray-100 rounded-lg overflow-hidden"
        >
          <div className="aspect-square bg-gray-300">
          <div className="aspect-square">
  <img src={p1} alt={p1} className="w-full h-full object-cover" />
</div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Golf Collection</h3>
            <p className="text-gray-600">Championship Styles</p>
          </div>
        </motion.div>

        {/* Product 2 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gray-100 rounded-lg overflow-hidden"
        >
          <div className="aspect-square bg-gray-300">
          <div className="aspect-square">
  <img src={p2} alt={p2} className="w-full h-full object-cover" />
</div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Running Shoes</h3>
            <p className="text-gray-600">New Releases</p>
          </div>
        </motion.div>

        {/* Product 3 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gray-100 rounded-lg overflow-hidden"
        >
          <div className="aspect-square bg-gray-300">
          <div className="aspect-square">
  <img src={p3} alt={p3} className="w-full h-full object-cover" />
</div>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Basketball Gear</h3>
            <p className="text-gray-600">Limited Edition</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;