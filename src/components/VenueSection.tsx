import React, { useEffect, useRef, useState } from "react";
import v1 from "../assets/hero.png";
import v2 from "../assets/hero.png";
import v3 from "../assets/hero.png";

const venues = [
  {
    img: v1,
    title: "Grand Hall",
    subtitle: "Elegant receptions",
    filter: "brightness(0.95) contrast(1.1)",
  },
  {
    img: v2,
    title: "Banquet Space",
    subtitle: "Warm intimate gatherings",
    filter: "brightness(0.9) saturate(1.15)",
  },
  {
    img: v3,
    title: "Lounge & Foyer",
    subtitle: "Modern welcome area",
    filter: "brightness(1) contrast(1.05)",
  },
];

const VenueSection: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openImg, setOpenImg] = useState<string | null>(null);

  /* ---------- SCROLL REVEAL ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "venue-visible",
            entry.isIntersecting
          );
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.transitionDelay = `${i * 420}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ---------- ESC TO CLOSE ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImg(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <section
        id="venue"
        style={{ background: "#F7EEDB", padding: "96px 20px" }}
      >
        <style>{`
          .venue-wrap { max-width:1200px; margin:0 auto; }
          .venue-header { text-align:center; margin-bottom:56px; }

          .venue-eyebrow {
            color:#B8944E;
            letter-spacing:0.18em;
            font-size:20px;
            text-transform:uppercase;
          }

          .venue-title {
            font-family:'Playfair Display', serif;
            font-size:2.6rem;
            color:#111;
          }

          .venue-grid {
            display:grid;
            gap:28px;
          }

          @media(min-width:900px){
            .venue-grid { grid-template-columns:repeat(3,1fr); }
          }

          /* ---------- CARD ---------- */
          .venue-card {
            position:relative;
            border-radius:14px;
            overflow:hidden;
            cursor:pointer;
            border:1.5px solid rgba(217,164,65,0.65);
            box-shadow:
              0 0 22px rgba(217,164,65,0.35),
              0 18px 40px rgba(0,0,0,0.28);
            opacity:0;
            transform:translateY(70px);
            transition:all 1.3s cubic-bezier(.22,.61,.36,1);
          }

          .venue-card.venue-visible {
            opacity:1;
            transform:translateY(0);
          }

          .venue-card:hover {
            box-shadow:
              0 0 36px rgba(217,164,65,0.6),
              0 28px 60px rgba(0,0,0,0.45);
          }

          .venue-card img {
            width:100%;
            height:360px;
            object-fit:cover;
            transition:transform .9s ease;
          }

          .venue-card:hover img { transform:scale(1.06); }

          .venue-overlay {
            position:absolute;
            inset:0;
            background:linear-gradient(to top,rgba(0,0,0,.55),rgba(0,0,0,.1));
          }

          .venue-caption {
            position:absolute;
            bottom:0;
            padding:20px;
            color:#fff;
          }

          /* ---------- MODAL ---------- */
          .venue-modal {
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.88);
            backdrop-filter:blur(6px);
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:2000;
            animation:fadeIn .4s ease;
          }

          .venue-modal img {
            max-width:92vw;
            max-height:88vh;
            border-radius:16px;
            box-shadow:
              0 0 40px rgba(217,164,65,0.45),
              0 30px 80px rgba(0,0,0,0.7);
            animation:zoomIn .45s cubic-bezier(.22,.61,.36,1);
          }

          .venue-close {
            position:absolute;
            top:24px;
            right:24px;
            width:44px;
            height:44px;
            border-radius:50%;
            background:#111;
            color:#fff;
            display:grid;
            place-items:center;
            font-size:20px;
            cursor:pointer;
          }

          @keyframes fadeIn {
            from{opacity:0}
            to{opacity:1}
          }

          @keyframes zoomIn {
            from{transform:scale(.92);opacity:0}
            to{transform:scale(1);opacity:1}
          }
        `}</style>

        <div className="venue-wrap">
          <div className="venue-header">
            <div className="venue-eyebrow">Our Venue</div>
            <h2 className="venue-title">
              Spaces crafted for unforgettable celebrations
            </h2>
          </div>

          <div className="venue-grid">
            {venues.map((v, i) => (
              <div
                key={i}
                ref={(el) => {
                cardRefs.current[i] = el;
              }}
                className="venue-card"
                onClick={() => setOpenImg(v.img)}
              >
                <img src={v.img} alt={v.title} style={{ filter: v.filter }} />
                <div className="venue-overlay" />
                <div className="venue-caption">
                  <h3>{v.title}</h3>
                  <p>{v.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- IMAGE POPUP ---------- */}
      {openImg && (
        <div className="venue-modal" onClick={() => setOpenImg(null)}>
          <div className="venue-close">✕</div>
          <img src={openImg} alt="Venue" />
        </div>
      )}
    </>
  );
};

export default VenueSection;
