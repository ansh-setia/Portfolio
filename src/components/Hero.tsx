import { motion } from "framer-motion";
import bg from "../Images/bg.jpeg";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-black">
      {/* Background image */}
      <img
        src="/public/Images/bg.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Name with Reflection */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-white relative">
          <span className="block">Ansh Setia</span>
          <span
            className="block text-transparent bg-clip-text bg-white/60 transform scale-y-[-1] opacity-30 mt-2"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
            }}
          >
            Ansh Setia
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          UI/UX Designer • Web Developer • Community Builder
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#about"
            className="px-6 py-3 rounded-2xl bg-cyan-500 border-cyan-500 text-black font-bold shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transform transition"
          >
            Explore More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-2xl border border-white text-white font-bold hover:bg-white hover:text-black shadow-lg transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
