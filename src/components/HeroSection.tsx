import { motion } from "framer-motion";
import heroImage from "@/assets/hero-studio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="Estudio de animación" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-10 mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground font-display text-sm mb-6 backdrop-blur-sm border border-primary-foreground/10"
          >
            ✨ Animación con Propósito Bíblico
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Historias Bíblicas
            <br />
            <span className="text-accent">Cobran Vida</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-body mb-10 max-w-2xl leading-relaxed">
            Somos un estudio especializado en animación 2D y 3D que da vida a las historias de la Biblia. Transformamos las escrituras en experiencias visuales que inspiran, educan y fortalecen la fe.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-accent text-accent-foreground font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Comenzar un Proyecto
            </motion.a>
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-primary-foreground/15 text-primary-foreground font-display font-semibold text-lg backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/25 transition-colors"
            >
              Ver Servicios
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative shapes */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 md:right-32 w-20 h-20 rounded-2xl bg-accent/30 backdrop-blur-sm rotate-12"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-32 right-20 md:right-48 w-14 h-14 rounded-full bg-primary-foreground/15 backdrop-blur-sm"
      />
    </section>
  );
};

export default HeroSection;
