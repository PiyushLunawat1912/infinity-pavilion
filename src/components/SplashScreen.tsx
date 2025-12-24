import React, { useEffect, useState } from "react";
import logo from "../assets/Infinity-Pavilion-logo.jpg";

interface SplashProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashProps> = ({ onFinish }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 7200);
    const t2 = setTimeout(onFinish, 8200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <div className={`splash ${exit ? "splash-exit" : ""}`}>
      <style>{`
        /* ===============================
           BASE SPLASH
        =============================== */
        .splash {
          position: fixed;
          inset: 0;
          background: #000;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: opacity 1.2s ease;
        }

        .splash-exit {
          opacity: 0;
          pointer-events: none;
        }

        /* ===============================
           GOLD AMBIENT GLOW
        =============================== */
        .gold-glow {
          position: absolute;
          inset: -40%;
          background: radial-gradient(
            circle at center,
            rgba(217,164,65,0.18),
            rgba(217,164,65,0.08),
            transparent 60%
          );
          animation: glowPulse 8s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0% { opacity: 0.55; }
          50% { opacity: 0.9; }
          100% { opacity: 0.55; }
        }

        /* ===============================
           MOVING GOLD LIGHT SWEEP
        =============================== */
        .light-sweep {
          position: absolute;
          top: -60%;
          left: -120%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            transparent 45%,
            rgba(217,164,65,0.15),
            transparent 55%
          );
          animation: sweepMove 10s linear infinite;
          pointer-events: none;
        }

        @keyframes sweepMove {
          from { transform: translateX(0); }
          to { transform: translateX(60%); }
        }

        /* ===============================
           GOLD SPARKLES
        =============================== */
        .sparkles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .sparkle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, #FFDFA3, #D9A441);
          border-radius: 50%;
          opacity: 0;
          animation: sparkleFloat 6s linear infinite;
          box-shadow: 0 0 12px rgba(217,164,65,0.8);
        }

        @keyframes sparkleFloat {
          0% {
            transform: translateY(40px) scale(0.6);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-120px) scale(1);
            opacity: 0;
          }
        }

        /* ===============================
           INNER CONTENT
        =============================== */
        .splash-inner {
          position: relative;
          text-align: center;
          padding: 24px;
          width: 100%;
          max-width: 520px;
          z-index: 2;
        }

        /* GOLD LINE */
        .splash-line {
          width: 0;
          height: 2px;
          margin: 0 auto 28px;
          background: linear-gradient(90deg, #D9A441, #EDD79A);
          animation: drawLine 2.4s ease forwards;
          box-shadow: 0 0 18px rgba(217,164,65,0.6);
        }

        @keyframes drawLine {
          from { width: 0; }
          to { width: clamp(120px, 30vw, 180px); }
        }

        /* TITLE */
        .splash-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 4.8vw, 2.8rem);
          letter-spacing: clamp(0.18em, 2.8vw, 0.32em);
          color: #fff;
          opacity: 0;
          animation: titleReveal 2.6s ease forwards;
          animation-delay: 1.8s;
          white-space: nowrap;
          text-shadow:
            0 0 18px rgba(217,164,65,0.35),
            0 8px 40px rgba(0,0,0,0.8);
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            letter-spacing: 0.45em;
          }
          to {
            opacity: 1;
            letter-spacing: clamp(0.18em, 2.8vw, 0.24em);
          }
        }

        /* SUBTITLE */
        .splash-sub {
          margin-top: 10px;
          font-size: clamp(0.6rem, 2vw, 0.8rem);
          letter-spacing: clamp(0.28em, 2.4vw, 0.4em);
          color: rgba(255,255,255,0.7);
          opacity: 0;
          animation: fadeUp 1.6s ease forwards;
          animation-delay: 4s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===============================
           LOGO WITH HALO (BIGGER)
        =============================== */
        .splash-logo-wrap {
          position: relative;
          width: clamp(110px, 26vw, 150px);
          height: clamp(110px, 26vw, 150px);
          margin: 48px auto 0;
          display: grid;
          place-items: center;
        }

        .logo-halo {
          position: absolute;
          inset: -22px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(217,164,65,0.45),
            rgba(217,164,65,0.15),
            transparent 65%
          );
          filter: blur(16px);
          animation: haloPulse 4.5s ease-in-out infinite;
        }

        @keyframes haloPulse {
          0% { opacity: 0.5; }
          50% { opacity: 0.85; }
          100% { opacity: 0.5; }
        }

        .splash-logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          opacity: 0;
          animation: logoReveal 2s ease forwards;
          animation-delay: 5.2s;
          box-shadow:
            0 12px 40px rgba(217,164,65,0.45),
            0 20px 60px rgba(0,0,0,0.8);
          background: #000;
        }

        .splash-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes logoReveal {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* GOLD EFFECT LAYERS */}
      <div className="gold-glow" />
      <div className="light-sweep" />

      {/* SPARKLES */}
      <div className="sparkles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="splash-inner">
        <div className="splash-line" />

        <div className="splash-title">
          INFINITY&nbsp;&nbsp;PAVILION
        </div>

        <div className="splash-sub">
          LUXURY EVENT VENUE
        </div>

        <div className="splash-logo-wrap">
          <div className="logo-halo" />
          <div className="splash-logo">
            <img src={logo} alt="Infinity Pavilion Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
