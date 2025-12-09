import { motion } from "framer-motion";
import { Code, Palette, Rocket, Search, Smartphone, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EnquiryDialog from "@/components/EnquiryDialog";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that captivate users and enhance engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom-built websites with clean code, fast performance, and scalability.",
    features: ["React/Next.js", "Node.js Backend", "Database Design", "API Integration", "Cloud Deployment"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Pixel-perfect experiences across all devices, from mobile to desktop.",
    features: ["Mobile-First Approach", "Cross-Browser Compatible", "Touch-Friendly", "Adaptive Layouts", "Retina Ready"],
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds that keep visitors engaged and convert.",
    features: ["Code Optimization", "Image Compression", "CDN Setup", "Caching Strategies", "Core Web Vitals"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in SEO best practices to boost your visibility and rankings.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy", "Analytics Setup"],
  },
  {
    icon: Zap,
    title: "Maintenance & Support",
    description: "Ongoing support and updates to keep your website running smoothly.",
    features: ["24/7 Monitoring", "Security Updates", "Content Updates", "Performance Tuning", "Priority Support"],
  },
];

const ServicesPage = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              What We <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From concept to launch, we provide comprehensive web solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <Button variant="gradient" size="xl" onClick={() => setIsEnquiryOpen(true)}>
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <EnquiryDialog isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </div>
  );
};

export default ServicesPage;
