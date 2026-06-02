import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: "clip" }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        <Link
          to="/"
          className="text-[#D7E2EA] font-black uppercase tracking-wider text-base md:text-xl lg:text-2xl hover:opacity-70 transition-opacity"
        >
          Shayaan
        </Link>
        <div className="flex gap-5 md:gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-lg hover:opacity-70 transition-opacity duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </FadeIn>

      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-2">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&rsquo;m shayaan
          </h1>
        </FadeIn>
      </div>

      <div className="flex-1 relative">
        <FadeIn
          delay={0.6}
          y={30}
          className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Shayaan portrait"
              className="w-full h-auto"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a web development agency crafting striking and unforgettable digital experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
