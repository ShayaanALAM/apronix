import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner, Sharma Electronics",
    location: "Mumbai",
    content: "Apronix ne humari e-commerce website ko bilkul naya roop diya. Sales 3x badh gayi! Bahut professional team hai.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Founder, PureVeda Wellness",
    location: "Jaipur",
    content: "Best decision was to choose Apronix for our wellness brand website. The design is stunning and customers love the user experience.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CEO, TechFlow Solutions",
    location: "Bangalore",
    content: "Our CRM dashboard was delivered on time with all the features we needed. The team understood our requirements perfectly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sunita Gupta",
    role: "Owner, Spice Route Restaurant",
    location: "Delhi NCR",
    content: "Online orders ne humara business transform kar diya. Apronix ki team ne bohot achha kaam kiya. Thank you!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Director, HomeNest Interiors",
    location: "Pune",
    content: "Professional, creative, and reliable. Our portfolio website has helped us attract premium clients. Excellent work by Apronix team!",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Founder, EduSpark Academy",
    location: "Hyderabad",
    content: "The EdTech platform they built for us is feature-rich and student-friendly. Parents and students both appreciate the seamless experience.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trusted by businesses across India for quality web solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 relative group hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary/70">📍 {testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;