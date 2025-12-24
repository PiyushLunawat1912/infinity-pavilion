import React from "react";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const FooterSection: React.FC = () => {
  return (
    <footer style={{ background: "#fce7b8ff" }}>
      {/* 🔥 LOCAL SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventVenue",
            name: "Infinity Pavilion",
            description:
              "A refined destination for weddings, receptions and premium celebrations.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Address Line",
              addressLocality: "City",
              addressRegion: "State",
              postalCode: "000000",
              addressCountry: "IN",
            },
            telephone: "+91 98765 43210",
            email: "infinitypavilion@email.com",
          }),
        }}
      />

      <style>{`
        .ft-wrap {
          max-width:1200px;
          margin:0 auto;
          padding:18px 20px;
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:20px;
        }

        .ft-col { flex:1 1 240px; }

        .ft-brand {
          display:flex;
          align-items:center;
          gap:8px;
          margin-bottom:4px;
        }

        .ft-logo {
          width:34px;
          height:34px;
          border-radius:50%;
          background:linear-gradient(90deg,#D9A441,#EDD79A);
          display:grid;
          place-items:center;
          font-weight:800;
          font-size:16px;
          color:#111;
        }

        .ft-name {
          font-family:'Playfair Display', serif;
          font-size:14px;
          font-weight:700;
          color:#111;
        }

        .ft-desc {
          font-size:12px;
          color:#6b6052;
          line-height:1.45;
          max-width:360px;
          margin:4px 0 6px;
        }

        .ft-links {
          display:flex;
          gap:12px;
          flex-wrap:wrap;
        }

        .ft-links a {
          font-size:12px;
          font-weight:600;
          color:#111;
          text-decoration:none;
        }

        .ft-social {
          display:flex;
          gap:10px;
          margin-top:8px;
        }

        .ft-social a {
          width:30px;
          height:30px;
          border-radius:8px;
          background:rgba(0,0,0,0.06);
          display:grid;
          place-items:center;
          color:#111;
          transition: all 220ms ease;
        }

        .ft-social a:hover {
          background:linear-gradient(90deg,#D9A441,#EDD79A);
          box-shadow:0 6px 18px rgba(217,164,65,0.45);
          transform:translateY(-2px);
        }

        .ft-title {
          font-size:13px;
          font-weight:700;
          margin-bottom:4px;
          color:#111;
        }

        .ft-text {
          font-size:12px;
          color:#6b6052;
          line-height:1.45;
        }

        .ft-bottom {
          border-top:1px solid rgba(0,0,0,0.05);
          padding:10px 20px;
          font-size:11px;
          color:#6b6052;
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:8px;
        }
      `}</style>

      <div className="ft-wrap">
        {/* LEFT */}
        <div className="ft-col">
          <div className="ft-brand">
            <div className="ft-logo">∞</div>
            <div className="ft-name">Infinity Pavilion</div>
          </div>

          <p className="ft-desc">
            Built for weddings, concerts, exhibitions, and everything beyond.
          </p>

          <div className="ft-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#venue">Venue</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="ft-social">
            <a
              href="https://www.instagram.com/infinity_pavilion?igsh=ZXdzdmNkemJ5bG03"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>

            <a
              href="https://wa.me/7875323237"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>

            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="ft-col">
          <div className="ft-title">Visit Us</div>

          <p className="ft-text">
            Infinity Pavilion<br />
            Pune Nagar Rd, in front of Lexicon International School, next to Chroma,
            Wagholi, Pune, Maharashtra 412207
          </p>

          <p className="ft-text" style={{ marginTop: 4 }}>
            📞 +91-7875323237<br />
            ✉️ infinitypavilion@gmail.com
          </p>
        </div>
      </div>

      <div className="ft-bottom">
        <div>© {new Date().getFullYear()} Infinity Pavilion</div>
        <div>Privacy · Terms</div>
      </div>
    </footer>
  );
};

export default FooterSection;
