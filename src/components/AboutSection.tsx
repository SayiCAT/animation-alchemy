import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Sobre <span className="text-primary">Nuestro Estudio</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Con más de una década de experiencia, nuestro estudio de animación combina talento artístico con tecnología de punta para crear contenido visual inolvidable. Desde cortometrajes hasta campañas publicitarias, cada proyecto es una oportunidad para contar una historia única.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestro equipo multidisciplinario de animadores, ilustradores y directores creativos trabaja con pasión para superar las expectativas de cada cliente, entregando producciones de la más alta calidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
