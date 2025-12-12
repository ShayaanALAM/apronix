import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Sharma Electronics",
    category: "E-Commerce Store",
    description: "Complete online electronics store with payment gateway integration",
    client: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
  },
  {
    title: "PureVeda Wellness",
    category: "Health & Wellness",
    description: "Ayurvedic products marketplace with booking system",
    client: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
  },
  {
    title: "TechFlow Solutions",
    category: "SaaS Dashboard",
    description: "Enterprise CRM dashboard for IT company",
    client: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Spice Route Restaurant",
    category: "Restaurant Website",
    description: "Multi-cuisine restaurant with online ordering & table booking",
    client: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1522542550221-31fd8575f5a2?w=800&h=600&fit=crop",
  },
  {
    title: "HomeNest Interiors",
    category: "Portfolio & Booking",
    description: "Interior design showcase with consultation booking",
    client: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
  },
  {
    title: "EduSpark Academy",
    category: "EdTech Platform",
    description: "Online learning platform with live classes & assessments",
    client: "Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop",
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
              className="group relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 mx-auto text-primary" />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
