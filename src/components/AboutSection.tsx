import React, { useEffect, useRef, useState } from "react";

type Stat = {
  title: string;
  value: number | null;
  suffix?: string;
  display?: string;
  decimals?: number;
};

const stats: Stat[] = [
  { title: "Total Land Area", value: 2.5, suffix: " Acres", decimals: 1 },
  { title: "Parking Area", value: 3500, suffix: " sq ft" },
  { title: "Lawn Area", value: 4200, suffix: " sq ft" },
  { title: "Guest Capacity", value: 4500, suffix: "+" },
  { title: "Stage Size", value: null, display: "40 × 60 ft" },
  { title: "Rooms", value: 12, suffix: "+" },
];

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  /* ---------- INTERSECTION OBSERVER (RE-ANIMATE ON RE-SCROLL) ---------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounts(stats.map(() => 0));
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------- COUNT UP (DECIMALS SUPPORTED) ---------- */
  useEffect(() => {
    if (!inView) return;

    stats.forEach((stat, index) => {
      if (stat.value === null) return;

      const duration = 1200;
      const start = performance.now();
      const decimals = stat.decimals ?? 0;

      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const raw = eased * stat.value!;
        const current =
          decimals > 0
            ? parseFloat(raw.toFixed(decimals))
            : Math.floor(raw);

        setCounts((prev) => {
          const next = [...prev];
          next[index] = current;
          return next;
        });

        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, [inView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: "#F7EEDB",
        padding: "90px 16px",
        position: "relative",
      }}
    >
      {/* ================= ABOUT CARD ================= */}
      <div
        style={{
          maxWidth: 940,
          margin: "0 auto",
          borderRadius: 20,
          border: "1px solid rgba(217,164,65,0.6)",
          background:
            "linear-gradient(180deg, #F7EEDB 0%, #F2E1C2 100%)",
          boxShadow: `
            0 0 28px rgba(217,164,65,0.35),
            0 30px 60px rgba(0,0,0,0.25)
          `,
          padding: "56px 24px",
          textAlign: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "all 900ms cubic-bezier(0.22,0.61,0.36,1)",
        }}
      >
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "2.2rem",
            fontWeight: 700,
            marginBottom: 24,
            color: "#111",
          }}
        >
          Every celebration deserves a space that feels effortless and elegant
        </h2>

        <p
          style={{
            maxWidth: 720,
            margin: "0 auto",
            color: "#7A6F62",
            fontSize: "1rem",
            lineHeight: 1.8,
            whiteSpace: "pre-line",
          }}
        >
{`Infinity Pavilion is a thoughtfully designed luxury event venue created to host weddings, receptions, corporate events, and private celebrations.

Our venue blends modern elegance, expansive spaces, and premium hospitality to ensure every event feels seamless and unforgettable.`}
        </p>
      </div>

      {/* ================= STATS GRID ================= */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div
            key={stat.title}
            className="stat-card"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: `all 600ms ease ${i * 120}ms`,
            }}
          >
            <div className="stat-value">
              {stat.value !== null
                ? counts[i].toLocaleString() + (stat.suffix || "")
                : stat.display}
            </div>
            <div className="stat-label">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        /* ===== STATS GRID ===== */
        .stats-grid {
          margin-top: 48px;
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(2, 1fr);
        }

        /* Tablet */
        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .stats-grid {
            gap: 28px;
          }
        }

        /* ===== STAT CARD ===== */
        .stat-card {
          background: linear-gradient(180deg, #F9F0DB, #F1DFAF);
          border: 1px solid rgba(217,164,65,0.45);
          border-radius: 16px;
          padding: 28px 18px;
          text-align: center;

          box-shadow:
            0 0 14px rgba(217,164,65,0.22),
            0 14px 30px rgba(0,0,0,0.16);
        }

        .stat-value {
          font-family: "Playfair Display", serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #111;
        }

        @media (min-width: 768px) {
          .stat-value {
            font-size: 1.9rem;
          }
        }

        .stat-label {
          margin-top: 10px;
          font-size: 15px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #B8944E;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
