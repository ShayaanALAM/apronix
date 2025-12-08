import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sharma Electronics",
    category: "E-Commerce Store",
    description: "Complete online electronics store with payment gateway integration",
    color: "from-primary/40 to-accent/40",
    client: "Mumbai, Maharashtra",
  },
  {
    title: "PureVeda Wellness",
    category: "Health & Wellness",
    description: "Ayurvedic products marketplace with booking system",
    color: "from-accent/40 to-primary/40",
    client: "Jaipur, Rajasthan",
  },
  {
    title: "TechFlow Solutions",
    category: "SaaS Dashboard",
    description: "Enterprise CRM dashboard for IT company",
    color: "from-primary/40 to-accent/40",
    client: "Bangalore, Karnataka",
  },
  {
    title: "Spice Route Restaurant",
    category: "Restaurant Website",
    description: "Multi-cuisine restaurant with online ordering & table booking",
    color: "from-accent/40 to-primary/40",
    client: "Delhi NCR",
  },
  {
    title: "HomeNest Interiors",
    category: "Portfolio & Booking",
    description: "Interior design showcase with consultation booking",
    color: "from-primary/40 to-accent/40",
    client: "Pune, Maharashtra",
  },
  {
    title: "EduSpark Academy",
    category: "EdTech Platform",
    description: "Online learning platform with live classes & assessments",
    color: "from-accent/40 to-primary/40",
    client: "Hyderabad, Telangana",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Websites We've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real projects delivered to our satisfied clients across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
                <div className="relative z-10 text-center p-6">
                  <span className="text-4xl font-bold opacity-40 group-hover:opacity-60 transition-opacity">
                    {project.title.charAt(0)}
                  </span>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 mx-auto text-primary" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">📍 {project.client}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;