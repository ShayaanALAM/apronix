import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EnquiryDialog from "@/components/EnquiryDialog";

const projects = [
  {
    title: "Sharma Electronics",
    category: "E-Commerce Store",
    description: "Complete online electronics store with payment gateway integration",
    client: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop",
  },
  {
    title: "PureVeda Wellness",
    category: "Health & Wellness",
    description: "Ayurvedic products marketplace with booking system",
    client: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop",
  },
  {
    title: "TechFlow Solutions",
    category: "SaaS Dashboard",
    description: "Enterprise CRM dashboard for IT company",
    client: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Spice Route Restaurant",
    category: "Restaurant Website",
    description: "Multi-cuisine restaurant with online ordering & table booking",
    client: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  },
  {
    title: "HomeNest Interiors",
    category: "Portfolio & Booking",
    description: "Interior design showcase with consultation booking",
    client: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
  },
  {
    title: "EduSpark Academy",
    category: "EdTech Platform",
    description: "Online learning platform with live classes & assessments",
    client: "Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
  },
];

const WorkPage = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real projects delivered to our satisfied clients across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-1 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <p className="text-xs text-muted-foreground/70">📍 {project.client}</p>
                </div>
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
              Want Your Business Here?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our growing list of satisfied clients. Let's build something amazing together.
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

export default WorkPage;
