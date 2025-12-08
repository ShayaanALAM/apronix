import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    color: "from-primary/40 to-accent/40",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    color: "from-accent/40 to-primary/40",
  },
  {
    title: "Corporate Website",
    category: "Branding & Web",
    color: "from-primary/40 to-accent/40",
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
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse of the projects we've brought to life for our clients.
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
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
                <span className="text-3xl font-bold opacity-30 group-hover:opacity-50 transition-opacity">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
