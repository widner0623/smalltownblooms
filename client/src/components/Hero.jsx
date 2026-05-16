import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { GiRose } from "react-icons/gi";
import FloatingParticles from "./FloatingParticles";

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0,120]);
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32">
      
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          y: backgroundY,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1974&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fff7f1]/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#fff7f1]/20 to-[#fff8f3]" />

      {/* Floating Particles */}
        <FloatingParticles />
        
      {/* Ambient Glow */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-20 top-32 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-rose-300/30 blur-3xl"
      />

      {/* Content */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        >
          
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#efd8d2] bg-white/70 px-6 py-3 backdrop-blur-md">
            <GiRose className="text-[#b85f68]" />
            <span className="text-sm font-medium tracking-wide text-[#7a5a50]">
              Handcrafted in Beaver Dam, Kentucky
            </span>
          </div>

          <h1 className="text-6xl font-semibold leading-[0.92] tracking-tight text-[#2d201c] md:text-8xl">
            Flowers That Feel
            <span className="block italic text-[#b85f68]">
              Personal.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-[#5f4a42]">
            Luxury floral arrangements thoughtfully designed to celebrate
            life’s most meaningful moments with beauty, emotion, and elegance.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            
            <button className="group flex items-center justify-center gap-3 rounded-full bg-[#d8787d] px-9 py-5 text-base font-semibold text-white shadow-xl transition hover:scale-105">
              Order Flowers
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-[#2d201c] bg-white/80 px-9 py-5 text-base font-semibold text-[#2d201c] backdrop-blur-md transition hover:bg-[#2d201c] hover:text-white">
              Wedding Consultations
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-12">
            
            <div>
              <h3 className="text-4xl font-semibold text-[#2d201c]">
                500+
              </h3>
              <p className="mt-2 text-[#7a5a50]">
                Floral Arrangements
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-[#2d201c]">
                120+
              </h3>
              <p className="mt-2 text-[#7a5a50]">
                Weddings Designed
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-[#2d201c]">
                5★
              </h3>
              <p className="mt-2 text-[#7a5a50]">
                Community Rated
              </p>
            </div>
          </div>
        </motion.div>
    </section>
  );
};

export default Hero;