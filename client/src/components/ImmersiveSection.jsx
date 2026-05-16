import { motion } from "framer-motion";
import { GiFlowerStar, GiButterflyFlower, GiFallingLeaf } from "react-icons/gi";
import FloatingParticles from "./FloatingParticles";

const ImmersiveSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff8f3] px-6 py-32 text-center">

      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-20 h-48 w-48 rounded-full bg-pink-200/40 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-1/4 bottom-20 h-56 w-56 rounded-full bg-green-100/50 blur-3xl"
      />
      <FloatingParticles />

      <GiFlowerStar className="absolute left-[12%] top-[25%] text-5xl text-[#d8a7ae]/40" />
      <GiFallingLeaf className="absolute right-[18%] top-[30%] text-5xl text-[#9fb58f]/40" />
      <GiButterflyFlower className="absolute bottom-[22%] left-[22%] text-6xl text-[#d8a7ae]/30" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-5xl rounded-[3rem] border border-[#f1ddd7] bg-white/60 px-8 py-24 shadow-xl backdrop-blur-xl"
      >
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#f4ddd8] text-[#b85f68]">
          <GiFlowerStar className="text-4xl" />
        </div>

        <h2 className="text-5xl font-semibold leading-tight md:text-7xl">
          An Immersive
          <span className="block italic text-[#b85f68]">
            Floral Experience
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[#6b5148]">
          Every arrangement is designed like a work of art — layered with
          texture, color, movement, and emotion to create moments people
          remember.
        </p>
      </motion.div>
    </section>
  );
};

export default ImmersiveSection;