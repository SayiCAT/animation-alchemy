import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-primary-foreground/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-primary-foreground/10"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            ¿Listo para Animar tu Proyecto?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Cuéntanos tu idea y juntos crearemos algo extraordinario. Nuestro equipo está listo para dar vida a tu visión.
          </p>
          <motion.a
            href="mailto:contacto@estudioanima.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 rounded-full bg-accent text-accent-foreground font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Contáctanos Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
