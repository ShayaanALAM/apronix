import { motion } from "framer-motion";
import { Code, Palette, Rocket, Search, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that captivate users and enhance engagement.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom-built websites with clean code, fast performance, and scalability.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect experiences across all devices, from mobile to desktop.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Lightning-fast loading speeds that keep visitors engaged and convert.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Built-in SEO best practices to boost your visibility and rankings.",
  },
  {
    icon: Zap,
    title: "Maintenance",
    description:
      "Ongoing support and updates to keep your website running smoothly.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to launch, we provide end-to-end web solutions that help your business thrive online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
