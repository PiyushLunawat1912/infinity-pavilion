import React, { useEffect, useRef } from "react";

const SERVICES = [
  {
    name: "Wedding Events",
    description:
      "Elegant wedding celebrations with customizable layouts, décor, lighting, and seamless coordination.",
  },
  {
    name: "Corporate Functions",
    description:
      "Professional setups for conferences, meetings, product launches, and corporate gatherings.",
  },
  {
    name: "Concerts & DJ Nights",
    description:
      "High-energy concerts and DJ nights with cinematic lighting, sound systems, and crowd flow planning.",
  },
  {
    name: "Exhibitions & Flea Markets",
    description:
      "Spacious, flexible layouts ideal for exhibitions, pop-up events, and curated flea markets.",
  },
  {
    name: "School & College Annual Days",
    description:
      "Stage-ready venues for annual days, cultural programs, award ceremonies, and performances.",
  },
  {
    name: "Social Gatherings & Private Parties",
    description:
      "Intimate celebrations including birthdays, anniversaries, receptions, and private events.",
  },
];

const ServicesSection: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  /* ---------- Scroll animation ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("svc-show");
          } else {
            el.classList.remove("svc-show"); // replay animation
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---------- Schema.org Service SEO ---------- */
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Infinity Pavilion Event Services",
      "provider": {
        "@type": "Organization",
        "name": "Infinity Pavilion",
      },
      "areaServed": {
        "@type": "Country",
        "name": "India",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Event Services",
        "itemListElement": SERVICES.map((s, i) => ({
          "@type": "Offer",
          "position": i + 1,
          "itemOffered": {
            "@type": "Service",
            "name": s.name,
            "description": s.description,
          },
        })),
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section
      id="services"
      style={{
        background: "#F7EEDB",
        padding: "120px 20px",
        color: "#111",
      }}
    >
      <style>{`
        .svc-wrap {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* HEADER */
        .svc-head {
          text-align: center;
          margin-bottom: 90px;
        }

        .svc-eyebrow {
          font-size: 20px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #B8944E;
          margin-bottom: 10px;
        }

        .svc-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.6rem;
          font-weight: 600;
          line-height: 1.15;
          margin: 0;
        }

        /* GRID */
        .svc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
        }

        @media (min-width: 900px) {
          .svc-grid {
            grid-template-columns: 1fr 1fr;
            gap: 80px 100px;
          }
        }

        /* DESIGNER CARD */
        .svc-card {
          position: relative;
          padding: 52px 46px;
          background: #FFF9EE;
          border: 1.5px solid rgba(217,164,65,0.45);
          border-radius: 14px;
        }

        .svc-card::before {
          content: "";
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(217,164,65,0.25);
          pointer-events: none;
        }

        .svc-card h3 {
          font-size: 1.45rem;
          font-weight: 600;
          margin: 0 0 16px 0;
          font-family: 'Playfair Display', serif;
        }

        .svc-card p {
          font-size: 1.05rem;
          line-height: 1.85;
          color: #6b6052;
          margin: 0;
          max-width: 420px;
        }

        /* SCROLL ANIMATION */
        .svc-reveal {
          opacity: 0;
          transform: translateY(44px);
          transition:
            opacity 1100ms ease,
            transform 1100ms cubic-bezier(.22,.61,.36,1);
        }

        .svc-show {
          opacity: 1;
          transform: translateY(0);
        }

        /* STAGGER */
        .svc-delay-1 { transition-delay: 0ms; }
        .svc-delay-2 { transition-delay: 180ms; }
        .svc-delay-3 { transition-delay: 360ms; }
        .svc-delay-4 { transition-delay: 540ms; }
        .svc-delay-5 { transition-delay: 720ms; }
        .svc-delay-6 { transition-delay: 900ms; }
      `}</style>

      <div className="svc-wrap">
        {/* Header */}
        <header className="svc-head">
          <div className="svc-eyebrow">Services</div>
          <h2 className="svc-title">
            Versatile services designed<br />
            for every kind of celebration
          </h2>
        </header>

        {/* Cards */}
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <div
              key={i}
               ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={`svc-card svc-reveal svc-delay-${i + 1}`}
            >
              <h3>{s.name}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
