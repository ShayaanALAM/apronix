import apronixLogo from "@/assets/apronix-logo.jpeg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={apronixLogo} alt="Apronix" className="h-8 w-auto" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#work" className="hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2024 Apronix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
