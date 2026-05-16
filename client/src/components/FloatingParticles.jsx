import { motion } from "framer-motion";

const particles = Array.from({ length: 12 });

const FloatingParticles = () => {
  return (
    <>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-pink-200/50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20 + Math.random() * 40, 0],
            x: [0, -10 + Math.random() * 20, 0],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;