import FadeIn from "./FadeIn";

const services = [
  { n: "01", name: "Web Development", desc: "Custom-built, high-performance websites and web apps using modern stacks like React, Next.js, and Node — scalable, secure, and fast." },
  { n: "02", name: "App Development", desc: "Cross-platform mobile and web apps with intuitive UX, smooth animations, and reliable backend integrations." },
  { n: "03", name: "UI/UX & Branding", desc: "Cohesive visual identities and interface design — from logos and brand systems to pixel-perfect product UI." },
  { n: "04", name: "SEO Optimization", desc: "Technical and on-page SEO that gets your business found — keyword strategy, site architecture, and Core Web Vitals." },
  { n: "05", name: "Digital Ads", desc: "Performance-driven Google and Meta ad campaigns with creative, targeting, and analytics that actually convert." },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>
      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? "1px solid rgba(12,12,12,0.15)" : undefined,
                borderBottom: "1px solid rgba(12,12,12,0.15)",
              }}
            >
              <div
                className="font-black shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 0.9 }}
              >
                {s.n}
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div
                  className="font-medium uppercase"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {s.name}
                </div>
                <div
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {s.desc}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
