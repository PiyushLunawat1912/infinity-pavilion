import React, { useEffect, useRef, useState } from "react";

const IMAGES = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  "https://images.unsplash.com/photo-1529636406214-df4d1d180b3b",
  "https://images.unsplash.com/photo-1530026186672-1f9f66f0b82e",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
  "https://images.unsplash.com/photo-1524230572899-a752b3835840",
  "https://images.unsplash.com/photo-1520690214124-2eecad5a6b62",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
];

const GallerySection: React.FC = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  /* ---------- SCROLL REVEAL ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("gp-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.transitionDelay = `${i * 140}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="gallery"
        style={{
          background: "#F7EEDB",
          padding: "100px 20px",
        }}
      >
        <style>{`
          /* ---------- WRAP ---------- */
          .gp-wrap {
            max-width: 1300px;
            margin: 0 auto;
          }

          .gp-head {
            text-align: center;
            margin-bottom: 48px;
          }

          .gp-eyebrow {
            color: #B8944E;
            letter-spacing: 0.18em;
            font-size: 20px;
            text-transform: uppercase;
            margin-bottom: 8px;
          }

          .gp-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.6rem;
            color: #111;
          }

          /* ---------- GRID ---------- */
          .gp-grid {
            display: grid;
            gap: 22px;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          }

          /* ---------- CARD (PERMANENT GOLD GLOW) ---------- */
          .gp-item {
            position: relative;
            aspect-ratio: 4 / 3;
            border-radius: 14px;
            overflow: hidden;
            cursor: pointer;

            /* GOLD FRAME */
            border: 1.5px solid rgba(217,164,65,0.65);

            /* PERMANENT GOLD GLOW */
            box-shadow:
              0 0 0 1px rgba(217,164,65,0.45),
              0 0 22px rgba(217,164,65,0.35),
              0 18px 40px rgba(0,0,0,0.28);

            opacity: 0;
            transform: translateY(60px) scale(0.97);
            transition:
              opacity 1.4s cubic-bezier(.22,.61,.36,1),
              transform 1.4s cubic-bezier(.22,.61,.36,1),
              box-shadow 0.5s ease;
          }

          .gp-item.gp-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          /* SLIGHTLY STRONGER ON HOVER */
          .gp-item:hover {
            box-shadow:
              0 0 0 1px rgba(217,164,65,0.9),
              0 0 36px rgba(217,164,65,0.55),
              0 24px 54px rgba(0,0,0,0.4);
          }

          /* INNER GOLD EDGE (LUXURY FRAME) */
          .gp-item::before {
            content: "";
            position: absolute;
            inset: 6px;
            border-radius: 10px;
            border: 1px solid rgba(217,164,65,0.25);
            pointer-events: none;
            z-index: 2;
          }

          /* ---------- IMAGE ---------- */
          .gp-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            opacity: 0;
            transition: opacity 0.6s ease, transform 0.7s ease;
          }

          .gp-item img.gp-loaded {
            opacity: 1;
          }

          .gp-item:hover img {
            transform: scale(1.07);
          }

          /* ---------- GOLD OVERLAY ---------- */
          .gp-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(217,164,65,0.12),
              rgba(217,164,65,0.05)
            );
            opacity: 0;
            transition: opacity 0.45s ease;
          }

          .gp-item:hover .gp-overlay {
            opacity: 1;
          }

          /* ---------- MODAL ---------- */
          .gp-modal {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.85);
            backdrop-filter: blur(5px);
            z-index: 1600;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .gp-modal img {
            max-width: 92vw;
            max-height: 88vh;
            border-radius: 14px;
            box-shadow: 0 30px 90px rgba(0,0,0,0.55);
          }

          .gp-close {
            position: absolute;
            top: 24px;
            right: 24px;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: #111;
            color: #fff;
            display: grid;
            place-items: center;
            font-size: 20px;
            cursor: pointer;
          }
        `}</style>

        <div className="gp-wrap">
          <div className="gp-head">
            <div className="gp-eyebrow">Gallery</div>
            <h2 className="gp-title">A glimpse into our celebrations</h2>
          </div>

          <div className="gp-grid">
            {IMAGES.map((src, i) => (
              <div
                key={i}
                className="gp-item"
             ref={(el) => {
                itemRefs.current[i] = el;
              }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  onLoad={(e) =>
                    (e.currentTarget as HTMLImageElement).classList.add(
                      "gp-loaded"
                    )
                  }
                />
                <div className="gp-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div className="gp-modal" onClick={() => setOpen(false)}>
          <div className="gp-close">✕</div>
          <img src={IMAGES[index]} alt="" />
        </div>
      )}
    </>
  );
};

export default GallerySection;
