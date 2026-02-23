import { motion } from "framer-motion";
import { Film, Palette, Sparkles, Monitor, Music, Clapperboard } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Animación 2D",
    description: "Animaciones clásicas y modernas con estilo único, perfectas para series, cortos y contenido digital.",
  },
  {
    icon: Monitor,
    title: "Animación 3D",
    description: "Modelado, texturizado y animación tridimensional con los más altos estándares de la industria.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Gráficos en movimiento para publicidad, redes sociales y presentaciones corporativas impactantes.",
  },
  {
    icon: Palette,
    title: "Diseño de Personajes",
    description: "Creación de personajes memorables con personalidad propia que conecten con tu audiencia.",
  },
  {
    icon: Clapperboard,
    title: "Storyboarding",
    description: "Planificación visual completa de tu proyecto, desde el concepto hasta la narrativa final.",
  },
  {
    icon: Music,
    title: "Postproducción",
    description: "Edición, efectos de sonido y musicalización para dar el toque final perfecto a tu animación.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones completas de animación para llevar tu visión creativa al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
