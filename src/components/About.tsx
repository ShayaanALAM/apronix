import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Dedicated project managers",
  "Agile development process",
  "Transparent communication",
  "Post-launch support",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-primary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Why Apronix
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Your Partner in{" "}
              <span className="gradient-text">Digital Growth</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're not just developers – we're your strategic partners in building 
              a powerful online presence. Our team combines creativity with technical 
              expertise to deliver solutions that exceed expectations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="text-6xl md:text-7xl font-bold gradient-text mb-4">5+</div>
                <div className="text-xl text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
